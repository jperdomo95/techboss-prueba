import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      { name: 'Seif' },
      { name: 'Seif Módulos' },
      { name: 'Controller' },
      { name: 'Visitantes robusto' },
      { name: 'PTT' },
      { name: 'Controlpharm' }
    ],
    categories: [],
    modules: [],
    environment: []
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    products (state) {
      return state.products
    }
  },
  modules: {
  }
})
