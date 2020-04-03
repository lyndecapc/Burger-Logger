var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hndbrsObj = {
      burgers:data
    };
    console.log(hndbrsObj);
    res.render("index" , hndbrsObj);
  })
});

// post route -> back to index

router.post("/api/burgers", function(req, res) {
  burger.insertOne(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.json({ id:result.insertId });
    }
  );
});



// put route -> back to index


//delete route


module.exports = router;
