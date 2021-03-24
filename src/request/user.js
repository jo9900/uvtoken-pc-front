/*
*author:zhoaya
*day:2020
*/
import { get, post, post2 } from './http'

const baseUrl = 'webmanage/'

export const userInfo = params =>{
    return post( baseUrl + 'user/info' , params )
}


export const myPreSale = params =>{
    return post( baseUrl + 'user/pre-sale' , params )
}

export const subBook = params =>{
    return post( baseUrl + 'user/pre-sale/book' , params )
}


export const myMarketing = params =>{
    return post( baseUrl + 'user/marketing' , params )
}

export const preSaleLog = params =>{
    return post( baseUrl + 'market/pre-sale/records' , params )
}

export const rebateLog = params =>{
    return post( baseUrl + 'market/rebate/records' , params )
}


export const marketingLog = params =>{
    return post( baseUrl + 'user/marketing/record' , params )
}

export const areaList= params =>{
    return post( baseUrl + 'base-info/country/list' , params )
}

export const addkyc= params =>{
    return post( baseUrl + 'user/kyc' , params )
}


export const kycInfo= params =>{
    return post( baseUrl + 'user/kyc/info' , params )
}
export const kycInfoPhoto= (url, params= {}) =>{
    return post2(  baseUrl + url, params )
}
export const taftBoert= params =>{
    return post( baseUrl + 'account/transfer/uvt' , params )
}
export const recordsList= params =>{
    return post( baseUrl + 'account/transfer/records' , params )
}

export const passwordVerify = params =>{
    return post( baseUrl + 'account/transfer/auth/verify' , params )
}
