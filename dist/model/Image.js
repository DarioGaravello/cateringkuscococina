"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var imageSchema = new _mongoose.Schema({
  imageURL: {
    type: String
  },
  public_id: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Image', imageSchema);

exports["default"] = _default;