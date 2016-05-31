angular.module('directivePractice').directive("lessonHider", function(){
  return {
    templateUrl: "../views/lessonHider.html",
    restrict: "EA",
    scope: {
      lesson: "="
    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attrs){
        scope.getSchedule.then(function(response){
          scope.schedule = response.data;
        })

    }
  }
})
