import Vue from 'vue'
import Router from 'vue-router'
const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')

Vue.use(Router)

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: Home

}, {
    path: '/category',
    component: Category
}, {
    path: '/profile',
    component: Profile
}, {
    path: '/cart',
    component: Cart
}]
const router = new Router({
    routes,
    mode: 'history'
})

export default router