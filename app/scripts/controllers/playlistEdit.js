'use strict';

digiSignApp.controller('PlaylistEditController', function ($scope, $stateParams, DataProvider) {
    console.log('PlaylistEditController', $stateParams.playlistId);

    $scope.playlist = DataProvider.getPlaylistById($stateParams.playlistId);

    $scope.regions = $scope.playlist.regions;

    $scope.update = function(i, el){

    	$scope.regions[i].w = el.w;
    	$scope.regions[i].h = el.h;
    	$scope.regions[i].x = el.x;
    	$scope.regions[i].y = el.y;
    	$scope.regions[i].z = el.z;
    	$scope.regions[i].t = el.t;
    	$scope.regions[i].src = el.src;

    	alert('Region ' + i + ' updated!');
    }

    $scope.delete = function(i){
    	$scope.regions.splice(i,1);
    }

    $scope.add = function(){
    	var obj = {
			x : '',
			y : '',
			z : '',
			w : '',
			h : '',
			t : '',
			source : ''
		}
		$scope.regions.push(obj);
    }

  });
