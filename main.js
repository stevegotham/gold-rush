angular.module("gold", []);
angular.module('gold').controller('eureka', ["$scope", findGold]);
function findGold($scope) {
    $scope.pins =[];
    $scope.drop = function() {
        $scope.x=event.clientX;
        $scope.y=event.clientY;
        $scope.pins.push({'x': $scope.x, 'y': $scope.y});
        
    }
    $scope.removePin = function() {
        event.target.remove();
    }
}
