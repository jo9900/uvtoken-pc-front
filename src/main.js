// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store'
import qs from 'qs'
import VueSimpleVerify from 'vue-simple-verify'
import '../node_modules/vue-simple-verify/dist/vue-simple-verify.css'
// import ElementUI from 'element-ui';
// import 'animate.css'
import '@/theme/index.css'
import '@/assets/css/default.css'
import '@/assets/css/global.css'

import moment from "moment";
Vue.prototype.$moment = moment;
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;



Vue.config.productionTip = false
Vue.component('vue-simple-verify', VueSimpleVerify)
let getQueryVariable = (name,url)=> {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(url) || [, ""])[1].replace(/\+/g, '%20')) || null
}
router.beforeEach((to, from, next) => {


    if (navigator.userAgent.match(/(iPhone|Android.*Mobile)/) || navigator.userAgent.match(/MSIE [6,7,8,9]/)) {
        if(getQueryVariable("ref",window.location.href)){
            window.location.href= process.env.VUE_APP_BASE_APILink+"#/signIn?ref="+getQueryVariable("ref",window.location.href)
        }else{
            window.location.href=process.env.VUE_APP_BASE_APILink
        }
      next();
    }else{
      next()
    }
})




Vue.prototype.$languageName= localStorage.getItem("languageName")?localStorage.getItem("languageName"):"Chinese"
if(process.env.NODE_ENV === 'development'){
    Vue.prototype.$BaseUrl = "http://192.168.0.60:9000/"
}else{
    Vue.prototype.$BaseUrl = process.env.VUE_APP_BASE_API
}
// process.env.VUE_APP_BASE_API
new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')



