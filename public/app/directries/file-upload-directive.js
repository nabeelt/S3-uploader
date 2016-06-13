app.directive('fileModel', ['$parse', function ($parse) {
  return {
     restrict: 'A',
     link: function(scope, element, attrs) {
        element.bind('change', function(){
           scope.$apply(function(){
              scope.uploaded = true;
              var template = '<p class="file-name"></p><img class="close-btn" src="assets/images/close.png" ng-click = "clear()">';
              $('.name-wrapper').children().remove();
              $('.name-wrapper').append(template);
              $(".file-name").text(element[0].files[0].name);
           });
        });
     }
  };
}]);
      