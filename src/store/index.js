import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signInForm:"",
    PresellForm:"",
    timerCoander:false,
    token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
    code: localStorage.getItem('email') ? localStorage.getItem('email') : '',
  },
  mutations: {
    // 存储token
    SETTOKEN:(state,data)=>{
      localStorage.token = data
      state.token = data
    },
    // 存储code
    SETCODE:(state,data)=>{
      localStorage.code = data
      state.code = data
    },
     TRIM:(state,data)=>{
          state.timerCoander = data
      },
  },
  actions: {

  },
  modules: {

  }
})
