import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Detail from '@/views/Detail.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import User from '@/views/User.vue'
import UserProfile from '@/views/User/Profile.vue';
import UserCart from '@/views/User/Carts.vue';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
//注册
Vue.use(VueRouter)

// //创建一个路由对象
let  router = new VueRouter({
    mode:'history',
  //所有的路由映射，每一个路由就是一个对象
  routes:[
   {
    path:'/',
    name:'Main',
    component:Main
   },{
       path:'/detail/:id',
       redirect:{
           name:'Detail'
       }

   },{
       path:'/details/:id',
       //给每个路由起一个名字
       //路由组件传参，通过props把路由中的params注入到组件的props中
       props:true,  //即将路径中params的参数传入过去
       name:'Detail',
       component:Detail
   },{
       path:'/login',
       name:'Login',
       component:Login
   },{
       path:'/register',
       component:Register
   },
   {
       path:'/user',
       component:User,
       children: [
        {
          // path 如果还是以 / 表示绝对 path，而不是相对于其父路由的path
          // path: '/profile',
          // path: 'profile',
          // 如果需要设置默认子路由，那么path就可以留空，同时父级的name不需要设置
          path: '',
          name: 'UserProfile',
          component: UserProfile
        },
        {
          path: 'cart',
          name: 'UserCart',
          component: UserCart
        }
      ]
   }


  ]
});

//只要切换了路由就走该逻辑
router.beforeEach((to,from,next)=>{
    console.log("+++beforeEach+++")
    // console.log(to)
    // console.log(from)
    // console.log(next)
    NProgress.start();
    next();

});
router.afterEach(()=>{
    NProgress.done();
})

export default router;