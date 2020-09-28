"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = require("express");

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _Image = _interopRequireDefault(require("../model/Image"));

var router = (0, _express.Router)();
router.get('/images', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var images;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Image["default"].find();

          case 2:
            images = _context.sent;
            res.status(200).json(images);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/contact/mail', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, name, lastname, email, comment, phone, contentHTML, transporter;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, name = _req$body.name, lastname = _req$body.lastname, email = _req$body.email, comment = _req$body.comment, phone = _req$body.phone;
            contentHTML = "\n        <h3>".concat(name, "s").concat(lastname, "</h3>\n        <p>").concat(comment, "</p>\n        <p>Mi numero es: ").concat(phone, "</p>\n        ");
            transporter = _nodemailer["default"].createTransport({
              host: 'smtp.gmail.com',
              port: 465,
              secure: false,
              auth: {
                user: process.env.USERNAME,
                pass: process.env.PASSWORD
              }
            });
            _context2.next = 6;
            return transporter.sendMail({
              from: "".concat(lastname, ",s").concat(name, "<").concat(email, ">"),
              to: 'info@kuscococina.com',
              cc: 'Consulta de Catering',
              html: contentHTML
            });

          case 6:
            res.redirect('/contact');
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            console.error(_context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;