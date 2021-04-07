import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/views/PageNotFound'
import Home from '@/views/Home.vue'
import AddQuestion from '@/views/AddQuestion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: PageNotFound
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/material-de-apoyo',
    name: 'AddQuestion',
    component: AddQuestion
  }
]

const router = new VueRouter({
  routes
})

export default router
