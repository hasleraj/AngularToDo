(function () {
    "use strict";
    /*global angular*/
    angular.module('ToDoList', [])
        .controller('ToDoController', function ($scope) {
            //array of tasks
            $scope.tasks = [];
            //add a task
            $scope.addTask = function () {
                $scope.tasks.push($scope.task);
                $scope.task = "";
            };
            //delete a task
            $scope.deleteTask = function (item) {
                var itemIndex = $scope.tasks.indexOf(item);
                $scope.tasks.splice(itemIndex, 1);
            };
            //reset function
            $scope.resetTaskList = function () {
                $scope.tasks = [];
            };
        });
}());

