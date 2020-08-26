<template>
  <div id="main">
    <div v-if="item">
      <h1 class="title">{{ item.name }}</h1>
      <div class="detail" v-html="item.detail.detail"></div>
    </div>
    <div v-else>
      <p>数据加载中。。。。</p>
    </div>
  </div>
</template>

<script>
//当一个组件既可以通过路由访问，游客
import { getItem } from "@/api/detail.js";
export default {
  name: "Detail",
  data() {
    return {
      item: [],
    };
  },
  async created() {
    // console.log("进入到详情页了", this.$router.history.current.params.id);
    // //    try{
    let id = this.$router.history.current.params.id;

    let { data } = await getItem(id);
    // this.item = data;
    console.log(data);
    //    }catch(e){

    //    }
  },

  async beforeRouteEnter(to, from, next) {
    //to，from对应这访问之前的url和之后的url对应的route对象
    console.log("11111");
    console.log("进入到详情页了");
    //    try{
    let id = to.params.id;
    console.log(id);
    let { data } = await getItem(id);
    next(vm=>{
        vm.item = data;
    })
    // this.item = data;
    console.log(data);
    next();
  },
  //   beforeRouteUpdate () {
  //     // 在当前路由改变，但是该组件被复用时调用
  //     // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
  //     // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
  //     // 可以访问组件实例 `this`
  //     console.log("22222")
  //   },
  //   beforeRouteLeave () {
  //     // 导航离开该组件的对应路由时调用
  //     // 可以访问组件实例 `this`
  //     console.log("33333")
  //   }
};
</script>
<style></style>
