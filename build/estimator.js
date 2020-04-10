"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _impact = _interopRequireDefault(require("./estimates/impact"));

var _severeImpact = _interopRequireDefault(require("./estimates/severeImpact"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const covid19ImpactEstimator = data => ({
  data,
  impact: (0, _impact.default)(data),
  severeImpact: (0, _severeImpact.default)(data)
});

var _default = covid19ImpactEstimator;
exports.default = _default;