import SafeAnchor from '@Bootstrap/SafeAnchor';
import EntryCountBox from '@Components/Shared/Partials/EntryCountBox';
import ServerSidePaging from '@Components/Shared/Partials/Knockout/ServerSidePaging';
import DraftIcon from '@Components/Shared/Partials/Shared/DraftIcon';
import EntryStatus from '@Models/EntryStatus';
import EntryUrlMapper from '@Shared/EntryUrlMapper';
import TagSearchStore, { TagSortRule } from '@Stores/Search/TagSearchStore';
import classNames from 'classnames';
import { runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface TagSearchListProps {
	tagSearchStore: TagSearchStore;
}

const TagSearchList = observer(
	({ tagSearchStore }: TagSearchListProps): React.ReactElement => {
		const { t } = useTranslation(['ViewRes', 'ViewRes.Search']);

		return (
			<>
				<EntryCountBox pagingStore={tagSearchStore.paging} />

				<ServerSidePaging pagingStore={tagSearchStore.paging} />

				<table
					className={classNames(
						'table',
						'table-striped',
						tagSearchStore.loading && 'loading',
					)}
				>
					<thead>
						<tr>
							<th colSpan={2}>
								<SafeAnchor
									onClick={(): void =>
										runInAction(() => {
											tagSearchStore.sort = TagSortRule.Name;
										})
									}
								>
									{t('ViewRes:Shared.Name')}
									{tagSearchStore.sort === TagSortRule.Name && (
										<>
											{' '}
											<span className="sortDirection_down" />
										</>
									)}
								</SafeAnchor>
							</th>
							<th>{t('ViewRes.Search:Index.Category')}</th>
							<th>
								<SafeAnchor
									onClick={(): void =>
										runInAction(() => {
											tagSearchStore.sort = TagSortRule.UsageCount;
										})
									}
								>
									{t('ViewRes.Search:Index.TagUsages')}
									{tagSearchStore.sort === TagSortRule.UsageCount && (
										<>
											{' '}
											<span className="sortDirection_down" />
										</>
									)}
								</SafeAnchor>
							</th>
						</tr>
					</thead>
					<tbody>
						{tagSearchStore.page.map((tag) => (
							<tr key={tag.id}>
								<td style={{ width: '80px' }}>
									{tag.mainPicture && tag.mainPicture.urlSmallThumb && (
										<a
											href={EntryUrlMapper.details_tag(tag.id, tag.urlSlug)}
											title={tag.additionalNames}
										>
											<img
												src={tag.mainPicture.urlSmallThumb}
												title="Cover picture" /* TODO: localize */
												className="coverPicThumb img-rounded"
											/>
										</a>
									)}
								</td>
								<td>
									<a href={EntryUrlMapper.details_tag(tag.id, tag.urlSlug)}>
										{tag.name}
									</a>{' '}
									<DraftIcon
										status={EntryStatus[tag.status as keyof typeof EntryStatus]}
									/>
									<br />
									<small className="extraInfo">{tag.additionalNames}</small>
								</td>
								<td>
									<p>{tag.categoryName}</p>
								</td>
								<td>
									<p>{tag.usageCount}</p>
								</td>
							</tr>
						))}
					</tbody>
				</table>

				<ServerSidePaging pagingStore={tagSearchStore.paging} />
			</>
		);
	},
);

export default TagSearchList;
