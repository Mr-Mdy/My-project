import axios from 'axios'


//最终方案 2
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    //拦截器
    // axios.interceptors
    //请求拦截
    instance.interceptors.request.use(res => {
        // console.log(res);
        //1比如config中的一些信息不符合服务器要求
        //2比如每次发送网络请求时，都希望在界面中显示一个请求图标
        //3某些网络请求（比如登陆（token）），必须携带一些特殊的信息  没登陆拦截后跳转到登陆页面
        return res    //拦截了  需要返回
    }, err => {
        // console.log(err);
    })

    //响应拦截
    instance.interceptors.response.use(res => {
        return res.data   //返回需要的结果
    }, err => {

    })

    //发送网络请求  instance本身返回就是一个Promise
    return instance(config)

}


export function goods(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:8088',
        timeout: 5000
    })
    instance.interceptors.request.use(res => {
        console.log(res);
        return res    //拦截了  需要返回
    }, err => {
        // console.log(err);
    })
    instance.interceptors.response.use(res => {
        return res.data   //返回需要的结果
    }, err => {
    })
    return instance(config)
}





