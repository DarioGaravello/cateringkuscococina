"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _cors = _interopRequireDefault(require("cors"));

var _app = _interopRequireDefault(require("./routes/app.routes"));

require("./database");

var app = (0, _express["default"])(); //Middleware

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])()); //Routes

app.use(_app["default"]); //Statics Files

app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../../dist')));
app.use('*', function (req, res) {
  res.sendFile(_path["default"].resolve(__dirname, '../../dist/index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
var _default = app;
exports["default"] = _default;