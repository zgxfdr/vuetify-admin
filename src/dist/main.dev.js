"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("@/store"));

var _vuetify = _interopRequireDefault(require("./plugins/vuetify"));

require("./permission");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].config.productionTip = false; // 加载路由判断

console.log(_store["default"].state.count);
new _vue["default"]({
  vuetify: _vuetify["default"],
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');