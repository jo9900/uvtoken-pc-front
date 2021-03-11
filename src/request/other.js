// api接口统一管理


import { get, post } from './http'

const baseUrl = 'api/v1/'

// 新闻列表
export const news = params =>{
    return post( baseUrl + 'news/digest' , params )
}

// 新闻详情
export const newInfo = params =>{
    return post( baseUrl + 'news/detail' , params )
}



