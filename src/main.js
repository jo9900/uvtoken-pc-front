
/*
*author:zhoaya
*day:2020
*/
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store'
// import qs from 'qs'
import VueSimpleVerify from 'vue-simple-verify'
import '../node_modules/vue-simple-verify/dist/vue-simple-verify.css'
// import ElementUI from 'element-ui';
// import 'animate.css'
import '@/theme/index.css'
import '@/assets/css/default.css'
import '@/assets/css/global.css'
import '@/assets/css/hover.css'
import i18n from './locale/locale'
import moment from "moment";
import { Vue } from 'vue-property-decorator';
Vue.prototype.$moment = moment;
// Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;
Vue.prototype.$langType = localStorage.getItem('langType')
Vue.prototype.$lang = localStorage.getItem('lang')
Vue.prototype.$BaseUrl = process.env.VUE_APP_BASE_API

Vue.config.productionTip = false
Vue.component('vue-simple-verify', VueSimpleVerify)

// process.env.VUE_APP_BASE_API
new Vue({
  router,
  store,
  render: h => h(App),
    i18n
}).$mount('#app')



