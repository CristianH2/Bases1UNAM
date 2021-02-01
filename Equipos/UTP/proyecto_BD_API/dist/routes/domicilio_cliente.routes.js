"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _database = _interopRequireDefault(require("../database"));

var _domicilio_cliente = require("../models/domicilio_cliente");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = (0, _express.Router)();
router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _database["default"].query('SELECT * FROM DOMICILIO_CLIENTE;');

          case 2:
            response = _context.sent;
            res.json(response.rows);

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
router.post('/', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var domicilio_cliente, response;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            domicilio_cliente = new _domicilio_cliente.Domicilio_Cliente(null, req.body.id_cliente, req.body.id_domicilio);
            _context2.next = 3;
            return _database["default"].query('INSERT INTO DOMICILIO_CLIENTE(id_cliente, id_domicilio) VALUES ($1, $2);', [domicilio_cliente.id_cliente, domicilio_cliente.id_domicilio]);

          case 3:
            response = _context2.sent;
            response.body = domicilio_cliente.toJson();
            res.json(response);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
router.patch('/', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var domicilio_cliente, response;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            domicilio_cliente = new _domicilio_cliente.Domicilio_Cliente(null, req.body.id_cliente, req.body.id_domicilio);
            _context3.next = 3;
            return _database["default"].query('SELECT id_domicilio_Cliente FROM DOMICILIO_CLIENTE WHERE id_cliente = $1 AND id_domicilio = $2;', [domicilio_cliente.id_cliente, domicilio_cliente.id_domicilio]);

          case 3:
            response = _context3.sent;
            res.json(response.rows);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;