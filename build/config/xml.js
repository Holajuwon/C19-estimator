"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _xml2js = _interopRequireDefault(require("xml2js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const builder = new _xml2js.default.Builder({
  renderOpts: {
    pretty: true
  }
});
var _default = builder;
exports.default = _default;