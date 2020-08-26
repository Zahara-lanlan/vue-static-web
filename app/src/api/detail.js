import axios from 'axios';

// 方便后期的维护和管理
const BASEURL = '/api';
const APIURL = {
    item: {
        getItem: BASEURL + '/item'
    }
}
//获取指定id的商品
export async function getItem(id) {
    console.log("获取getItem")
    return await axios({
        url: APIURL.item.getItem + '/' + id,
    });
}