import {goods, request} from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

export function getGoods() {
    return goods({
        url: '/banner/queryAllByLimit?offset=0&limit=3',
    })
}
