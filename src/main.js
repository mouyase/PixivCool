import Vue from 'vue';
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from '@/axios.modify'
import VueAxios from "vue-axios"
import pixiv from '@/pixiv'
import _ from 'lodash'


Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.prototype.pixiv = pixiv;
Vue.prototype._ = _

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')