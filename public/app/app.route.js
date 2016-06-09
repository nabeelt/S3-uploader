app.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/upload');
  $stateProvider
    .state('uploadfile', {
        url: '/upload',
        templateUrl: 'app/views/upload.html',
        controller : 'fileUploadController'
    })
    .state('show', {
      url: '/show',
      templateUrl: 'app/views/show.html',
      controller :'fileUploadController'
  });
});