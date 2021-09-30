var express = require("express");
var router = express.Router();

/* GET about listing. */
router.get("/", function (req, res, next) {
  res.render("cards", { title: "cards", layout: "./layouts/full-width" });
});

module.exports = router;
