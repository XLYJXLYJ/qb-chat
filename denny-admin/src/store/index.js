import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const state = {
	level: '第一周', //活动周数
}
export default new Vuex.Store({
	state,
	actions,
    mutations,
    plugins: [createPersistedState()]
})