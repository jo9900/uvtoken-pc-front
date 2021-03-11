/*
*author:zhoaya
*day:2020
*/


import { get, post } from './http'

const baseUrl = 'api/v1/'

export const news = params =>{
    return post( baseUrl + 'news/digest' , params )
}

export const newInfo = params =>{
    return post( baseUrl + 'news/detail' , params )
}



