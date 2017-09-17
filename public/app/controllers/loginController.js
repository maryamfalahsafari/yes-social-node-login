app.controller('loginController',function($scope,authService,$routeParams,$window,$location){
    if ($location.hash() == '_=_') $location.hash(null);

    $scope.doLogin = function(){
        authService.login($scope.loginData).then(function(data){
            if (data.data.success==true){
                $location.path('/social/custom/' + data.data.token)
               // $window.location = $scope.client.callback  + '/customLogin/' + data.data.token;
            }else{
                alert('Invalid username or password');
            }
        });
    }
   
    $scope.socialLogin = function(socialType){
        $window.location = $window.location.protocol + '//' + $window.location.host + '/auth/' + socialType ;
       // + "?queryParams=" + $routeParams.clientId;
    }

});