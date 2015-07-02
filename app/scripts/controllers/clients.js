'use strict';

digiSignApp.controller('ClientsController', function ($scope, DataProvider) {
    console.log('ClientsController');
    $scope.clients = DataProvider.getAllClients();
  });
