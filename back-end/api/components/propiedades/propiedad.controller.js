//Requerimos el modelo  de usuarios
var Propiedad= require('./propiedad.model.js');
var config = require('../../config/database');


module.exports.ownedBy = function(req,res){ //exporta el controlador
  

        var newCoins = new Coins({
          coins:req.body.coins
        });

        newCoins.ownedBy(function(err){
          if(err){
            res.json({success:false,msg:'El total de monedas son' + newCoins.coins});
          }
        });

      };
    

module.exports.findAll = function(req,res){
  Propiedad.find().then(function(propiedades){
    res.send(propiedades);
  });
};


module.exports.update = function(req,res){
  console.log(req.body.id);
  Propiedad.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Se ha actualizado correctamente.'});
  });

}