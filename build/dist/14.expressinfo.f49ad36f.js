webpackJsonp([14],{13:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),s=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(s)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Downloadapp=t.AddressSelect=t.Header=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),c=e(l),u=n(16),d=n(15),f=n(14),p=e(f),h=n(8),m=n(10),y=e(m),g=n(12),v=t.Header=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hClass:"h-screen",hPar:!1},n}return r(t,e),o(t,[{key:"classify",value:function(){this.state.hPar?this.setState({hClass:"h-screen",hPar:!1}):this.setState({hClass:"h-screen hs-icoUp",hPar:!0}),this.props.callbackParent(this.state.hPar)}},{key:"industry",value:function(e){if("LI"==e.target.parentNode.tagName){this.props.callback(e.target.parentNode.id);for(var t=0;t<this.refs.industry.childNodes.length;t++)this.refs.industry.childNodes[t].className=" ";this.refs.sHead.innerText=e.target.innerText,e.target.parentNode.className="active",this.setState({hClass:"h-screen",hPar:!1}),this.props.callbackParent(this.state.hPar)}}},{key:"goBack",value:function(){"center"==this.props.type?location.href="http://m.jyall.com/":this.context.router.goBack()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftIcon,a=e.hadeScreen,s=void 0===a?"":a,r=(e.hClass,e.type,null),i=null;return"fanhui"===n&&(r=c["default"].createElement("a",{href:"javascript:;",onClick:this.goBack.bind(this)},c["default"].createElement("i",null))),"true"===s&&(i=c["default"].createElement("div",{className:"h-screen-warp"},c["default"].createElement("div",{className:this.state.hClass,ref:"hState",onClick:this.classify.bind(this)}),c["default"].createElement("div",{className:"h-s-list",style:{display:this.state.hPar?"block":"none"}},c["default"].createElement("ul",{className:"clearfix",onClick:this.industry.bind(this),ref:"industry"},c["default"].createElement("li",{id:"0",className:"active"},c["default"].createElement("span",null,"全部订单")),c["default"].createElement("li",{id:"1"},c["default"].createElement("span",null,"家居订单")),c["default"].createElement("li",{id:"2"},c["default"].createElement("span",null,"家装订单")),c["default"].createElement("li",{id:"4"},c["default"].createElement("span",null,"家电订单")),c["default"].createElement("li",{id:"3"},c["default"].createElement("span",null,"家具订单")),c["default"].createElement("li",{id:"5"},c["default"].createElement("span",null,"家政订单")))))),c["default"].createElement("header",{className:"common-header"},c["default"].createElement("div",{className:"left-arrow"},r),c["default"].createElement("h2",{className:"title"},c["default"].createElement("span",{ref:"sHead"},t),i))}}]),t}(l.Component);v.contextTypes={router:c["default"].PropTypes.object.isRequired};var E=c["default"].createClass({displayName:"AddressSelectList",render:function(){var e=this,t=this.props,n=t.index,a=t.id,s=t.name,r=t.status,i=t.selectIndex;return this.callback=function(){e.props.callback({index:n,name:s,id:a,status:r})},c["default"].createElement("li",{className:n==i?"select":"",onClick:this.callback.bind(this)},s)}}),x=(t.AddressSelect=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],status:0,index:0,select:"请选择",province:"",provinceId:"",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},n.getProvince(n,0),n}return r(t,e),o(t,[{key:"getProvince",value:function(e,t){0!=t&&(this.setState({index:0,status:0,select:"请选择",province:"",city:""}),e=this),h.Tool.fetch(e,{url:y["default"].PROVINCE+"?containChilds=false",type:"get",headers:g.COMMON_HEADERS,successMethod:function(t){e.setState({list:t,status:0})}})}},{key:"getCity",value:function(e,t){0!=t&&(e=this.state.provinceId);var n=this;h.Tool.fetch(this,{url:""+y["default"].CITY+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:1,city:"",country:"",xz:""})}})}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var n=this;h.Tool.fetch(this,{url:""+y["default"].COUNTRY+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:2,country:"",xz:""})}})}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var n=this;h.Tool.fetch(this,{url:""+y["default"].XZ+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:3,xz:""})}})}},{key:"selectItem",value:function(e){0==e.status?(this.refs.province.innerText=e.name,this.setState({province:e.name,provinceId:e.id,select:"",index:e.index}),this.getCity(e.id,0)):1==e.status?(this.refs.city.innerText=e.name,this.setState({city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0),console.log(this.state.provinceId)):2==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):3==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({provinceId:this.state.provinceId,province:this.state.province,cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return c["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},c["default"].createElement("header",null,"所在地区",c["default"].createElement("span",{onClick:this.props.close},"+")),c["default"].createElement("div",{className:"select-value"},c["default"].createElement("span",{style:{color:"#ff6600"}},this.state.select),c["default"].createElement("span",{ref:"province",onClick:this.getProvince.bind(this)},this.state.province),c["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),c["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),c["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),c["default"].createElement("div",{className:"select-scroll"},c["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,n){return c["default"].createElement(E,i({key:n,index:n,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(l.Component),t.Downloadapp=function(e){var t="http://m.jyall.com/download.html",n="myapp://m.jyall.app/openwith",a=document.getElementsByClassName("j-downAppBtn");a.length,document.body.addEventListener("click",function(a){if("j-downAppBtn"==a.target.className){if("MicroMessenger"==navigator.userAgent.match(/MicroMessenger/i))return;if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var s=new Date,r=document.createElement("a");r.href=t,document.body.appendChild(r);var i=document.createEvent("HTMLEvents");i.initEvent("click",!1,!0),window.setTimeout(function(){e.setState({tipContent:"未检测到本地应用，<br>现跳转到下载页面！",display:"toasts"});var t=new Date;t-s<5e3?(r.dispatchEvent(i),setTimeout(function(){e.setState({tipContent:"app iPhone|iPod|iPad  暂无下载地址链接！！！",display:"toasts"})},500)):window.close()},2e3),window.location=n}else if(navigator.userAgent.match(/android/i)){var o=null;try{o=document.createElement("iframe"),o.setAttribute("src",n),o.setAttribute("style","display:none"),document.body.appendChild(o)}catch(a){}setTimeout(function(){e.setState({tipContent:"未检测到本地应用，<br>现跳转到下载页面！",display:"toasts"}),e.setState({tipContent:"app android 下载开始，链接地址！！！",display:"toasts"}),window.location=t},2e3)}}},!1)},function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),o(t,[{key:"render",value:function(){var e=this.props.User&&this.props.User.loginname?"/user/"+this.props.User.loginname:"/signin",t=[];return t[this.props.index]="on",c["default"].createElement("footer",{className:"common-footer"},c["default"].createElement("div",{className:"zhanwei"}),c["default"].createElement("ul",{className:"menu","data-flex":"box:mean"},c["default"].createElement("li",{className:t[0]},c["default"].createElement(u.Link,{to:"/"},c["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),c["default"].createElement("li",{className:t[1]},c["default"].createElement(u.Link,{to:"/topic/create"},c["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),c["default"].createElement("li",{className:t[2]},c["default"].createElement(u.Link,{to:"/my/messages"},c["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),c["default"].createElement("li",{className:t[3]},c["default"].createElement(u.Link,{to:e},c["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(l.Component));x.defaultProps={index:0};var b=(0,d.connect)(function(e){return{User:e.User}},(0,p["default"])("User"))(x);t.Footer=b}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var s=t;s&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to index.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},14:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),s=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(s)},r)}();try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){console.log(e),console.log(0x650e124ef1c7);for(var t={},n=["signinSuccess","signin","setState"],a=function(a){t[n[a]]=function(t){return{_ID:e,target:t,type:n[a]}}},s=0;s<n.length;s++)a(s);return t}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var s=t;s&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to Index.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},108:function(e,t,n){t=e.exports=n(22)(),t.push([e.id,'.express-info{line-height:1}.express-info .goods{display:table;padding:.2rem .28rem;background:#fff}.express-info .goods .left{margin-right:.28rem;width:1.24rem}.express-info .goods .left img{width:100%;height:1rem}.express-info .goods .left span{display:inline-block;width:100%;text-align:center;font-size:.22rem;background:#000;color:#fff;line-height:1.6}.express-info .goods .right{display:table-cell;vertical-align:middle;width:100%;color:#999;font-size:.22rem;line-height:1.4}.express-info .goods .right p:nth-child(1){font-size:.24rem;color:#333}.express-info .progress{margin-top:.2rem;padding:0 .28rem;background:#fff;font-size:.24rem;color:#666}.express-info .progress header{padding:.34rem 0;color:#333;border-bottom:1px solid #eee}.express-info .progress li{display:table;line-height:0;overflow:hidden}.express-info .progress .first-list{color:#00a35e}.express-info .progress .left-icon{position:relative;display:table-cell;line-height:0}.express-info .progress .left-icon span{display:inline-block;position:relative;left:.04rem;width:.16rem;height:.16rem;border-radius:1rem;background:#e8e8e8;z-index:1}.express-info .progress .left-icon:after{content:" ";position:absolute;top:0;left:.12rem;margin-left:-1px;width:0;height:100%;border:1px solid #e8e8e8}.express-info .progress .first-list .left-icon span{left:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:.24rem;height:.24rem;border-radius:1rem;background:rgba(0,165,63,.36)}.express-info .progress .first-list .left-icon span i{display:block;width:.16rem;height:.16rem;border-radius:.32rem;background:#00a53f}.express-info .progress .first-list .left-icon:after{top:auto}.express-info .progress .right-content{display:table-cell;width:100%;padding:.2rem 0;line-height:1.4;border-bottom:1px solid #eee}.express-info a{color:"#09f"}',""])},328:function(e,t,n){var a=n(108);"string"==typeof a&&(a=[[e.id,a,""]]);var s=n(24)(a,{});a.locals&&(e.exports=a.locals),a.locals||e.hot.accept(108,function(){var t=n(108);"string"==typeof t&&(t=[[e.id,t,""]]),s(t)}),e.hot.dispose(function(){s()})},354:function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),s=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(s)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return{order:e.order}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),c=e(l),u=n(15),d=n(13),f=n(8),p=n(12),h=n(10),m=e(h);n(328);var y=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));console.log(n.props),n.state={tipContent:"",display:"",list:[],expressName:"",expressCode:"",mainPic:"",productTotalCount:""};var r=((0,p.COMMON_HEADERS)(),n);return f.Tool.fetch(n,{url:""+m["default"].EXPRESSINFO+n.props.order.orderId,type:"get",headers:p.COMMON_HEADERS,successMethod:function(e,t){200==t&&r.setState({list:e.shippingInfoList,mainPic:e.mainPic,productTotalCount:e.productTotalCount,expressName:e.expressName,expressCode:e.expressCode})}}),n}return r(t,e),o(t,[{key:"render",value:function(){return c["default"].createElement("div",{className:"express-info"},c["default"].createElement(d.Header,{title:"物流详情",leftIcon:"fanhui"}),c["default"].createElement("div",null,c["default"].createElement("div",{className:"goods"},c["default"].createElement("div",{className:"left"},c["default"].createElement("img",{src:this.state.mainPic}),c["default"].createElement("span",null,this.state.productTotalCount,"件商品")),c["default"].createElement("div",{className:"right"},c["default"].createElement("p",null,c["default"].createElement("span",null,"承运公司"),"  ",c["default"].createElement("span",null,this.state.expressName)),c["default"].createElement("p",null,c["default"].createElement("span",null,"运单编号"),"  ",c["default"].createElement("span",null,this.state.expressCode)))),c["default"].createElement("div",{className:"progress"},c["default"].createElement("header",null,"物流跟踪"),c["default"].createElement("ul",null,this.state.list.map(function(e,t){return 0==t?c["default"].createElement("li",{key:t,className:"first-list"},c["default"].createElement("div",{className:"left-icon"},c["default"].createElement("span",null,c["default"].createElement("i",null))),c["default"].createElement("div",{style:{width:".42rem"}}),c["default"].createElement("div",{className:"right-content"},e.context,c["default"].createElement("br",null),e.time)):c["default"].createElement("li",{key:t},c["default"].createElement("div",{className:"left-icon"},c["default"].createElement("span",null)),c["default"].createElement("div",{style:{width:".42rem"}}),c["default"].createElement("div",{className:"right-content"},e.context,c["default"].createElement("br",null),e.time))})))))}}]),t}(l.Component);t["default"]=(0,u.connect)(i)(y)}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var s=t;s&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to ExpressInfo.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))}});