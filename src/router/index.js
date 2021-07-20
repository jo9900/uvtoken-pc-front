import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}



Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'hash',
    scrollBehavior(to,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return {x:0,y:0}
        }
    },

  base: process.env.BASE_URL,
  routes
})

if (window.localStorage.getItem('token') && window.localStorage.getItem('code')) {
  store.commit('SETTOKEN', window.localStorage.getItem('token'))
  store.commit('SETCODE', window.localStorage.getItem('code'))
}
let getQueryVariable = (name, url) => {
    return (
        decodeURIComponent(
            (new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(url) || [,
                "",
            ])[1].replace(/\+/g, "%20")
        ) || null
    );
};
router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    window.pageYOffset = 0;
    let ua = navigator.userAgent
    if (
        ua.match(/(iPhone|Android.*Mobile)/) ||
        ua.match(/MSIE [6,7,8,9]/) ||
        ua.toLowerCase().match(/MicroMessenger/i ) == 'micromessenger' // wx
    ) {
        if (getQueryVariable("ref", window.location.href)) {
            window.location.href =
                process.env.VUE_APP_BASE_API_MOBILE +
                "#/signUp?ref=" +
                getQueryVariable("ref", window.location.href);
        }
        else
            window.location.href = process.env.VUE_APP_BASE_API_MOBILE;
    }
    else
        next()
});

router.beforeEach((to, from, next) => {

    if (to.meta.title) {
        document.title = "UvToken"
            // +to.meta.title
    }

  let token = localStorage.getItem('token')

  // if (to.meta.requiresAuth) {
  //   if (token) {
  //     next()
  //   } else {
  //     next({ path: '/login', query: { redirect: to.fullPath }});
  //   }
  // } else {
      next()
  // }
})

export default router
