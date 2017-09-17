var express      = require('express');
var app = express();
var bodyParser   = require("body-parser");
var passport = require('passport');
var morgan       = require('morgan');
var mongoose     = require('mongoose');
var path = require('path');




var appRoutes    = require('./app/routes/api')(app,express.Router(),passport);
var microsoftDynamicApiRoutes  = require('./app/routes/microsoftDynamicApi')(app,express.Router());
var social = require('./app/passport/passport')(app,passport);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/api', appRoutes);
app.use('/api', microsoftDynamicApiRoutes);


mongoose.connect('mongodb://localhost:27017/yes',function(err){
    if (err){
        console.log('Not connected to db '+err);
    }else{
        console.log('Successfully connected to MongoDb');
    }
});

app.get('*',function(req,res){
    res.sendFile(path.join(__dirname + '/public/app/views/Index.html'));
});

app.listen(3004,function(){
    console.log('Running Server on port 3004');
});