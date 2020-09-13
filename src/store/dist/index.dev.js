"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _getters = _interopRequireDefault(require("./getters"));

var _action = _interopRequireDefault(require("./action"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    count: 0,
    token: ""
  },
  getters: _getters["default"],
  mutations: {
    increment: function increment(state) {
      state.count++;
    }
  },
  action: _action["default"]
});
var _default = store;
exports["default"] = _default;