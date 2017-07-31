/**
 * Created by guohongan on 2017/6/20.
 */
'use strict'
import Cookies from 'react-native-cookies'
import  NetWorkingFetchBlob from 'react-native-fetch-blob'
const  Request = {

    Header:{
        'User-Agent': 'ShunLian iPhone 10.2.1/1.3.5',
        'X-Device-ID': 'F793A113-EAE6-497B-8170-ED71E77A608A',
       // 'Accept-Encoding': 'gzip,deflate',
        'X-Ip': '172.16.17.15',
        'resolution':'750x1334',


    },
    GetConfig:{

        indicator:true,

    },
    PostConfig:{
        indicator:true,

    },
    UpLoadConfig:{
        indicator:true,

    },
    get:(url,successCallBack,failCallBack) =>{
        console.log(url);


        Cookies.set([{
            domain: '.api-test.shunliandongli.com',
            name:'api_pin',
            value: '11110',
            Path: '/',
            version: '',
            origin: '',
            expiration: ''
        },{
            domain: '.api-test.shunliandongli.com',
            name:'api_wskey',
            value: 'c57bvi2Lhmi6TncbUk03d9%2BDL1%2Fjl61II364KYZ%2BOgrWGvHlXnyRnyvnOzhfI4IuMrTbv%2FpO83Z85vUdhAj2a3PlE4aChjq94phyuW4w87NokvL4WLTOipoGX6Tc%2BBHGj8Sj45MX8HWJ2oNNFg',
            Path: '/',
            version: '',
            origin: '',
            expiration: ''

        }], (err, res) => {
            console.log('cookie set!');
            console.log(err);
            console.log(res);
        });
        return NetWorkingFetchBlob
            .config(Request.GetConfig)
            .fetch('GET',url,Request.Header)
            .then((response) => {
                // console.log(response);
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((request) => {
                console.log(request);
                successCallBack(request.data);

            })
            .catch((error)=>{

                //console.log(error);
                failCallBack(error);
            })

    },
    /**
     * @param url               请求网址
     * @param body              要上传的参数
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns {Promise.<U>|Promise.<T>}
     */
    post:(url, body, successCallBack, failCallBack) =>{

        Request.Header.body = JSON.stringify(body);
        console.log(Request.Header);

        return RNFetchBlob
            .config(Request.PostConfig)
            .fetch('POST',url,Request.Header)
            .then((response) => {
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response.data);
                }
            })
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            })
    },
    /**
     * @param url               请求网址
     * @param body              要上传的信息,会自动转码
     * @param uploadProgress    上传进度
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns
     */
    upload:(url,body,uploadProgress,successCallBack,failCallBack) => {
        return RNFetchBlob
            .config(Request.UpLoadConfig)
            .fetch('POST',url,{
                'Content-Type' : 'multipart/form-data',
            },body)
            .uploadProgress((written, total) => {
            })
            .progress((received, total) => {
                let perent = received / total;
                // 搜索进度打印
                console.log(perent);
                uploadProgress(perent);
            })
            .then((response)=>{
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=> {
                // console.log(response);
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            });
    }

}

module.exports = Request