'use strict';

digiSignApp.controller('ClientEditController', function ($scope, $stateParams, DataProvider) {
    console.log('ClientEditController', $stateParams.clientId);

    $scope.client = DataProvider.getClientById($stateParams.clientId);

    $scope.playlists = DataProvider.getAllPlaylist();

    $scope.playlist = DataProvider.getPlaylistById($scope.client.playlistId);

    
    $scope.update = function(el){
    	$scope.client.playlistId = el.id;
    }

  });
