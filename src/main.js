import Vue from 'vue';
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from '@/axios.modify'
import VueAxios from "vue-axios"

Vue.use(ElementUI);
Vue.use(VueAxios, axios)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')