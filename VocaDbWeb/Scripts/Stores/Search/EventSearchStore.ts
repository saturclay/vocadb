import PagingProperties from '@DataContracts/PagingPropertiesContract';
import PartialFindResultContract from '@DataContracts/PartialFindResultContract';
import ReleaseEventContract from '@DataContracts/ReleaseEvents/ReleaseEventContract';
import ArtistRepository from '@Repositories/ArtistRepository';
import ReleaseEventRepository from '@Repositories/ReleaseEventRepository';
import GlobalValues from '@Shared/GlobalValues';
import { computed, makeObservable, observable, reaction } from 'mobx';

import ArtistFilters from './ArtistFilters';
import { ICommonSearchStore } from './CommonSearchStore';
import SearchCategoryBaseStore from './SearchCategoryBaseStore';

// Corresponds to the EventSortRule enum in C#.
export enum EventSortRule {
	None = 'None',
	Name = 'Name',
	Date = 'Date',
	AdditionDate = 'AdditionDate',
	SeriesName = 'SeriesName',
	VenueName = 'VenueName',
}

export default class EventSearchStore extends SearchCategoryBaseStore<ReleaseEventContract> {
	@observable public afterDate?: Date = undefined;
	@observable public allowAliases = false;
	public readonly artistFilters: ArtistFilters;
	@observable public beforeDate?: Date = undefined;
	@observable public category = '';
	@observable public onlyMyEvents = false;
	@observable public sort = EventSortRule.Name;

	public constructor(
		commonSearchStore: ICommonSearchStore,
		private readonly values: GlobalValues,
		private readonly eventRepo: ReleaseEventRepository,
		artistRepo: ArtistRepository,
	) {
		super(commonSearchStore);

		makeObservable(this);

		this.artistFilters = new ArtistFilters(values, artistRepo);

		reaction(() => this.afterDate, this.updateResultsWithTotalCount);
		reaction(
			() => this.artistFilters.filters,
			this.updateResultsWithTotalCount,
		);
		reaction(() => this.beforeDate, this.updateResultsWithTotalCount);
		reaction(() => this.category, this.updateResultsWithTotalCount);
		reaction(() => this.onlyMyEvents, this.updateResultsWithTotalCount);
		reaction(() => this.sort, this.updateResultsWithTotalCount);
	}

	@computed public get fields(): string {
		return this.showTags
			? 'AdditionalNames,MainPicture,Series,Venue,Tags'
			: 'AdditionalNames,MainPicture,Series,Venue';
	}

	public loadResults = (
		pagingProperties: PagingProperties,
		searchTerm: string,
		tags: number[],
		childTags: boolean,
		status?: string,
	): Promise<PartialFindResultContract<ReleaseEventContract>> => {
		return this.eventRepo.getList({
			queryParams: {
				start: pagingProperties.start,
				maxResults: pagingProperties.maxEntries,
				getTotalCount: pagingProperties.getTotalCount,
				lang: this.values.languagePreference,
				query: searchTerm,
				sort: this.sort,
				category: this.category === 'Unspecified' ? undefined : this.category,
				childTags: childTags,
				tagIds: tags,
				userCollectionId: this.onlyMyEvents
					? this.values.loggedUserId
					: undefined,
				artistId: this.artistFilters.artistIds,
				childVoicebanks: this.artistFilters.childVoicebanks,
				includeMembers: this.artistFilters.includeMembers,
				afterDate: this.afterDate,
				beforeDate: this.beforeDate,
				status: status,
				fields: this.fields,
			},
		});
	};
}