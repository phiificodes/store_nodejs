const express = require("express");
const mongoose = require("mongoose");
const userControllers = require("./controllers/userController");

const server = express();

const store_DB = "mongodb://localhost/store_db";

server.use(express.json());

server.listen(4000, function () {
  console.log("server started, running...");
  mongoose
    .connect(store_DB)
    .then(function () {
      console.log("DB is connected...");
    })
    .catch((error) => {
      error;
      console.log("message " + error.message);
    });
});
server.get("/user", userControllers.getUserController);
server.post("/user", userControllers.insertUserController);
server.delete("/user/:id", userControllers.deleteUserByIdController);
server.put("/user/:id", userControllers.updateUserController);
