app.factory('authService',function($http,$window){
    
        var authFactory={};
        authFactory.login = function(loginData){
            return $http.post('/api/authenticate',
                              'grant_type=password&username=' + loginData.username + "&password=" + loginData.password,
                    {"headers":{ "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8" }})
                    .then(function(data){
                        return data;
                    });
        };
        authFactory.decodeToken = function(token){

            return $http.post('/api/decode_token',{ token : token });
        };
        authFactory.getYesIdBySocialId = function(socialType,id){
            return $http.post('/api/getYesIdBySocialId',{ socialType : socialType , id : id });
        };
        authFactory.logout = function(token){
            return $http.post('/api/logout',{token:token});
        };
        return authFactory;
    
});