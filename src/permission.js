// 路由权限控制
import router from '@/router'
import store from '@/store';



router.beforeEach((to, from, next) => {
    console.log(to)
    console.log(store)
        // 没有登录信息就跳到登录页
    if (to.path != '/login' && !store.getters.token) {
        next({
            name: "login"
        });
    } else {
        next();
    }
})