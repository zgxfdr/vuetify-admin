"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.resetRouter = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _layout = _interopRequireDefault(require("@/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 */
var originalPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(location) {
  return originalPush.call(this, location)["catch"](function (err) {
    return err;
  });
};

_vue["default"].use(_vueRouter["default"]);

// 路由规则: 常量
var constantRoutes = [{
  path: '/',
  component: _layout["default"],
  redirect: '/',
  children: [{
    path: '/',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/dashboard/index'));
      });
    },
    name: "Dashboard",
    icon: 'mdi-view-dashboard',
    meta: {
      title: '系统首页'
    }
  }, {
    path: '/act',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/act/index'));
      });
    },
    name: "Act",
    icon: 'mdi-view-dashboard',
    meta: {
      title: '活动列表'
    }
  }]
}, {
  path: '/login',
  name: "login",
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/views/login/index'));
    });
  }
}];
var asyncRoutes = [].concat(constantRoutes); // 创建路由

var createRouter = function createRouter() {
  return new _vueRouter["default"]({
    mode: "history",
    scrollBehavior: function scrollBehavior() {
      return {
        y: 0
      };
    },
    routes: asyncRoutes
  });
};

var router = createRouter();

var resetRouter = function resetRouter() {
  var newRouter = createRouter();
  console.log(newRouter);
  router.matcher = newRouter.matcher;
};

exports.resetRouter = resetRouter;
var _default = router;
exports["default"] = _default;