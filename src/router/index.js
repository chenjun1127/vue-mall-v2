import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import Products from '@/views/Products';
import ProductList from '@/views/admin/ProductList';
import ProductSave from '@/views/admin/ProductSave';
import CategoryAdd from '@/views/admin/CategoryAdd';
import CategoryList from '@/views/admin/CategoryList';
import Success from '@/components/Success';
import Fail from '@/components/Fail';
import SignIn from '@/views/SignIn';
import SignUp from '@/views/SignUp';
import UserCenter from '@/views/user/Center';
import UserPassword from '@/views/user/Password';
import GetBack from '@/views/user/GetBack';
import ToCart from '@/views/ToCart';
import Search from '@/views/Search';
import Order from '@/views/Order';
import OrderSuccess from '@/views/OrderSuccess';
import MyOrder from '@/views/user/MyOrder';
Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/product/list',
      name: 'ProductList',
      component: ProductList,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/product/save',
      name: 'ProductSave',
      component: ProductSave,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/category/add',
      name: 'CategoryAdd',
      component: CategoryAdd,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/category/list',
      name: 'CategoryList',
      component: CategoryList,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/category/products',
      name: 'Products',
      component: Products,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/success',
      name: 'Success',
      component: Success,
    },
    {
      path: '/signIn',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/signUp',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/user/center',
      name: 'UserCenter',
      component: UserCenter,
    },
    {
      path: '/user/password',
      name: 'UserPassword',
      component: UserPassword,
    },
    {
      path: '/user/my-order',
      name: 'MyOrder',
      component: MyOrder,
    },
    {
      path: '/user/password/get-back',
      name: 'GetBack',
      component: GetBack,
    },
    {
      path: '/fail',
      name: 'Fail',
      component: Fail,
    },
    {
      path: '/to-cart',
      name: 'toCart',
      component: ToCart,
    },
    {
      path: '/search',
      name: 'Search',
      component: Search,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
    },
    {
      path: '/order-success',
      name: 'OrderSuccess',
      component: OrderSuccess,
    },
  ],
});
