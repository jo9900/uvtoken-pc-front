/*
*author:zhoaya
*day:2020
*/
import { get, post } from './http'

const baseUrl = 'api/v1/'


export const preSale = params =>{
    return post( baseUrl + 'market/pre-sale/progress' , params )
}


export const preSalePrice = params =>{
    return post( baseUrl + 'market/pre-sale/price' , params )
}

export const payAddress = params =>{
    return post( baseUrl + 'market/payment/address' , params )
}
export const round = params =>{
    return post( baseUrl + 'market/pre-sale/round' , params )
}
