"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _estimate = _interopRequireDefault(require("./estimate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = data => {
  const currentlyInfected = data.reportedCases * 10;
  return {
    currentlyInfected,
    ...(0, _estimate.default)(data, currentlyInfected)
  };
};

exports.default = _default;
//# sourceMappingURL=impact.js.map