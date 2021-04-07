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
    categories: [
      { name: 'Login' },
      { name: 'Registro' }
    ],
    modules: [
      { name: 'Configuración' },
      { name: 'Análisis' }
    ],
    environment: [
      { name: 'Desarrollo' },
      { name: 'Producción' }
    ],
    questions: []
  },
  mutations: {
    ADD_QUESTION (state, payload) {
      state.questions.push(payload)
    }
  },
  actions: {
    addQuestion ({ commit }, payload) {
      commit('ADD_QUESTION', payload)
    }
  },
  getters: {
    products (state) {
      return state.products
    },
    modules (state) {
      return state.modules
    },
    environments (state) {
      return state.environment
    },
    categories (state) {
      return state.categories
    }
  },
  modules: {
  }
})
