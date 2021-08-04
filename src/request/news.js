/*
 * @Author: your name
 * @Date: 2021-03-29 17:53:20
 * @LastEditTime: 2021-08-02 18:59:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /uvtoken-pc-front/src/request/news.js
 */

import { get, post } from './http'

const baseUrl = 'webmanage/'

export const digest = params =>{
    return post( baseUrl + 'news/digest' , params )
}

export const detail = params =>{
    return post( baseUrl + 'news/detail' , params )
}
export const helpList = params =>{
    return post( baseUrl + 'issuelist' , params )
}
export const helpDetail = params =>{
    return post( baseUrl + 'issue/detail' , params )
}
