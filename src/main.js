import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

// 加载路由判断
import './permission'

console.log(store.state.count)
new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')