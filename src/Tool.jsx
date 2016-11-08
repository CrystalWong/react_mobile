import merged from 'obj-merged';
// import * as config from './Config/Config';
import { Router, Route, IndexRoute, browserHistory,hashHistory, Link } from 'react-router';
import cookie from 'react-cookie';
import {COMMON_HEADERS} from './constants/headers';
import URLS from './constants/urls';
const Tool = {};



/**
 * (加载数据)
 * 
 * @method Fetch
 */
Tool.fetch = function(obj,data){
    if(typeof fetch != "undefined"){
        var d = {
          method: data.type,
          headers: data.headers
        },
        status = 0;
        if(data.body){d.body = data.body;}
        fetch(data.url,d).then(response => {
            if(response.status >= 500){
                obj.setState({ tipContent: '网络连接失败，请检查您的网络',display: 'toasts' });
            }
            status = response.status;
            console.log(response.ok);
            return response.json();
        }).then(json => {
            obj.setState&&obj.setState({ajaxDisplay: "none",maskDisplay: "none"});  
            data.successMethod(json,status);
        },function(e){
            data.successMethod("",status);
        });
    }else {
        try {
            var xmlhttp,status = 0;
            if (window.XMLHttpRequest){
                xmlhttp=new XMLHttpRequest();
            }
            else {
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4)
                {
                    if(xmlhttp.status >= 500){
                        obj.setState({ tipContent: '网络连接失败，请检查您的网络',display: 'toasts' });
                    }    
                    obj.setState({ajaxDisplay: "none",maskDisplay: "none"});  
                    status = xmlhttp.status;
                    data.successMethod(eval("("+ xmlhttp.responseText +")"),status);
                }
            }
            xmlhttp.open(data.type,data.url,data.sync?false:true);
            xmlhttp.setRequestHeader("content-type","application/json");
            xmlhttp.setRequestHeader("sign", "BAD3426489851754C1C14A46A22ABF82");  
            xmlhttp.setRequestHeader("deviceid", "M");
            xmlhttp.setRequestHeader("tokenid", cookie.load('tokenid'));
            if(data.type == "post"){
                xmlhttp.send(data.body?data.body:"");
            }else{
                xmlhttp.send();
            }  
            

            // if(data.type && data.type == "post"){
            //     xmlhttp.open("post",data.url,data.sync?false:true);
            //     headersSet(xmlhttp);
            //     if(data.formData){//用于文件上传
            //         xmlhttp.send(data.formData);
            //     }else{
            //         
            //     }
            // }else if(data.type && data.type == "get"){
            //     xmlhttp.open("get",data.url,data.sync?false:true);
            //     headersSet(xmlhttp);
            //     // if(data.userToken)xmlhttp.setRequestHeader("User-Token", data.userToken);
            //     xmlhttp.send();
            // }


            var timeout = data.timeout?data.timeout:40000;
            // xmlhttp.timeout = setTimeout(function(){
            //     if(xmlhttp.readyState!=4 || xmlhttp.status!=200){
            //         xmlhttp.abort();
            //         if(data.endLoading) data.endLoading();//结束加载中
            //         noNetwork();
            //     }
            //     if(data.timeoutMethod){
            //         //alert("5s超时，将关闭！");
            //         if(data.endLoading) data.endLoading();//结束加载中
            //         data.timeoutMethod();
            //     }
            // },timeout);
        } catch(e) {
            console.log(e.name +" "+ e.message);
        } finally {

        }
    }

}

/**
 * (毫秒转化 2016-10-18 17:02:09)
 * 
 * @method formatSeconds
 */
Tool.loginChecked = function(obj){
    if(!cookie.load('tokenid')){
        Tool.history.push('/');
    }else{
        Tool.fetch(obj,{
            url: `${URLS.TOKENCHECKED}${cookie.load('tokenid')}`,
            type: "get",
            headers: COMMON_HEADERS,
            successMethod: function(json){
                if(!json.loginFlag){
                    Tool.history.push('/');
                }
            }
        });
    }
} 

/**
 * (毫秒转化 2016-10-18 17:02:09)
 * 
 * @method formatSeconds
 */
Tool.formatSeconds = function(seconds){
    let date=new Date(seconds);
    function numTowDisplay(num){
            if(num < 10 && num >= 0){
                num = "0"+num;
            }
            return num+"";
    }
    return numTowDisplay(date.getFullYear())+"-"+numTowDisplay(date.getMonth()+1)+"-"+numTowDisplay(date.getDate())+
    " "+numTowDisplay(date.getHours())+":"+numTowDisplay(date.getMinutes())+":"+numTowDisplay(date.getSeconds());
}

Tool.rem = function(){
    let rem,window_w;
    function resetREM(){
        window_w = window.innerWidth;
        rem = window_w / 750 * 100;
        document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
    }
    window.onload = window.onresize = resetREM;
}

//获取路由方式
Tool.history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;


/**
 * 格式化时间
 * 
 * @param {any} t
 * @returns
 */
Tool.formatDate = function (str) {
    var date = new Date(str);
    var time = new Date().getTime() - date.getTime(); //现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
    if (time < 0) {
        return '';
    } else if (time / 1000 < 60) {
        return '刚刚';
    } else if ((time / 60000) < 60) {
        return parseInt((time / 60000)) + '分钟前';
    } else if ((time / 3600000) < 24) {
        return parseInt(time / 3600000) + '小时前';
    } else if ((time / 86400000) < 31) {
        return parseInt(time / 86400000) + '天前';
    } else if ((time / 2592000000) < 12) {
        return parseInt(time / 2592000000) + '月前';
    } else {
        return parseInt(time / 31536000000) + '年前';
    }
}

/**
 * 本地数据存储或读取
 * 
 * @param {any} key
 * @param {any} value
 * @returns
 */
Tool.localItem = function (key, value) {
    if (arguments.length == 1) {
        return localStorage.getItem(key);
    } else {
        return localStorage.setItem(key, value);
    }
}

/**
 * 删除本地数据
 * 
 * @param {any} key
 * @returns
 */
Tool.removeLocalItem = function (key) {
    if (key) {
        return localStorage.removeItem(key);
    }
    return localStorage.removeItem();
}

export {Tool, merged}