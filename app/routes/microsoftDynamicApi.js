var request = require('request');
var fs = require('fs');

module.exports = function(app,router){

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token, authorization");
        next();
    });

    router.post('/getToken',function(req,res){
        request.post({
            url:'https://login.microsoftonline.com/33e3f733-2aed-463b-afae-77020171d2bc/oauth2/token', 
            form: {
                grant_type:'password',
                username:'balaji@redbinkieubs.onmicrosoft.com',
                password:'P@ssw0rd',
                resource:'https://redbinkieubs.api.crm5.dynamics.com',
                client_id:'49552752-1542-422f-b6b9-b28aae4551d8',
                client_secret:'Bkc4QYr+5klQkaa1Ro6gUreGQx/QeSv9/3fESkP+qGk='

            }
        }, 
        function(err,httpResponse,body){ 
            res.json(JSON.parse(body));
         });
        
    });
    router.post('/getAccounts/:token',function(req,res){
        request.get({
            url:'https://redbinkieubs.api.crm5.dynamics.com/api/data/v8.2/accounts', 
            headers: {
                Authorization:'Bearer '+req.params.token,
            }
        }, 
        function(err,httpResponse,body){ 
            res.json(JSON.parse(body));
            fs.writeFile('accounts.json', JSON.stringify(JSON.parse(body), null, 4));
         });

    });
    router.post('/getProducts/:token',function(req,res){
        request.get({
            url:'https://redbinkieubs.api.crm5.dynamics.com/api/data/v8.2/products', 
            headers: {
                Authorization:'Bearer '+req.params.token,
            }
        }, 
        function(err,httpResponse,body){ 
            res.json(JSON.parse(body));
            fs.writeFile('products.json', JSON.stringify(JSON.parse(body), null, 4));
         });

    });
    router.post('/getContracts/:token',function(req,res){
        request.get({
            url:'https://redbinkieubs.api.crm5.dynamics.com/api/data/v8.2/contracts', 
            headers: {
                Authorization:'Bearer '+req.params.token,
            }
        }, 
        function(err,httpResponse,body){ 
            res.json(JSON.parse(body));
            fs.writeFile('contracts.json', JSON.stringify(JSON.parse(body), null, 4));
         });
    });
    

    return router;
}