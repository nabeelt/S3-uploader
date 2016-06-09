app.controller('fileUploadController', ['$scope', 'fileUpload',  function($scope, fileUpload){
  $scope.openModal = function(){
      $scope.isModalOpen = true;
    }
  $scope.uploadFile = function(){
    var file = $scope.myFile;
    console.log('file is ');
    console.dir(file);
  };
  $scope.clear = function(){
      $(".file-name").text('');
      $scope.myFile = null;
    }
}]);