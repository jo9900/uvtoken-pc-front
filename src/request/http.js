
import axios from 'axios'
import store from '@/store'
import router from '@/router'
import Qs from 'qs'
import {elMessage} from '@/utils/message.js'
import i18n from "@/locales/locale"
axios.defaults.withCredentials = true;
let that = this;
let baseUrl = ""
// if (process.env.NODE_ENV == 'development') {
//   baseUrl = 'http://47.108.73.150:8088/'
// } else if (process.env.NODE_ENV == 'alpha') {
//   baseUrl = 'http://servertest.youwuplay.com'
// } else if (process.env.NODE_ENV == 'production') {
//   baseUrl = 'https://api.youwuplay.com'
// }

// process.env.VUE_APP_BASE_API
axios.defaults.baseURL = ""

axios.defaults.timeout = 10000;

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


axios.interceptors.request.use(
    config => {
        const token = store.state.token
        token && (config.headers.token = token)
        if (Object.prototype.toString.call(config.data) != '[object FormData]')
            config.data = Qs.stringify(config.data)
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

axios.interceptors.response.use(function (response) {
        if(response.headers){
        if(response.headers["refresh-token"]){
         localStorage.setItem('token',response.headers["refresh-token"])
         store.commit('SETTOKEN', response.headers["refresh-token"])
        }
    }
	return response;
},
function (error) {
    if (typeof error.response !== "undefined") {
        if (error.response.data.code === 401) {
            store.commit('LOGOUT')
            window.location.href = "/login?redirect=%2Fdashboard";
        }
        else {
            const errMsg = error.response.data.msg;
            elMessage({
                message: errMsg,
                type: "error",
                duration: 2 * 1000,
            });
        }
    }
    return Promise.reject(error);

});


/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
    }).then(res => {
        resolve(res.data);
    }).catch(err => {
        throw err
    })
  });
}

  /**
   * post方法，对应post请求
   * @param {String} url [请求的url地址]
   * @param {Object} params [请求时携带的参数]
   */
  export function post(url, params={}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params)
      .then(res => {
          if (res.data.code == 300) {
              elMessage({
                  message: i18n.t("text204"),
                  type: "error",
                  duration: 3 * 1000,
              });
              return
          }
          if (res.data.code == 102501) { // token 失效
              store.commit('LOGOUT')
              router.push({path: '/login'})
              return
          }
          resolve(res.data);
      })
      .catch(err => {
          console.log(err)
          reject(err.data)
      })
    });
  }
 export function post2(url, params={}) {
    return new Promise((resolve, reject) => {
      axios({
          url,
          method: 'post',
          params,
          responseType: 'arraybuffer',
      })
      .then(res => {
          resolve(res.data);
      })
      .catch(err => {
          console.log(err)
          reject(err.data)
      })
    });
  }


  /**
   * 封装patch请求
   * @param url
   * @param data
   * @returns {Promise}
   */

  export function patch(url,data = {}){
      return new Promise((resolve,reject) => {
        axios.patch(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
      })
    }

     /**
     * 封装put请求
     * @param url
     * @param data
     * @returns {Promise}
     */

    export function put(url,data = {}){
      return new Promise((resolve,reject) => {
        axios.put(url,data)
          .then(response => {
            resolve(response.data);
          },err => {
            reject(err)
          })
      })
    }
