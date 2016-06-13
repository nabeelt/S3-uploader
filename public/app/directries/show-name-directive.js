app.directive('showName', function () {
	return{
		retrict : 'A',
		template : '<p class="file-name"></p><img class="close-btn" src="assets/images/close.png" ng-click = "clear()">',
		controller : 'fileUploadController'
	}
});