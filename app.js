var createError = require("http-errors");
var express = require("express");
const expressLayouts = require("express-ejs-layouts");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var livereload = require("livereload");
var connectLiveReload = require("connect-livereload");

var indexRouter = require("./routes/index");
var buttonsRouter = require("./routes/buttons");
var cardsRouter = require("./routes/cards");
var practiceRouter = require("./routes/practice");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

var app = express();

app.use(connectLiveReload());

// view engine setup
// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/full-width");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("layout extractScripts", true);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Map routes
app.use("/", indexRouter);
app.use("/buttons", buttonsRouter);
app.use("/cards", cardsRouter);
app.use("/practice", practiceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
