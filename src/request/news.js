// api接口统一管理



import { get, post } from './http'

const baseUrl = 'webmanage/'

// 新闻列表
export const digest = params =>{
    return post( baseUrl + 'news/digest' , params )
}
// 新闻详情
export const detail = params =>{
    return post( baseUrl + 'news/detail' , params )
}
export const helpList = params =>{
    return post( baseUrl + 'issuelist' , params )
}
export const helpDetail = params =>{
    return post( baseUrl + 'listdetail' , params )
}
