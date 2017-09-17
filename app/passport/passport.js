//Social Media
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var session = require('express-session');


var ExtractJwt = require('passport-jwt').ExtractJwt;
var JwtStrategy = require('passport-jwt').Strategy;
var user =require('../models/user');
// var client = require('../models/client');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';

module.exports = function(app,passport) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: true, cookie: { secure: false } }));

    passport.serializeUser(function(user, done) {
        //token is global variable to have access on /auth/facebook/callback below
        console.log('----------serialize----------',user);
        if (user.provider == 'google' || user.provider == 'facebook' ){
            token = jwt.sign({
                username : user.emails[0].value ,
                name : user. displayName,
                email : user.emails[0].value ,
                provider : user.provider}, secret , { expiresIn: '24h' });
        }else{
            token = jwt.sign({
                username :  user.username , 
                name : user.displayName,
                email : user.emails[0].value ,
                provider : user.provider}, secret , { expiresIn: '24h' });
        }
        done(null, user.id);
       
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            console.log('----------deserialize----------',user)
            done(err, user);
        });
    });
    
    //========== Facebook Authentication ==========
    passport.use(new FacebookStrategy({
        clientID: '114366999269766',
        clientSecret: '0d9f91c68549326236032d95ccd51371',
        callbackURL: "http://localhost:3004/auth/facebook/callback",
        profileFields: ['id', 'displayName', 'photos', 'email'],
        //passReqToCallback: true,
      },
      function(accessToken, refreshToken, profile, done) {
            console.log('----------facebookStrategy----------');
            done(null,profile);
      }
    ));
    app.get("/auth/facebook", function(req, res, next) {
        passport.authenticate("facebook", { scope : ["email"] })(req, res, next);
      });
    app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }),function(req,res){
        res.redirect('/social/facebook/' + token );
    });

    //========== Twitter Authentication ==========
    passport.use(new TwitterStrategy({
        consumerKey: 'iOZ3VADji7m5bVH8Q236ePAoE',
        consumerSecret: 'AeG5lOKGohS7ywHoihGpECyxpisH1FCBY4MSDPKodDqHJyo0bP',
        callbackURL: "http://localhost:3004/auth/twitter/callback",
        userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
        passReqToCallback: true,
      },
      function(req,token, tokenSecret, profile, done) {

        console.log('----------TwitterStrategy----------');
        //   if (err) { return done(err); }
        //   done(null, user);
        // });
        done(null,profile);
      }
    ));    
    app.get("/auth/twitter", function(req, res, next) {
        passport.authenticate("twitter", { scope : ["email"]})(req, res, next);
    });
    app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }),function(req,res){
        res.redirect('/social/twitter/' + token );
    });


    //========== Google Authentication ==========
    passport.use(new GoogleStrategy({
        clientID: '233222615290-7k027r4dpq086uv99eejig3tffi3ickt.apps.googleusercontent.com',
        clientSecret: 'ueDyMTJ6KdJOWvzGH8PoBbBI',
        callbackURL: "http://localhost:3004/auth/google/callback",
        passReqToCallback: true,
      },
      function(req,accessToken, refreshToken, profile, done) {
            console.log('----------GoogleStrategy----------');
            //    User.findOrCreate({ googleId: profile.id }, function (err, user) {
            //      return done(err, user);
            //    });
            done(null,profile);
      }
    ));
    app.get("/auth/google", function(req, res, next) {
        passport.authenticate("google", { scope : ['profile', 'email'] })(req, res, next);
    });
    app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),function(req, res) {
        res.redirect('/social/google/' + token );
    });


    //========== JWT Autyhyentication ==========
    passport.use(new JwtStrategy({ jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: secret},
     function(jwt_payload, done) {
             console.log('----------JwtStrategy----------',jwt_payload);

             done(null, {username : jwt_payload.username , email: jwt_payload.email , provider : jwt_payload.provider});
    }));


    return passport;

}




