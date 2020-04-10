"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _estimator = _interopRequireDefault(require("../estimator"));

var _xml = _interopRequireDefault(require("../config/xml"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.post('(/|/json)', (req, res) => {
  const result = (0, _estimator.default)(req.body);
  res.json(result);
});
router.post('/xml', (req, res) => {
  const result = (0, _estimator.default)(req.body);
  res.set('content-Type', 'text/xml').type('application/xml').send(_xml.default.buildObject(result));
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=on-covid19.js.map