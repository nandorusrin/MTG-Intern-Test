module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", users.create);

  // Retrieve all Tutorials
  router.get("/", users.findAll);

  // Retrieve a single Tutorial with id
  router.get("/:id", users.findOne);

  // Put a Tutorial with id
  router.put("/:id", users.updateAll);

  // Patch a Tutorial with id
  router.patch("/:id", users.update);

  // Softdelete a Tutorial with id
  router.delete("/:id", users.delete);

  app.use('/api/v1/users', router);
};