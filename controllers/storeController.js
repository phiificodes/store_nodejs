const store = require("../models/storeModel");

function getStoreController(req, res) {
  store
    .find()
    .then(function (data) {
      res.status(200).json({ success: true, document: data.length, data });
    })
    .catch((error) => {
      res.status(404).json({ success: false, mesage: error.mesage });
    });
}

async function insertStoreController(req, res) {
  try {
    var _data = await store.create(req.body);
    console.log("Data inserted succefully");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ success: false, mesage: error.mesage });
  }
}

function updateStoreController(req, res) {
  const _id = req.params.id;
  const _isRecorded = req.body.isRecorded;
  store
    .findByIdAndUpdate(_id, { isRecorded: _isRecorded })
    .then((data) => {
      res.status(200).json({ sucess: true, data });
    })
    .catch((error) => {
      res.status(404).json({ success: false, mesage: error.mesage });
    });
}

const deleteStoreById = async function (req, res) {
  try {
    const _id = req.params.id;
    const data = await store.findByIdAndDelete(_id);
    res.status(200).json({ success: true, message: data.item + " deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
module.exports = {
  getStoreController,
  insertStoreController,
  updateStoreController,
  deleteStoreById,
};
