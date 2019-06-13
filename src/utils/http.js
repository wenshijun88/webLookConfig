/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios'
/**
 * element-ui的信息提示
 * 如果是其他UI框架只要引入对应的提示框
 */
import {Message} from "element-ui";

//创建axios实例
var instance = axios.create({
    timeout: 1000 * 12
})

//设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json'

export default instance;
