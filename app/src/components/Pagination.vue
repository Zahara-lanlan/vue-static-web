<template>
  <div class="pagination">
    <a href="" class="prev">上一页</a>
    <a
      href=""
      v-for="p of pages"
      :key="p"
      @click.prevent="changePage(p)"
      :class="{ current: p == page }"
      >{{ p }}</a
    >
    <a href="" class="next">下一页</a>
  </div>
</template>

<script>
export default {
    name:'Pagination',
    props:{
        page:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default:0

        },
        prepage:{
            type:Number,
            default:1
        }
    },
    //只会在组件初始化的时候执行一次
    // data(){
    //     console.log("当前页",this.page,this.total,this.prepage)
    //     let pages = Math.ceil(this.total/this.prepage);
    //     console.log(pages)
    //     return {
    //         pages,

    //     }
    // },
    methods:{
        changePage(p){
            console.log(p)
            // this.$emit('update:page',p)
            this.page !== p && this.$emit('change',p)


        }
    },
    computed:{
        pages(){
            return Math.ceil(this.total/this.prepage)
        }
    }

}
</script>
<style></style>
