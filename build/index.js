"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();

require('./config/routes').default(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));