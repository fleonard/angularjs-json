'use strict';

var digiSignApp = angular.module('digiSignApp', ["ui.router"]);

digiSignApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");




    $stateProvider
    .state("root",{
      abstract : true,
      templateUrl : "views/main.html"
    })
    .state("root.home", {
      url : "/home",
      abstract : false,
      views : {
        "list" : {
          templateUrl : "views/client.html"
        },
        "playlist" : {
          templateUrl : "views/playlist.html"
        },
        'preview' : {
          templateUrl : "views/preview.html"
        }
      }
    })
    .state("root.home.client", {
        url : "/client/:clientId",
        abstract : false,
        views : {
          "edit@root.home" : {
            templateUrl : "views/clientedit.html"
          }
        }
      })
    .state("root.home.playlist", {
        url : "/playlist/:playlistId",
        abstract : false,
        views : {
          "edit@root.home" : {
            templateUrl : "views/playlistedit.html"
          }
        }
      })
    .state("root.home.newclient", {
        url : "/new-client/",
        abstract : false,
        views : {
          "edit@root.home" : {
            templateUrl : "views/newclient.html"
          }
        }
      })
    .state("root.home.newplaylist", {
        url : "/new-playlist/",
        abstract : false,
        views : {
          "edit@root.home" : {
            templateUrl : "views/newplaylist.html"
          }
        }
      })
    .state("root.home.saved", {
        url : "/saved/:clientId",
        abstract : false,
        views : {
          "edit@root.home" : {
            template : '<div ng-controller="ClientEditController"><h3>Saved {{client.name}}</h3></div>'
          }
        }
      })
  });
