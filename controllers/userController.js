const user = require("../models/userModel");

function getUserController(req, res) {
  user
    .find()
    .then(function (data) {
      res.status(200).json({ success: true, document: data.length, data });
    })
    .catch((error) => {
      res.status(404).json({ success: false, mesage: error.mesage });
    });
}

async function insertUserController(req, res) {
  try {
    var _data = await user.create(req.body);
    console.log("Data inserted succefully");
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(404).json({ success: false, mesage: error.mesage });
  }
}

function updateUserController(req, res) {
  const _id = req.params.id;
  const _isRecorded = req.body.isRecorded;
  user
    .findByIdAndUpdate(_id, { isRecorded: _isRecorded })
    .then((data) => {
      res.status(200).json({ sucess: true, data });
    })
    .catch((error) => {
      res.status(404).json({ success: false, mesage: error.mesage });
    });
}

const deleteUserByIdController = async function (req, res) {
  try {
    const _id = req.params.id;
    const data = await user.findByIdAndDelete(_id);
    res.status(200).json({ success: true, message: data.item + " deleted" });
  } catch (error) {
    res.status(404).json({ success: false, message: error.message });
  }
};
module.exports = {
  getUserController,
  insertUserController,
  updateUserController,
  deleteUserByIdController,
};
