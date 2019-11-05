import axios from 'axios'

export function request(params) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        console.log('来到了request拦截success中');
        return config
    },err => {
        return err
    });

    instance.interceptors.response.use(response => {
        console.log('来到了response拦截success中');
        return response.data
    },err => {
        return err
    });

    return instance(params)
}