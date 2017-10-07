app.controller('socialController',function($scope,authService,userService,$routeParams,$location,$window){
    //if ($location.hash() == '_=_') $location.hash(null);
    //$window.location = $window.location.href.replace('#','');
   //console.log( $routeParams.token);
    
    var init = function(){

        $scope.info = null;
        $scope.yesIdValidation = false;
        $scope.socialMediaValidationError = null;
        $scope.regData = {};
        authService.decodeToken($routeParams.token).then(function(data){
            //console.log(data.data.info);
            if (data.data.success == true){
                if (data.data.info.provider == 'custom'){
                    $scope.info = data.data.info;
                    $scope.yesIdValidation = true;
                }else{
                    authService.getYesIdBySocialId(data.data.info.provider,data.data.info.username).then(function(result){
                        if (result.data.success == true){
                            $scope.info = data.data.info;
                            $scope.info.username = result.data.yesId;
                            $scope.yesIdValidation = true;
                        }else{
                            $scope.yesIdValidation = false;
                            $scope.socialMediaValidationError = result.data.message;
                            if (data.data.info.provider == 'google'){
                                $scope.regData.googleId = data.data.info.username;

                            }else if (data.data.info.provider == 'facebook'){
                                $scope.regData.facebookId = data.data.info.username;

                            }else {
                                $scope.regData.twitterId = data.data.info.username;
                            }
                            $scope.regData.email = data.data.info.email;
                            userService.generateYesId().then(function(response){
                                $scope.regData.username = response.data.number
                            });
                        }
                    });
                }
            }
        });
    }
    init();



    $scope.logout = function(){
        $location.path('/login');
        // if ($scope.info.provider=="google"){
        //     $window.location = "https://accounts.google.com/Logout";
        // }else if ($scope.info.provider=="twitter"){
        //     $window.location = "https://twitter.com/logout";
        // }else if ($scope.info.provider=="facebook"){
        //     authService.logout($routeParams.token).then(function(data){
        //         alert(data);
        //     });
        // }else{
        //     $location.path('/login');
        // }
    }
    $scope.regUser = function(){
        userService.createUser($scope.regData).then(function(data){
            alert(data.data.message);
            if (data.data.success == true){
                $window.location.reload();
            }
        });
    }
    

});