import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import action from './action'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        token: ""
    },
    getters,
    mutations: {
        increment(state) {
            state.count++
        }
    },
    action
})

export default store;