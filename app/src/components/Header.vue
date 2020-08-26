<template>
  <header id="header">
    <a href="/" id="logo"></a>

    <nav id="nav">
      <a href="">手机</a>
      <a href="">笔记本</a>
      <a href="">家居</a>
    </nav>

    <div id="user">
      <router-link :to="{ name: 'UserProfile' }">{{ name }}</router-link>
      <div v-if="name==='用户中心'" class="item-line">
            <router-link :to="{name:'Login'}">登录</router-link>
            <router-link :to="{name:'Register'}">注册</router-link>
      </div>
      
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      name: "",
    };
  },

  created() {
    console.log("vuex", this.$store.state.name);
    // 判断是否登录
    if (this.$store.state.name) {
      console.log("已登录状态");
      this.name = this.$store.state.name;
    } else {
      console.log("未登录");
      this.name = "用户中心";
    }
  },
};
</script>
<style></style>
