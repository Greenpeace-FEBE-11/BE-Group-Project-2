const express = require('express');
const { authJwt } = require("../middlewares");


const controller = require("../controllers/dampakController")





module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.get("/userpage", [authJwt.verifyToken], controller.getInformasi)
    app.post("/userpage", [authJwt.verifyToken], controller.addInformasi)

    app.post('/', [authJwt.verifyToken, authJwt.isAdmin], controller.createDampak)

    app.put('/:id', [authJwt.verifyToken, authJwt.isAdmin], controller.updateDampak)
    app.delete('/:id'[authJwt.verifyToken,authJwt.isAdmin], controller.deleteDampak)
    app.get('/:id', [authJwt.verifyToken], controller.getSingleDampak)
    app.get('/', [authJwt.verifyToken], controller.getAllDampaks)
  
    
  };