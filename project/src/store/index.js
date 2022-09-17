import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    // products: null,
    // cart: []
  },
  getters: {
    totalItem(state){
      return state.cart.length
    }
  },
  mutations: {
    ADD_ITEM(state,data){
      state.cart.push(data) 
    },
  },
  actions: {
    addItem({commit},data){
      commit("ADD_ITEM",data)
    },
  },
  modules: {
  }
})
