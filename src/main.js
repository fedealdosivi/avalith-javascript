import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCharts from 'vue-chartjs'

import App from './components/app-component/App.vue'
import router from './utils/router'


Vue.use(VueRouter);
Vue.use(VueCharts);

new Vue({
	router,
    el: '#app',
    render: h => h(App)
})
