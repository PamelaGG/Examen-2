var express = require('express');
var	router = express.Router();
var propiedadController = require('./propiedad.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/propiedades')
  .post(function(req, res){
    userController.save(req,res);
 	});

router.route('/propiedades')
  .get(function(req, res){
      userController.findAll(req,res);
  });
router.route('/propiedades/:id')
  .delete(function(req, res){
    userController.remove(req,res);
 	});
router.route('/propiedades')
  .put(function(req, res){
    userController.update(req,res);
 	});




// Se exporta el modulo
module.exports = router;
