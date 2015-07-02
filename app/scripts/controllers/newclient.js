'use strict';

digiSignApp.controller('NewClientController', function ($scope, DataProvider) {
    console.log('NewClientController');

    $scope.clients = DataProvider.getAllClients();
    $scope.playlists = DataProvider.getAllPlaylist();

    $scope.newClientId = $scope.clients.length +1;

    var newClient = {
			id:$scope.newClientId, 
			name:'', 
			width:'',
			height:'',
			screenResolution: {
				width: '',
				height: ''
			},
			playlistId:''
		}

	$scope.create = function(){
		if(angular.element('input').val() != null){

			newClient.name = angular.element('#name').val();
			newClient.width = angular.element('#w').val();
			newClient.height = angular.element('#h').val();
			newClient.screenResolution.width = angular.element('#sw').val();
			newClient.screenResolution.height = angular.element('#sh').val();
			newClient.playlistId = (angular.element('#playlist')[0].selectedIndex) + 1;
			
			console.log(newClient.screenResolution.width, newClient.playlistId);

			$scope.clients.push(newClient);
		}else{
			alert('EMPTY FIELD');
		}
	}
  });
