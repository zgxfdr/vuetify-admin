"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
// 设置整个系统的全局变量
var getters = {
  count: function count(state) {
    return state.count;
  },
  token: function token(state) {
    return state.token;
  }
};
var _default = getters;
exports["default"] = _default;