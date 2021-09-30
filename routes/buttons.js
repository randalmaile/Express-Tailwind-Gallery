var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("buttons", { title: "Buttons", layout: "./layouts/full-width" });
});

module.exports = router;
