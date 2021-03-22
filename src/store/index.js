import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signUpForm:"",
    book_amount:"",
    totalAmount:"",
    presaleChecked:"",
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
    LOGOUT:(state)=> {
      localStorage.removeItem('token');
      localStorage.removeItem('code');
      localStorage.removeItem('email');
      localStorage.removeItem('filName');
    },
    SAVE_PRESALEForm: (state, data) => {
      state.book_amount = data.book_amount
      state.totalAmount = data.totalAmount
      state.presaleChecked = data.presaleChecked
    }
  },
  actions: {

  },
  modules: {

  }
})
