const express = require('express');
const path = require("path")

const router = express.Router();
const db = require("../../db/connection")
const { v4: uuidv4 } = require("uuid") 
var vehicules = db.get("vehicules")

router.post('/vehicule', function(req, res, next) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const uuid = uuidv4()
  req.files.file.mv(path.join(__dirname,"../../public/upload/", uuid + req.files.file.name), function(err) {
    if (err)
      return res.status(500).send(err);

    res.json({
      imgUrl: "http://localhost:4000/upload/" + uuid + req.files.file.name 
    });
  })
});

module.exports = router;