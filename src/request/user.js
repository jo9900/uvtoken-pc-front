import { get, post } from './http'

const baseUrl = 'api/v1/'

// 用户信息
export const userInfo = params =>{
    return post( baseUrl + 'user/info' , params )
}

// 我的预售
export const myPreSale = params =>{
    return post( baseUrl + 'user/pre-sale' , params )
}
//提交预售
export const subBook = params =>{
    return post( baseUrl + 'user/pre-sale/book' , params )
}

// 我的推广
export const myMarketing = params =>{
    return post( baseUrl + 'user/marketing' , params )
}

// 申购金记录
export const preSaleLog = params =>{
    return post( baseUrl + 'market/pre-sale/records' , params )
}

// 累计返利记录
export const rebateLog = params =>{
    return post( baseUrl + 'market/rebate/records' , params )
}

// 推广用户记录
export const marketingLog = params =>{
    return post( baseUrl + 'user/marketing/record' , params )
}

//地区
export const areaList= params =>{
    return post( baseUrl + 'base-info/country/list' , params )
}
//添加KYC
export const addkyc= params =>{
    return post( baseUrl + 'user/kyc' , params )
}

//获取
export const kycInfo= params =>{
    return post( baseUrl + 'user/kyc/info' , params )
}
export const taftBoert= params =>{
    return post( baseUrl + 'account/transfer/taft' , params )
}
export const recordsList= params =>{
    return post( baseUrl + 'account/transfer/records' , params )
}

export const passwordVerify = params =>{
    return post( baseUrl + 'account/transfer/auth/verify' , params )
}
