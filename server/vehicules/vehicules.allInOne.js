var express = require('express');
var router = express.Router();
var db = require("../../db/connection")
var vehicules = db.get("vehicules")

router.get('/', function(req, res, next) {
  vehicules.find({}).then((everyVehicules) => {
    res.json(everyVehicules)
  })
});

router.get('/:id', function(req, res, next) {
  vehicules.findOne({_id: req.params.id}).then((vehicule) => {
    res.json(vehicule)
  })
});

router.post('/', function(req, res, next) {
  vehicules.insert(req.body).then((vehicule) => {
    res.json(vehicule)
  })
});

router.put('/:id', function(req, res, next) {
  vehicules.findOneAndUpdate({_id: req.params.id}, { $set: req.body }).then((vehicule) => {
    res.json(vehicule)
  })
});

module.exports = router;