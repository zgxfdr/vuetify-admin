"use strict";

var _router = _interopRequireDefault(require("@/router"));

var _store = _interopRequireDefault(require("@/store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 路由权限控制
_router["default"].beforeEach(function (to, from, next) {
  console.log(to);
  console.log(_store["default"]); // 没有登录信息就跳到登录页

  if (to.path != '/login' && !_store["default"].getters.token) {
    next({
      name: "login"
    });
  } else {
    next();
  }
});