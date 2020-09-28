"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

require("dotenv/config");

_mongoose["default"].connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true
}).then(function (db) {
  return console.log('db is connected');
})["catch"](function (err) {
  return console.error(err);
});

var _default = _mongoose["default"];
exports["default"] = _default;