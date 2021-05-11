import AlbumRepository from '../Repositories/AlbumRepository';
import HttpClient from '../Shared/HttpClient';
import AlbumMergeViewModel from '../ViewModels/Album/AlbumMergeViewModel';

const AlbumMerge = (model: { id: number }): void => {
  $(function () {
    const httpClient = new HttpClient();
    var repo = new AlbumRepository(
      httpClient,
      vdb.values.baseAddress,
      vdb.values.languagePreference,
    );
    var vm = new AlbumMergeViewModel(repo, model.id);
    ko.applyBindings(vm);

    $('#mergeBtn').click(function () {
      return window.confirm('Are you sure you want to merge the albums?');
    });
  });
};

export default AlbumMerge;