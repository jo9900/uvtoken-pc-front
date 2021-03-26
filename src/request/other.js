import { get, post } from './http'

const baseUrl = 'webmanage/'

export const subscribe = params =>{
    return post( baseUrl + 'subscription/to-email' , params )
}


