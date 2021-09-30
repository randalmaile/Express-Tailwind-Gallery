var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("practice", { layout: "./layouts/full-width" });
});

module.exports = router;
