<template>
  <div id="main">
    <div id="login" class="panel">
      <!-- <h2>登录</h2> -->
      <form action="">
        <div class="form-item">
          <label>
            <span class="txt">姓名：</span>
            <input type="text" class="form-input" v-model="submitData.name"/>
          </label>
        </div>
        <div class="form-item">
          <label>
            <span class="txt">密码：</span>
            <input type="password" class="form-input" v-model="submitData.password"/>
          </label>
        </div>
        <!-- <div class="form-item">
                    <label>
                        <span class="txt">重复密码：</span>
                        <input type="password" class="form-input">
                    </label>
                </div> -->
        <div class="form-item">
          <label>
            <button class="form-button primary" @click.prevent="doLogin">
              登录
            </button>
            <button class="form-button">注册</button>
          </label>
        </div>
        <span class="txt">{{message}}</span>

      </form>
    </div>
  </div>
</template>

<script>
import {login} from '@/api/user.js'
export default {
    name:'Login',
    data(){
        return{
            submitData:{
                name:'',
                password:''
            },
            message:''
        
        }
    },
    methods:{
        async doLogin(){
            // console.log("获取登录名",this.submitData.name)
            // const data = {
            //     name: this.submitData.name,
            //     password: this.submitData.password,
            // };
            // const res =await login(data);
            // console.log(res.data)
            // let token = res.headers.authorization;
            // console.log(token)
            try{
            const data = {
                name: this.submitData.name,
                password: this.submitData.password,
            };
            const res =await login(data);
            this.message = '登录成功'
            console.log(res.data)
            // let token = res.headers.authorization;
            localStorage.setItem('user',JSON.stringify(res.data));
            localStorage.setItem('token',JSON.stringify(res.headers.authorization));
            this.$router.push({
                name:'Main'
            });
            // console.log(token)
            }catch(e){
                console.dir(e)
                this.message = e.response.data
            }
            
        }
    }

}
</script>
<style></style>
