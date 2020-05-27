import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
//要写前面
const Home = () => import('../views/home/Home');
const Cart = () => import('../views/cart/Cart');
const Profile = () => import('../views/profile/Profile');
const Category = () => import('../views/category/Category');


const routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/profile',
        component: Profile
    },
]

const router = new VueRouter({
    routes,
    mode: 'history', //将默认的哈系模式改为hisory
    linkActiveClass: 'active', //设置活跃状态下的名称
})


export default router


