import Vue from 'vue'
import Router from 'vue-router'
import App from '../components/app.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/APP',
      name: 'App',
      component: App
    }
  ]
})
