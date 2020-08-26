import axios from 'axios';

// 方便后期的维护和管理
const BASEURL = '/api';
const APIURL = {
    login: {
        doLogin: BASEURL + '/login'
    }
}
//用户登录
export async function login(data) {
    // return await axios.post(APIURL.login.doLogin,params);
    return await axios({
    url:APIURL.login.doLogin,
    method:"post",
    data
});

}