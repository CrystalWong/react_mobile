webpackJsonp([15],{6:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Downloadapp=t.AddressSelectThree=t.AddressSelect=t.Header=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),c=e(o),u=n(13),d=n(10),f=n(7),h=e(f),m=n(8),p=e(m),y=n(2),v=n(3),E=e(v),g=n(4),b=t.Header=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hClass:"h-screen",hPar:!1},n}return i(t,e),l(t,[{key:"classify",value:function(){this.state.hPar?this.setState({hClass:"h-screen",hPar:!1}):this.setState({hClass:"h-screen hs-icoUp",hPar:!0}),this.props.callbackParent(this.state.hPar)}},{key:"industry",value:function(e){if("LI"==e.target.parentNode.tagName){this.props.callback(e.target.parentNode.id);for(var t=0;t<this.refs.industry.childNodes.length;t++)this.refs.industry.childNodes[t].className=" ";this.refs.sHead.innerText=e.target.innerText,e.target.parentNode.className="active",this.setState({hClass:"h-screen",hPar:!1}),this.props.callbackParent(this.state.hPar)}}},{key:"goBack",value:function(){"center"==this.props.type?location.href="http://m.jyall.com/":this.context.router.goBack()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftIcon,a=e.hadeScreen,s=void 0===a?"":a,i=e.hasRight,r=void 0===i?"":i,l=(e.hClass,e.type,e.className),o=null,u=null,d=null;return"fanhui"===n&&(o=c["default"].createElement("a",{href:"javascript:;",onClick:this.goBack.bind(this)},c["default"].createElement("i",null))),r&&(d=c["default"].createElement("a",{href:"//m.jyall.com/app/popup/jycoupon.html"},c["default"].createElement("span",{className:"coupon-intro"},"使用说明"))),"true"===s&&(u=c["default"].createElement("div",{className:"h-screen-warp"},c["default"].createElement("div",{className:this.state.hClass,ref:"hState",onClick:this.classify.bind(this)}),c["default"].createElement("div",{className:"h-s-list",style:{display:this.state.hPar?"block":"none"}},c["default"].createElement("ul",{className:"clearfix",onClick:this.industry.bind(this),ref:"industry"},c["default"].createElement("li",{id:"0",className:"active"},c["default"].createElement("span",null,"全部订单")),c["default"].createElement("li",{id:"1"},c["default"].createElement("span",null,"房产订单")),c["default"].createElement("li",{id:"2"},c["default"].createElement("span",null,"装修订单")),c["default"].createElement("li",{id:"4"},c["default"].createElement("span",null,"家电订单")),c["default"].createElement("li",{id:"3"},c["default"].createElement("span",null,"家具订单")),c["default"].createElement("li",{id:"5"},c["default"].createElement("span",null,"家政订单")),c["default"].createElement("li",{id:"6"},c["default"].createElement("span",null,"汽车订单")),c["default"].createElement("li",{id:"7"},c["default"].createElement("span",null,"旅行订单")))))),c["default"].createElement("header",{className:"common-header"},c["default"].createElement("div",{className:"left-arrow"},o),c["default"].createElement("h2",{className:l?"title "+l:"title"},c["default"].createElement("span",{ref:"sHead"},t),u,d))}}]),t}(o.Component);b.contextTypes={router:c["default"].PropTypes.object.isRequired};var x=c["default"].createClass({displayName:"AddressSelectList",render:function(){var e=this,t=this.props,n=t.index,a=t.id,s=t.name,i=t.status,r=t.selectIndex;return this.callback=function(){e.props.callback({index:n,name:s,id:a,status:i})},c["default"].createElement("li",{className:n==r?"select":"",onClick:this.callback.bind(this)},s)}}),k=(t.AddressSelect=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],status:0,index:0,select:"请选择",province:"",provinceId:"",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},n.getProvince(n,0),n}return i(t,e),l(t,[{key:"getProvince",value:function(e,t){0!=t&&(this.setState({index:0,status:0,select:"请选择",province:"",city:"",country:"",xz:""}),e=this),y.Tool.fetch(e,{url:E["default"].PROVINCE+"?containChilds=false",type:"get",headers:g.COMMON_HEADERS,successMethod:function(t){e.setState({list:t,status:0})}})}},{key:"getCity",value:function(e,t){0!=t&&(e=this.state.provinceId);var n=this;y.Tool.fetch(this,{url:""+E["default"].CITY+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:1,city:"",country:"",xz:""})}})}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var n=this;y.Tool.fetch(this,{url:""+E["default"].COUNTRY+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:2,country:"",xz:""})}})}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var n=this;y.Tool.fetch(this,{url:""+E["default"].XZ+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:3,xz:""})}})}},{key:"selectItem",value:function(e){0==e.status?(this.refs.province.innerText=e.name,this.setState({province:e.name,provinceId:e.id,select:"",index:e.index}),this.getCity(e.id,0)):1==e.status?(this.refs.city.innerText=e.name,this.setState({city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0)):2==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):3==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({provinceId:this.state.provinceId,province:this.state.province,cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return c["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},c["default"].createElement("header",null,"所在地区",c["default"].createElement("span",{onClick:this.props.close},"+")),c["default"].createElement("div",{className:"select-value"},c["default"].createElement("span",{style:{color:"#ff6600",marginRight:"0"}},this.state.select),c["default"].createElement("span",{ref:"province",onClick:this.getProvince.bind(this)},this.state.province),c["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),c["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),c["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),c["default"].createElement("div",{className:"select-scroll"},c["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,n){return c["default"].createElement(x,r({key:n,index:n,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(o.Component),t.AddressSelectThree=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],status:0,index:0,select:"请选择",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},n.getCity(n,0),n}return i(t,e),l(t,[{key:"getCity",value:function(e,t){(0,h["default"])(""+E["default"].CITYTHREE,{method:"GET",timeout:5e3,jsonpCallback:"null",mode:"cors"}).then(function(e){return e.json()}).then(function(e){console.log("parsed json",e)})["catch"](function(e){console.log("parsing failed",e)});var n=this;y.Tool.fetch(this,{url:""+E["default"].CITYTHREE,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:1,city:"",country:"",xz:""})}})}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var n=this;y.Tool.fetch(this,{url:""+E["default"].COUNTRYTHREE+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:2,country:"",xz:""})}})}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var n=this;y.Tool.fetch(this,{url:""+E["default"].XZTHREE+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:3,xz:""})}})}},{key:"selectItem",value:function(e){0==e.status?(this.refs.city.innerText=e.name,this.setState({city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0)):1==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):2==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return c["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},c["default"].createElement("header",null,"所在地区",c["default"].createElement("span",{onClick:this.props.close},"+")),c["default"].createElement("div",{className:"select-value"},c["default"].createElement("span",{style:{color:"#ff6600",marginRight:"0"}},this.state.select),c["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),c["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),c["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),c["default"].createElement("div",{className:"select-scroll"},c["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,n){return c["default"].createElement(x,r({key:n,index:n,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(o.Component),t.Downloadapp=function(e){var t="http://m.jyall.com/download.html",n="myapp://m.jyall.app/openwith",a=document.getElementsByClassName("j-downAppBtn");a.length,document.body.addEventListener("click",function(e){if("j-downAppBtn"==e.target.className){if("MicroMessenger"==navigator.userAgent.match(/MicroMessenger/i))return;if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var a=new Date,s=document.createElement("a");s.href=t,document.body.appendChild(s);var i=document.createEvent("HTMLEvents");i.initEvent("click",!1,!0),window.setTimeout(function(){var e=new Date;e-a<5e3?(s.dispatchEvent(i),setTimeout(function(){},500)):window.close()},2e3),window.location=n}else if(navigator.userAgent.match(/android/i)){var r=null;try{r=document.createElement("iframe"),r.setAttribute("src",n),r.setAttribute("style","display:none"),document.body.appendChild(r)}catch(e){}setTimeout(function(){window.location=t},2e3)}}},!1)},function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"render",value:function(){var e=this.props.User&&this.props.User.loginname?"/user/"+this.props.User.loginname:"/signin",t=[];return t[this.props.index]="on",c["default"].createElement("footer",{className:"common-footer"},c["default"].createElement("div",{className:"zhanwei"}),c["default"].createElement("ul",{className:"menu","data-flex":"box:mean"},c["default"].createElement("li",{className:t[0]},c["default"].createElement(u.Link,{to:"/"},c["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),c["default"].createElement("li",{className:t[1]},c["default"].createElement(u.Link,{to:"/topic/create"},c["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),c["default"].createElement("li",{className:t[2]},c["default"].createElement(u.Link,{to:"/my/messages"},c["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),c["default"].createElement("li",{className:t[3]},c["default"].createElement(u.Link,{to:e},c["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(o.Component));k.defaultProps={index:0};var C=(0,d.connect)(function(e){return{User:e.User}},(0,p["default"])("User"))(k);t.Footer=C}).call(this)}finally{}},7:function(e,t,n){var a,s,i;!function(n,r){s=[t,e],a=r,i="function"==typeof a?a.apply(t,s):a,!(void 0!==i&&(e.exports=i))}(void 0,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function a(e){try{delete window[e]}catch(t){window[e]=void 0}}function s(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function i(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,l=t.timeout||r.timeout,o=t.jsonpCallback||r.jsonpCallback,c=void 0;return new Promise(function(r,u){var d=t.jsonpCallbackFunction||n(),f=o+"_"+d;window[d]=function(e){r({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),s(f),a(d)},i+=i.indexOf("?")===-1?"?":"&";var h=document.createElement("script");h.setAttribute("src",""+i+o+"="+d),h.id=f,document.getElementsByTagName("head")[0].appendChild(h),c=setTimeout(function(){u(new Error("JSONP request to "+e+" timed out")),a(d),s(f)},l)})}var r={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=i})},8:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){for(var t={},n=["signinSuccess","signin","setState"],a=function(a){t[n[a]]=function(t){return{_ID:e,target:t,type:n[a]}}},s=0;s<n.length;s++)a(s);return t}}).call(this)}finally{}},306:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".about-us{margin-top:-1.14rem;padding-top:.88rem;background:#fff;height:100%;text-align:justify}.about-us .title-icon{margin:auto;width:4rem;height:1.22rem;background:url("+n(372)+") no-repeat 50%;background-size:100%}.about-us .copyright,.about-us .version{margin:.34rem auto .6rem;color:#999;font-size:.28rem;text-align:center}.about-us .copyright{position:relative;top:3rem;bottom:1rem;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0)}.about-us .content{padding:0 15px;color:#333;font-size:.3rem;line-height:.52rem}.about-us .content p{text-indent:.6rem}",""])},318:function(e,t,n){var a=n(306);"string"==typeof a&&(a=[[e.id,a,""]]),n(19)(a,{}),a.locals&&(e.exports=a.locals)},346:function(e,t,n){(function(e){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),o=e(l);n(6),n(318);var c=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={version:""},document.title="关于我们",document.body.style.background="#fff",n}return i(t,e),r(t,[{key:"componentDidMount",value:function(){var e=location.href.split("?")[1],t=this;e=e?e.split("&"):[],e.forEach(function(e){"version"==e.split("=")[0]&&t.setState({version:"V"+e.split("=")[1]})})}},{key:"render",value:function(){return o["default"].createElement("div",{className:"about-us"},o["default"].createElement("div",{className:"title-icon"}),o["default"].createElement("div",{className:"version"},"家园网",this.state.version),o["default"].createElement("div",{className:"content"},o["default"].createElement("p",null,"金色家园网络科技有限公司于2015年1月23日在国家工商行政总局注册成立，为国家“中关村高新技术企业”。"),o["default"].createElement("p",null,"家园网（JYall.com）战略定位为：一站式家庭O2O服务平台，是运用互联网、移动互联技术，以“家”为入口，以家庭生活需求为核心，以房产、大家装、家政、汽车、旅行、医疗、金融、大数据、云服务等为主线的互联网O2O服务企业。")),o["default"].createElement("p",{className:"copyright"},"© 2017 家园网 版权所有"))}}]),t}(l.Component);t["default"]=c}).call(this)}finally{}}).call(t,n(15)(e))},372:function(e,t,n){e.exports=n.p+"logo_icon.png"}});