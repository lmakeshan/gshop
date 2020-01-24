import Vue from 'vue'
import Router from 'vue-router'
import Msite from '@/pages/Msite/Msite'
import Search from '@/pages/Search/Search'
import Order from '@/pages/Order/Order'
import Profile from '@/pages/Profile/Profile'
import Login from '@/pages/Login/Login.vue'
import Shop from '@/pages/Shop/Shop.vue'
import ShopGoods from '@/pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '@/pages/Shop/ShopGoods/ShopRatings.vue'
import ShopInfo from '@/pages/Shop/ShopGoods/ShopInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/msite'
    },
    {
      path: '/msite',
      name: 'Msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          name: 'ShopGoods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          name: 'ShopRating',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          name: 'ShopInfo',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
