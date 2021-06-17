import { post } from './service'

const url = process.env.NODE_ENV == 'production'
            ? 'v2/statistics/dailycount'
            : 'wallet/statistics/downloadCount'
export const clickcount = params =>{
    console.log( process.env.NODE_ENV )
    return post( url , params )
}
