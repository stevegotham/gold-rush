angular.module("gold", []);
angular.module('gold').controller('eureka', ["$scope", findGold]);
function findGold($scope) {
    $scope.pins =[];
    $scope.drop = function() {
        $scope.x=event.pageX / document.body.clientWidth * 100;
        $scope.y=event.pageY / document.body.clientHeight * 100;
        $scope.pins.push({'x': $scope.x, 'y': $scope.y});
        
    }
    $scope.removePin = function() {
        event.target.remove();
    }
}
