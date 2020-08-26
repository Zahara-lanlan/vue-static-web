
<template>
   <div id="app">
        <Header></Header>
        <transition name="fade">
          <router-view></router-view>
        </transition>
    
    </div>

</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: "App",
  components:{
    Header
  }
};


</script>

<style>
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    transition: none;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
