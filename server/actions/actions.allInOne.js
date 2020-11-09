var express = require('express');
var router = express.Router();
var db = require("../../db/connection")
var actions = db.get("actions")

router.get('/', function(req, res, next) {
  actions.find({}).then((everyActions) => {
    res.json(everyActions)
  })
});

router.get('/:id', function(req, res, next) {
  actions.findOne({_id: req.params.id}).then((action) => {
    res.json(action)
  })
});

router.post('/', function(req, res, next) {
  actions.insert(req.body).then((action) => {
    res.json(action)
  })
});

router.put('/:id', function(req, res, next) {
  actions.findOneAndUpdate({_id: req.params.id}, { $set: req.body }).then((action) => {
    res.json(action)
  })
});

module.exports = router;