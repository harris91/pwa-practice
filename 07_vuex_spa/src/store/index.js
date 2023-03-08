import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Vuex의 store 중앙에 sate, mutations(setters), getter 정의
export default new Vuex.Store({
  // sTtitle을 상태값으로 정의
  state: {
    sTitle: ''
  },
  getters: {
    getData(state) {
      return state.sTitle;
    }
  },
  mutations: {
    setData: function (state, payload) {
      return state.sTitle = payload
    }
  },
})
