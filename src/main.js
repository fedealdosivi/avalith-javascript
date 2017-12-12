import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCharts from 'vue-chartjs'

import App from './components/app-component/App.vue'
import router from './utils/router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'


Vue.use(VueRouter);
Vue.use(VueCharts);
Vue.use(BootstrapVue);

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
