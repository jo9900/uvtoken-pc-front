import axios from 'axios'

const service = axios.create({
    // 请求地址和网页地址不同
    baseURL: process.env.NODE_ENV == "production"? process.env.VUE_APP_COUNT_API: '',
    timeout: 10000
});
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

service.interceptors.response.use(function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);

    });
export function post(url, params={}) {
    return new Promise((resolve, reject) => {
        service.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
