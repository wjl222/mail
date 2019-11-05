import Vue from 'vue'
import Router from 'vue-router'

//懒加载；
const Home = () => import('views/home/Home')
const Cart = () => import('views/cart/Cart')
const Catagory = () => import('views/catagory/Catagory')
const Profile = () => import('views/profile/Profile')

Vue.use(Router)

const routes = [{
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
    path: '/catagory',
    component: Catagory
},
{
    path: '/profile',
    component: Profile
}]

export default new Router({
    routes,
    mode: 'history'
})