'use strict';

digiSignApp.factory('DataProvider', function () {

	var clientData = [
		{
			id:1, 
			name:"Client A", 
			width:1920,
			height:4320,
			screenResolution: {
				width: 1920,
				height: 1080
			},
			playlistId:1
		},
		{
			id:2, 
			name:"Client B", 
			width:1920,
			height:3240,
			screenResolution: {
				width: 1920,
				height: 1080
			},
			playlistId:2
		},
		{
			id:3, 
			name:"Client C", 
			width:1920,
			height:4320,
			screenResolution: {
				width: 1920,
				height: 1080
			},
			playlistId:3
		}

	]

	var playlists = [
		{
			id:1,
			name:"test 1",
			regions : [{
				x : 0,
				y : 0,
				z : 1,
				w : 1920,
				h : 4320,
				t : 'image',
				source : '/media/images/BigScreenDaniel.jpg'
			},
			{
				x : 0,
				y : 1080,
				z : 2,
				w : 1920,
				h : 1080,
				t : 'video',
				source : '/media/video/toystory.mp4',
				muted : false
			}]
		},
		{
			id:2,
			name:"test 2",
			regions : [{
				x : 0,
				y : 0,
				z : 1,
				w : 1920,
				h : 1080,
				t : 'image',
				source : '/media/images/bbctest.png'
			},
			{
				x : 0,
				y : 1080,
				z : 2,
				w : 1920,
				h : 1080,
				t : 'video',
				source : '/media/video/ADCB_External_07.mp4',
				muted : false
			},
			{
				x : 0,
				y : 2160,
				z : 2,
				w : 1920,
				h : 2160,
				t : 'image',
				source : '/media/images/bbctest.png'
			}]
		},
		{
			id:3,
			name:"test 3",
			regions : [{
				x : 0,
				y : 0,
				z : 1,
				w : 1920,
				h : 4320,
				t : 'image',
				source : '/media/images/BigScreenDaniel.jpg'
			},
			{
				x : 0,
				y : 1080,
				z : 2,
				w : 1920,
				h : 1080,
				t : 'video',
				source : '/media/video/ADCB_External_07.mp4',
				muted : false
			}]
		}
	]

	return {
		getAllClients : function() {
			return clientData;
		},

		getClientById : function(clientId) {
			var rtn = null;
			for(var i = 0; i <clientData.length;i++) {
				if (clientData[i].id == clientId) {
					rtn = clientData[i];
					break;
				}
			}
			return rtn;
		},

		getAllPlaylist : function() {
			return playlists;
		},

		getPlaylistById : function(playlist) {
			var rtn = null;
			for(var i = 0; i <playlists.length;i++) {
				if (playlists[i].id == playlist) {
					rtn = playlists[i];
					break;
				}
			}
			return rtn;
		}
	}
  });
