angular.module("MafiaApp", ['ngMaterial','ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : 'View/loginView.htm',
            controller : 'loginController'
        })
        .when("/lobby", {
            templateUrl : 'View/lobbyView.htm',
            //controller : 'Controller/lobbyController.js'
        })
})
    .controller('loginController', function($scope, $http, $mdToast, $location) {
        $scope.callBackend = function () {
            console.log($scope.username);
            $http.get('http://localhost:3001/login?name=' + $scope.username).then(function (response) {
                $scope.showStatus = response.data;
                $mdToast.show(
                    $mdToast.simple()
                        .textContent($scope.showStatus.message)
                        .hideDelay(3000)
                )
                if (response.data.success == true) {
                    console.log()
                    $location.path('/lobby');
                }
            })
        }
    })