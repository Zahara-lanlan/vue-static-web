import axios from 'axios';

// 方便后期的维护和管理
const BASEURL = '/api';
const APIURL = {
    item: {
        getItems: BASEURL + '/items'
    }
}
//获取所有商品
export async function getItems(params) {
    return await axios({
        url: APIURL.item.getItems,
        params
    });
}