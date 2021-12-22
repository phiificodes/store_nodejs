const mongoose = require("mongoose");

const storeSchema = mongoose.Schema(
  {
    item: { type: String, required: "Title is required" },
    description: String,
    receivedDate: Date,
    isRecorded: Boolean,
  },
  { timeStamp: true }
);

const store = mongoose.model("store", storeSchema);

module.exports = store;
