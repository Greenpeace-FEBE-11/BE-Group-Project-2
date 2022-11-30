const { verifySignUp, authJwt } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/signin", controller.signin);

  app.post("/signout", controller.signout);


  app.get("/signup", controller.getDataUser)

  app.get("/admin", controller.getDataUser)
  app.get("/admin/:id", authJwt.verifyToken, authJwt.isAdmin, controller.getDataUserById)
  app.delete("/admin/:id", authJwt.verifyToken, authJwt.isAdmin, controller.deletUserById)
  app.put("/admin/:id", authJwt.verifyToken, authJwt.isAdmin, controller.updateUserById)

};
