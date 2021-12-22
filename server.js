const express = require("express");
const mongoose = require("mongoose");
const storeControllers = require("./controllers/storeController");

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
      e;
      console.log("message " + error.message);
    });

  server.get("/store", storeControllers.getStoreController);
  server.post("/store", storeControllers.insertStoreController);
  server.delete("/store/:id", storeControllers.deleteStoreById);
  server.put("/store/:id", storeControllers.updateStoreController);
});
