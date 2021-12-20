var express = require("express");
var router = express.Router();
var inventory = require("../model/inventory_model");
router.get('/', function(req, res, next) {
    inventory.getAllInventory(function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.post('/', function(req, res, next) {
    inventory.addInventory(req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.put('/:inventory_id', function(req, res, next) {
    inventory.updateInventory(req.params.inventory_id,req.body, function(err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });
  router.delete('/:inventory_id', function(req, res, next) {
    inventory.deleteInventory(req.params.inventory_id, function(err, rows) {
     if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  
  module.exports = router;