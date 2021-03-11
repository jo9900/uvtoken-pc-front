// api接口统一管理

// login

import { get, post } from './http'

const baseUrl = 'webmanage/'

// 获取公钥
export const pubKey = params =>{
    return post( baseUrl + 'getpublickey' , params )
}

// 注册
export const signIn = data =>{
    return post( baseUrl + 'userregister' , data )
}

// 邮箱验证码
export const mailVcode = data =>{

    return post( baseUrl + 'sendMail' , data )
}

// 邮箱验证码2
export const passwordVcode = data =>{
    return post( baseUrl + 'password/verify-code' , data )
}


// 登录
export const login = params => {
    return post( baseUrl + 'userlogin' , params )
}

// 找回密码
export const findPassword = params => {
    return post( baseUrl + 'password/forgot' , params )
}

// 重置密码
export const resetPassword = params => {
    return post( baseUrl + 'resetpassword' , params )
}

