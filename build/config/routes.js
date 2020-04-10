"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _cors = _interopRequireDefault(require("cors"));

var _onCovid = _interopRequireDefault(require("../routes/on-covid19"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = app => {
  // middlewares
  app.use((0, _cors.default)());
  app.use((0, _express.json)());
  app.use((0, _express.urlencoded)({
    extended: true
  }));
  app.use('/api/v1/on-covid-19', _onCovid.default);
};

exports.default = _default;