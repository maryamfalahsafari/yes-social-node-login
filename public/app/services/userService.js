app.factory('userService',function($http){

    var userFactory={};
    userFactory.createUser = function(regData){
        return $http.post('/api/users',regData);
    }
    userFactory.generateYesId = function(){
        return $http.get('/api/createRandomNumber');
    }
    return userFactory;

});
