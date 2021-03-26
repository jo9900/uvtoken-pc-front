
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
    return post( baseUrl + 'listdetail' , params )
}
