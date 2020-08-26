<template>
  <div id="main">
    <ul class="items-list">
      <router-link
        :to="{ name: 'Detail', params: { id: item.id } }"
        class="panel"
        v-for="item of itemList"
        :key="item.id"
        tag="li"
      >
        <!-- <router-link to='/detail/1'> -->
        <img :src="item.cover" alt="" class="cover" />
        <!-- </router-link> -->
        <div class="name">{{ item.name }}</div>
        <div class="price">{{ item.price | price }}</div>
      </router-link>
    </ul>

    <div class="pagination-container">
         <!-- <div class="pagination">
        <a href class="prev">上一页</a>
        <a href>1</a>
        <a href>2</a>
        <a href>3</a>
        <a href class="current">4</a>
        <a href>5</a>
        <a href>6</a>
        <a href>7</a>
        <a href>8</a>
        <a href class="next">下一页</a>
      </div> -->
     <Pagination :page='page' :total='total' :prepage='prepage' @change="changePage"></Pagination>
    </div>
  </div>
</template>

<script>
import { getItems } from "@/api/index.js";

import price from "@/filters/price.js";
import Pagination from "@/components/Pagination.vue"
export default {
  name: "Main",
  data() {
    return {
      itemList: [],
      page:1,
      total:0,
      prepage:10
    };
  },
  filters: {
    price,
  },
  components:{
    Pagination
  },
  async created() {
      console.log(this.$route.query)
       let rs =await getItems();
       console.log(rs)
    // let {data:{items,page,total,prepage}} = await getItems();
    //  this.itemList = items;
     let token = localStorage.getItem('token')
     console.log(token)
    //判断是否登录了，没有登录了跳到登录页，登录了就显示
    // let isLogin = true;
    if (token) {
        await this.getItem();
  
    } else {
        this.$router.push({
            name:'Login'
        })
    }
  },
    watch: {
      async $route() {
        console.log('变了');
        await this.getItem();
      }
    },
  methods:{
      changePage(p){
        console.log("点击的事件",p,this.page)
        // if(p!==this.page){
            //重新发送请求
        //    this.getItem();
        // }

        //通过queryString改变当前页面的url
        //如果两次路由跳转的是同一个组件，这个是不会销毁重建的，是会复用原来的，create()生命周期是不会执行的
        // $router: 实际上就是 new VueRouter 得到的对象，它代表来整个应用的路由信息，提供路由公用的配置信息和方法，比如 push
        // $route: 满足当前url而创建的一个对象，这个对表里面存储与当前url匹配的路由信息
        this.$router.push({
            name:'Main',
            query:{
                page:p
            }
        })
      },
      async getItem(){
        //   this.page = this.$route.query.page
          console.log("+++从路由中拿到的page+++",this.$route.query.page)
          this.page = parseInt(this.$route.query.page)||1
        //请求完成之前，Main组件实际已经下渲染了
        let {
            data: { items,page,total,prepage},
        } = await getItems({
            page:this.page,
            prepage:this.prepage
        });
            //当数据发生变化之后，Main组件重新渲染一次
        this.itemList = items;
        this.page=page;
        this.total = total;
        this.prepage = prepage;
      }
  }
};
</script>
<style></style>
