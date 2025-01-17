
import { get, post } from './http'

const baseUrl = 'webmanage/'

export const pubKey = params =>{
    return post( baseUrl + 'getpublickey' , params )
}

export const signUp = data =>{
    return post( baseUrl + 'userregister' , data )
}

export const mailVcode = data =>{

    return post( baseUrl + 'sendMail' , data )
}

export const passwordVcode = data =>{
    return post( baseUrl + 'password/verify-code' , data )
}

export const login = params => {
    return post( baseUrl + 'userlogin' , params )
}

export const findPassword = params => {
    return post( baseUrl + 'password/forgot' , params )
}

export const resetPassword = params => {
    return post( baseUrl + 'resetpassword' , params )
}


export const getImg = params => {
    return get( baseUrl + 'getimg' , params )
}

