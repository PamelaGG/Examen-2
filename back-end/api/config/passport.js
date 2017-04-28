var JwtStrategy = require('passport-jwt').Strategy;
var User = require('../models/user.model');
var Propiedad = require('../models/propiedad.model');
var config = require('../config/database');

module.exports = function(passport){
  var opts = {};
  opts.secretOrKey = 'ksk';
  passport.use(new JwtStrategy(opts,function(jwt_payload,done){
    
    User.find({id:jwt_payload.sub},function(err,user){
      if(err){
        return done(err,false);
      }
      if(user){
        done(null,user);
      }else{
        done(null,false);
      }
    });

      Propiedad.find({id:jwt_payload.sub},function(err,propiedad){
      if(err){
        return done(err,false);
      }
      if(propiedad){
        done(null,propiedad);
      }else{
        done(null,false);
      }
    });




  }));
};
