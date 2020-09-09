import Vue from "vue";
import Router from "vue-router";
 
/**
 * 重写路由的push方法
 * 解决，相同路由跳转时，报错
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router); 

import Layout from '@/layout'

// 路由规则: 常量
const constantRoutes = [ 
   
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [{
        path: '/',
        component: () => import('@/views/dashboard/index'),
        name: "Dashboard",
        icon: 'mdi-view-dashboard',
        meta: {
          title: '系统首页'
        }
      },
      {
        path: '/act',
        component: () => import('@/views/act/index'),
        name: "Act",
        icon: 'mdi-view-dashboard',
        meta: {
          title: '活动列表'
        }
      }    
    ]
  } 
  
]

 

const asyncRoutes = [
  ...constantRoutes 
]
  
// 创建路由
const createRouter = () => new Router({
  mode:  "history",
  scrollBehavior: () => ({ y: 0 }),
  routes: asyncRoutes
});

const router = createRouter();

export const resetRouter = () => {
  const newRouter = createRouter();
  console.log(newRouter);
  router.matcher = newRouter.matcher;
}

export default router;
 
