import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let username;
if(localStorage.getItem('user')){
    username = JSON.parse(localStorage.getItem('user')).name 
}else{
    username  = '';
}

let store = new Vuex.Store({
    state:{
        name:username

    }
})

export default store;