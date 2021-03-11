import { get, post } from './http'

const baseUrl = 'api/v1/'

// 预售等级
export const preSale = params =>{
    return post( baseUrl + 'market/pre-sale/progress' , params )
}

// 申购价格
export const preSalePrice = params =>{
    return post( baseUrl + 'market/pre-sale/price' , params )
}

// 收款地址
export const payAddress = params =>{
    return post( baseUrl + 'market/payment/address' , params )
}
export const round = params =>{
    return post( baseUrl + 'market/pre-sale/round' , params )
}
