import ContentLanguagePreference from '@Models/Globalization/ContentLanguagePreference';
import RepositoryFactory from '@Repositories/RepositoryFactory';
import functions from '@Shared/GlobalFunctions';
import HttpClient from '@Shared/HttpClient';
import UrlMapper from '@Shared/UrlMapper';
import PVPlayersFactory from '@ViewModels/PVs/PVPlayersFactory';
import SearchViewModel from '@ViewModels/Search/SearchViewModel';
import $ from 'jquery';
import moment from 'moment';

const SearchIndex = (model: {
  artistId: number[];
  artistType: string;
  autoplay: boolean;
  childTags: boolean;
  childVoicebanks: boolean;
  discType: string;
  eventCategory: string;
  eventId: number;
  filter: string;
  minScore: number;
  onlyRatedSongs: boolean;
  onlyWithPVs: boolean;
  pageSize: number;
  searchTypeName: string;
  shuffle: boolean;
  since: number;
  songType: string;
  sort: string;
  tagId: number[];
  viewMode: string;
}): void => {
  $(function () {
    moment.locale(vdb.values.culture);
    var cultureCode = vdb.values.uiCulture;
    var languageSelection =
      ContentLanguagePreference[vdb.values.languagePreference];
    var query = model.filter;
    var tagIds = model.tagId;
    var searchType = model.searchTypeName;
    var sort = model.sort;
    var artistId = model.artistId;
    var childTags = model.childTags;
    var childVoicebanks = model.childVoicebanks;
    var eventId = model.eventId;
    var artistType = model.artistType;
    var discType = model.discType;
    var songType = model.songType;
    var eventCategory = model.eventCategory;
    var onlyWithPVs = model.onlyWithPVs;
    var onlyRatedSongs = model.onlyRatedSongs;
    var since = model.since;
    var minScore = model.minScore;
    var viewMode = model.viewMode;
    var autoplay = model.autoplay;
    var shuffle = model.shuffle;
    var pageSize = model.pageSize;
    var loggedUserId = vdb.values.loggedUserId;
    var unknownPictureUrl = functions.mapAbsoluteUrl('/Content/unknown.png');

    const httpClient = new HttpClient();
    var rootPath = vdb.values.baseAddress;
    var urlMapper = new UrlMapper(rootPath);
    var repoFactory = new RepositoryFactory(
      httpClient,
      urlMapper,
      vdb.values.languagePreference,
      loggedUserId,
    );
    var resourceRepo = repoFactory.resourceRepository();
    var entryRepo = repoFactory.entryRepository();
    var artistRepo = repoFactory.artistRepository();
    var albumRepo = repoFactory.albumRepository();
    var songRepo = repoFactory.songRepository();
    var eventRepo = repoFactory.eventRepository();
    var tagRepo = repoFactory.tagRepository();
    var userRepo = repoFactory.userRepository();
    var pvPlayerElem = $('#pv-player-wrapper')[0];
    var pvPlayersFactory = new PVPlayersFactory(pvPlayerElem);

    var vm = new SearchViewModel(
      urlMapper,
      entryRepo,
      artistRepo,
      albumRepo,
      songRepo,
      eventRepo,
      tagRepo,
      resourceRepo,
      userRepo,
      unknownPictureUrl,
      languageSelection,
      loggedUserId,
      cultureCode,
      searchType,
      query,
      tagIds,
      sort,
      artistId,
      childTags,
      childVoicebanks,
      eventId,
      artistType,
      discType,
      songType,
      eventCategory,
      onlyWithPVs,
      onlyRatedSongs,
      since,
      minScore,
      viewMode,
      autoplay,
      shuffle,
      pageSize,
      pvPlayersFactory,
    );
    ko.applyBindings(vm);
  });
};

export default SearchIndex;