'use strict';

digiSignApp.controller('PlaylistController', function ($scope, DataProvider) {
    console.log('PlaylistController');
    $scope.playlists = DataProvider.getAllPlaylist();
  });
