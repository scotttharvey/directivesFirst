angular.module('directivePractice').directive("lessonHider", function(){
  return {
    templateUrl: "../views/lessonHider.html",
    restrict: "EA",
    scope: {
      lesson: "=",
      dayAlert: '&'

    },
    controller: function($scope, lessonService){
      $scope.getSchedule = lessonService.getSchedule();
    },
    link: function(scope, element, attrs){
        scope.getSchedule.then(function(response){
          scope.schedule = response.data;

          scope.schedule.forEach(function(obj) {
            if (obj.lesson === scope.lesson) {
              element.css('text-decoration', 'line-through');
              scope.lessonDay = obj.weekday;
              return;
            }
        })
      })
    }
  }
  })
