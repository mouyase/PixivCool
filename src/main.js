import Vue from 'vue';
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import axios from '@/axios.modify'
import VueAxios from "vue-axios"
import pixiv from '@/pixiv'
import app from '@/app'
import _ from 'lodash'
import VirtualCollection from 'vue-virtual-collection'

Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(VirtualCollection)
Vue.prototype.pixiv = pixiv;
Vue.prototype.app = app;
Vue.prototype._ = _

new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')
