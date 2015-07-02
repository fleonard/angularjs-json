'use strict';

digiSignApp.controller('NewPlaylistController', function ($scope, DataProvider) {
    console.log('NewPlaylistController');
    $scope.playlists = DataProvider.getAllPlaylist();

    $scope.newPlaylistId = $scope.playlists.length +1;

    var newPlaylist = {
		id:$scope.newPlaylistId,
		name: '',
		regions : []
	}

	$scope.create = function(){
		if(angular.element('input').val() != ''){
			newPlaylist.name = angular.element('#name').val();
			$scope.playlists.push(newPlaylist);
		}else{
			alert('EMPTY FIELD');
		}

	}
  });
