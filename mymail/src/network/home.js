//所有对首页的请求在这边处理；首页的所有请求；

import {request} from './request';

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}