webpackJsonp([12],{6:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Downloadapp=t.AddressSelectThree=t.AddressSelect=t.Header=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),c=e(o),u=n(13),d=n(10),f=n(7),p=(e(f),n(8)),m=e(p),h=n(2),y=n(3),E=e(y),g=n(4),v=t.Header=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hClass:"h-screen",hPar:!1},n}return s(t,e),r(t,[{key:"classify",value:function(){this.state.hPar?this.setState({hClass:"h-screen",hPar:!1}):this.setState({hClass:"h-screen hs-icoUp",hPar:!0}),this.props.callbackParent(this.state.hPar)}},{key:"industry",value:function(e){if("LI"==e.target.parentNode.tagName){this.props.callback(e.target.parentNode.id);for(var t=0;t<this.refs.industry.childNodes.length;t++)this.refs.industry.childNodes[t].className=" ";this.refs.sHead.innerText=e.target.innerText,e.target.parentNode.className="active",this.setState({hClass:"h-screen",hPar:!1}),this.props.callbackParent(this.state.hPar)}}},{key:"goBack",value:function(){"center"==this.props.type?location.href="http://m.jyall.com/":this.context.router.goBack()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftIcon,a=e.hadeScreen,i=void 0===a?"":a,s=e.hasRight,l=void 0===s?"":s,r=(e.hClass,e.type,e.className),o=null,u=null,d=null;return"fanhui"===n&&(o=c["default"].createElement("a",{href:"javascript:;",onClick:this.goBack.bind(this)},c["default"].createElement("i",null))),l&&(d=c["default"].createElement("a",{href:"//m.jyall.com/app/popup/jycoupon.html"},c["default"].createElement("span",{className:"coupon-intro"},"使用说明"))),"true"===i&&(u=c["default"].createElement("div",{className:"h-screen-warp"},c["default"].createElement("div",{className:this.state.hClass,ref:"hState",onClick:this.classify.bind(this)}),c["default"].createElement("div",{className:"h-s-list",style:{display:this.state.hPar?"block":"none"}},c["default"].createElement("ul",{className:"clearfix",onClick:this.industry.bind(this),ref:"industry"},c["default"].createElement("li",{id:"0",className:"active"},c["default"].createElement("span",null,"全部订单")),c["default"].createElement("li",{id:"1"},c["default"].createElement("span",null,"房产订单")),c["default"].createElement("li",{id:"2"},c["default"].createElement("span",null,"装修订单")),c["default"].createElement("li",{id:"4"},c["default"].createElement("span",null,"家电订单")),c["default"].createElement("li",{id:"3"},c["default"].createElement("span",null,"家具订单")),c["default"].createElement("li",{id:"5"},c["default"].createElement("span",null,"家政订单")),c["default"].createElement("li",{id:"6"},c["default"].createElement("span",null,"汽车订单")),c["default"].createElement("li",{id:"7"},c["default"].createElement("span",null,"旅行订单")))))),c["default"].createElement("header",{className:"common-header"},c["default"].createElement("div",{className:"left-arrow"},o),c["default"].createElement("h2",{className:r?"title "+r:"title"},c["default"].createElement("span",{ref:"sHead"},t),u,d))}}]),t}(o.Component);v.contextTypes={router:c["default"].PropTypes.object.isRequired};var b=c["default"].createClass({displayName:"AddressSelectList",render:function(){var e=this,t=this.props,n=t.index,a=t.id,i=t.name,s=t.status,l=t.selectIndex;return this.callback=function(){e.props.callback({index:n,name:i,id:a,status:s})},c["default"].createElement("li",{className:n==l?"select":"",onClick:this.callback.bind(this)},i)}}),k=(t.AddressSelect=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],status:0,index:0,select:"请选择",province:"",provinceId:"",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},n.getProvince(n,0),n}return s(t,e),r(t,[{key:"getProvince",value:function(e,t){0!=t&&(this.setState({index:0,status:0,select:"请选择",province:"",city:"",country:"",xz:""}),e=this),h.Tool.fetch(e,{url:E["default"].PROVINCE+"?containChilds=false",type:"get",headers:g.COMMON_HEADERS,successMethod:function(t){e.setState({list:t,status:0})}})}},{key:"getCity",value:function(e,t){0!=t&&(e=this.state.provinceId);var n=this;h.Tool.fetch(this,{url:""+E["default"].CITY+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:1,city:"",country:"",xz:""})}})}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var n=this;h.Tool.fetch(this,{url:""+E["default"].COUNTRY+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:2,country:"",xz:""})}})}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var n=this;h.Tool.fetch(this,{url:""+E["default"].XZ+e,type:"get",headers:g.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:3,xz:""})}})}},{key:"selectItem",value:function(e){0==e.status?(this.refs.province.innerText=e.name,this.setState({province:e.name,provinceId:e.id,select:"",index:e.index}),this.getCity(e.id,0)):1==e.status?(this.refs.city.innerText=e.name,this.setState({city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0)):2==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):3==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({provinceId:this.state.provinceId,province:this.state.province,cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return c["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},c["default"].createElement("header",null,"所在地区",c["default"].createElement("span",{onClick:this.props.close},"+")),c["default"].createElement("div",{className:"select-value"},c["default"].createElement("span",{style:{color:"#ff6600",marginRight:"0"}},this.state.select),c["default"].createElement("span",{ref:"province",onClick:this.getProvince.bind(this)},this.state.province),c["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),c["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),c["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),c["default"].createElement("div",{className:"select-scroll"},c["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,n){return c["default"].createElement(b,l({key:n,index:n,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(o.Component),c["default"].createClass({displayName:"AddressSelectListThree",render:function(){var e=this,t=this.props,n=t.index,a=t.id,i=t.name,s=t.status,l=t.selectIndex,r=t.cityId,o=t.cityName;return void 0==a&&(a=r),void 0==i&&(i=o),this.callback=function(){e.props.callback({index:n,name:i,id:a,status:s})},c["default"].createElement("li",{className:n==l?"select":"",onClick:this.callback.bind(this)},i)}})),A=(t.AddressSelectThree=function(e){function t(e){a(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],status:0,index:0,select:"请选择",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},n.getCity(n,0),n}return s(t,e),r(t,[{key:"getCity",value:function(e,t){0!=t&&this.setState({index:0,status:0,select:"请选择",province:"",city:"",country:"",xz:""});var n=this,a=document.createElement("script");a.type="text/javascript",a.src=E["default"].CITYTHREE+"?callback=callbackgetCity",document.getElementsByTagName("head")[0].appendChild(a),window.callbackgetCity=function(e){n.setState({list:e.resultList,status:0})}}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var n=this,a=document.createElement("script");a.type="text/javascript",a.src=""+E["default"].COUNTRYTHREE+e+"?callback=callbackgetCountry",document.getElementsByTagName("head")[0].appendChild(a),window.callbackgetCountry=function(e){n.setState({index:0,list:e.countries,status:1,country:"",xz:""})}}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var n=this,a=document.createElement("script");a.type="text/javascript",a.src=""+E["default"].XZTHREE+e+"?callback=callbackgetXz",document.getElementsByTagName("head")[0].appendChild(a),window.callbackgetXz=function(e){n.setState({index:0,list:e.towns,status:2,xz:""})}}},{key:"selectItem",value:function(e){console.log(e),0==e.status?(this.refs.city.innerText=e.name,this.setState({select:"",city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0),console.log(this.state.city)):1==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):2==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({provinceId:"",province:"",cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return c["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},c["default"].createElement("header",null,"所在地区",c["default"].createElement("span",{onClick:this.props.close},"+")),c["default"].createElement("div",{className:"select-value"},c["default"].createElement("span",{style:{color:"#ff6600",marginRight:"0"}},this.state.select),c["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),c["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),c["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),c["default"].createElement("div",{className:"select-scroll"},c["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,n){return c["default"].createElement(k,l({key:n,index:n,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(o.Component),t.Downloadapp=function(e){var t="http://m.jyall.com/download.html",n="myapp://m.jyall.app/openwith",a=document.getElementsByClassName("j-downAppBtn");a.length,document.body.addEventListener("click",function(e){if("j-downAppBtn"==e.target.className){if("MicroMessenger"==navigator.userAgent.match(/MicroMessenger/i))return;if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var a=new Date,i=document.createElement("a");i.href=t,document.body.appendChild(i);var s=document.createEvent("HTMLEvents");s.initEvent("click",!1,!0),window.setTimeout(function(){var e=new Date;e-a<5e3?(i.dispatchEvent(s),setTimeout(function(){},500)):window.close()},2e3),window.location=n}else if(navigator.userAgent.match(/android/i)){var l=null;try{l=document.createElement("iframe"),l.setAttribute("src",n),l.setAttribute("style","display:none"),document.body.appendChild(l)}catch(e){}setTimeout(function(){window.location=t},2e3)}}},!1)},function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),r(t,[{key:"render",value:function(){var e=this.props.User&&this.props.User.loginname?"/user/"+this.props.User.loginname:"/signin",t=[];return t[this.props.index]="on",c["default"].createElement("footer",{className:"common-footer"},c["default"].createElement("div",{className:"zhanwei"}),c["default"].createElement("ul",{className:"menu","data-flex":"box:mean"},c["default"].createElement("li",{className:t[0]},c["default"].createElement(u.Link,{to:"/"},c["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),c["default"].createElement("li",{className:t[1]},c["default"].createElement(u.Link,{to:"/topic/create"},c["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),c["default"].createElement("li",{className:t[2]},c["default"].createElement(u.Link,{to:"/my/messages"},c["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),c["default"].createElement("li",{className:t[3]},c["default"].createElement(u.Link,{to:e},c["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(o.Component));A.defaultProps={index:0};var N=(0,d.connect)(function(e){return{User:e.User}},(0,m["default"])("User"))(A);t.Footer=N}).call(this)}finally{}},7:function(e,t,n){var a,i,s;!function(n,l){i=[t,e],a=l,s="function"==typeof a?a.apply(t,i):a,!(void 0!==s&&(e.exports=s))}(void 0,function(e,t){"use strict";function n(){return"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random())}function a(e){try{delete window[e]}catch(t){window[e]=void 0}}function i(e){var t=document.getElementById(e);document.getElementsByTagName("head")[0].removeChild(t)}function s(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],s=e,r=t.timeout||l.timeout,o=t.jsonpCallback||l.jsonpCallback,c=void 0;return new Promise(function(l,u){var d=t.jsonpCallbackFunction||n(),f=o+"_"+d;window[d]=function(e){l({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),i(f),a(d)},s+=s.indexOf("?")===-1?"?":"&";var p=document.createElement("script");p.setAttribute("src",""+s+o+"="+d),p.id=f,document.getElementsByTagName("head")[0].appendChild(p),c=setTimeout(function(){u(new Error("JSONP request to "+e+" timed out")),a(d),i(f)},r)})}var l={timeout:5e3,jsonpCallback:"callback",jsonpCallbackFunction:null};t.exports=s})},8:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){for(var t={},n=["signinSuccess","signin","setState"],a=function(a){t[n[a]]=function(t){return{_ID:e,target:t,type:n[a]}}},i=0;i<n.length;i++)a(i);return t}}).call(this)}finally{}},12:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxTip=t.Confirm=t.Toast=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),o=e(r);t.Toast=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){var e=this.props,t=e.content,n=e.display;return"toasts"==n&&(n="toast "+n),o["default"].createElement("div",{className:n,ref:"toast"},o["default"].createElement("div",{className:"toast-out"},o["default"].createElement("div",{className:"toast-in"},t)))}},{key:"componentDidMount",value:function(){var e=this;this.refs.toast.addEventListener("webkitAnimationEnd",function(){e.props.callback("toast")},!1)}}]),t}(r.Component),t.Confirm=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"componentDidUpdate",value:function(){this.refs.content.innerHTML=this.props.content}},{key:"render",value:function(){var e=this.props,t=e.title,n=(e.content,e.leftText),a=e.rightText,i=e.display,s=e.leftMethod,l=e.rightMethod,r=e.rightClass,c=void 0===r?"":r;return o["default"].createElement("div",{className:"confirm",ref:"confirm",style:{display:i}},o["default"].createElement("header",null,t),o["default"].createElement("div",{className:"content",ref:"content"}),o["default"].createElement("div",{className:"button"},o["default"].createElement("span",{onClick:s},n),a?o["default"].createElement("span",{onClick:l,className:c},a):""))}}]),t}(r.Component),t.AjaxTip=function(e){function t(){return a(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),l(t,[{key:"render",value:function(){var e=this.props.display;return o["default"].createElement("div",{className:"loadEffect",id:"loadEffect",ref:"load",style:{display:e}},o["default"].createElement("span",null),o["default"].createElement("span",null),o["default"].createElement("span",null),o["default"].createElement("span",null),o["default"].createElement("span",null),o["default"].createElement("span",null),o["default"].createElement("span",null),o["default"].createElement("span",null))}}]),t}(r.Component)}).call(this)}finally{}},110:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findPwdByMobile=t.register=t.login=void 0;var e=n(23);t.login=function(t){return t.type=e.LOGIN,t},t.register=function(t){return{type:e.REGISTER,register:t}},t.findPwdByMobile=function(t){return{type:e.FINDPWDBYMOBILE,findPwd:t}}}).call(this)}finally{}},175:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAbCAYAAAD77kbeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Y1RENENjM3MEVBMTFFNkJFNjFBOTU1QkM1MjBCOUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Y1RENENjQ3MEVBMTFFNkJFNjFBOTU1QkM1MjBCOUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEMwRDcxMDcwRUExMUU2QkU2MUE5NTVCQzUyMEI5RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRjVEQ0Q2MjcwRUExMUU2QkU2MUE5NTVCQzUyMEI5RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoyE9fgAAAOLSURBVHjarJd7aM1hGMfPBXNZKC2myOUPc2LkEqKzLbdaDnMbMbfmsuO2CI1chggLy1wauUzKhOP2B5IJG7kkzVwzm5Flm9lcVmbG96nvr07rnN/7nuM89emcznl/z+95n/e5vdbs7GxLgBIGYkAcGAx6gI6gNfgNqkApeArywTVQHcgLmgWwtitIAfNBBH97Rx6Ab/wtgobKOjf4Bc6BA+B+qIxqC7aAJVx/GxyjBypMnhPPOcE0MBnMBDfBYvDG7IU2hUHjwEuwDJwBfUAsOKkwSKSOhs+jlzeCIeAZv9uCMWo1uAS+gxEgCTy3BCc1YCvoBa6CzeAiCNc1ygqOgF3AAwbpxoKGfAIJYCWIB3e94tPUqP0M0iyQCH5YQi97qdsBrjNu/RrlZiBKnUgFfxXKh4EL4AvXVjL2BmgY5mHw92eMWo0/7C6Xy/geDc6De2A6aFQoXQ9OgS7MqhssC/EsHbUsFWbygptJYX176F0SxGNHWfzmggaFslQGrnhpIRUaEgmOg0wadkKhaxs3shNcBmXG8c1iQKeBEoUSeel2kAemNjFIpByMB48YO+0V+v7QEWJLhuEh8dYmUAQOacRCEgtjKhX6knpmmBg0RUPnK1Z82WS0GDUBdOdxNGooiGEsFCnW5dNrcZoZmcHwWWoYVc/z1JHOcu6aa0u5Xkc+cyMJNhrTgnGgIz/9VWIfEs6OoCNSRIdLF7Gx3JcwxW0aD0vvGgjaaLzEEUBrWkPnZNmY/hJPfcECjYfPglZguWKd9E4716skSmKJdbLQ8EwOeMxg66ZQcIvdP531xZckMvukuj9R6LNzFJIkW+XdZuSHZLovh59mMhsUgyvgMDOsJxjFlpHLyXORhpfWsV3J5/umva+Qu3PScquJokqOM7ncjBTSt2w1M/h8LCu6mUyix2VE2udv8jzIQc7NSr3CpClXs6GmsXZJ6n/k8ZZreEhK0Wkmzhzv9/gahyXgWrJiR3JyrDNR/oGNORAR3bs51Y5u6lFfJcCIrx0s+5IAQ0M0R3ViE8/krO9kKGiNw+LKtWAi+1cBO78jSGPagQ3gNTNWLiJjwddgLg4SgL3ZLJPY7/I4VUQonpUQGMOBsYyGiNf7cQBo+J8rVi0L5R6meDLT3sKyUMykqKG+DmzwUoyb897n4cYKQn0ZLeWRpjPbRnIGi+INOYzxWEHPyHHf4QxeFchZ/xNgAAmT29KSNEgjAAAAAElFTkSuQmCC"},353:function(e,t,n){(function(e){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e,t){return{login:e.login}}function r(e){return{loginAction:function(t){return e((0,h.login)(t))},findPwdByMobile:function(t){return e((0,h.findPwdByMobile)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=e(c),d=n(13),f=n(10),p=n(16),m=e(p),h=n(110),y=n(2),E=n(6),g=n(3),v=e(g),b=n(4),k=n(36),A=n(12),N=function(e){function t(e){a(this,t);var s=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));s.state={button:"登录",tipContent:"",display:"",hiddenImg:n(175)},s.signin=function(){var e=s.refs.phone.value,t=s.refs.password.value,n=s.refs.code,a="app",i=s;if(!/^[1][3-9][0-9]{9,9}$/.test(e))return void s.setState({tipContent:"请输入正确的手机号码",display:"toasts"});if(!t)return void s.setState({tipContent:"密码不能为空",display:"toasts"});if("block"==n.style.display&&!n.value)return void s.setState({tipContent:"验证码不能为空",display:"toasts"});s.setState({button:"登录中..."});var l=(0,b.COMMON_HEADERS_POST)();y.Tool.fetch(s,{url:v["default"].LOGIN+"?userName="+e+"&passWord="+t+"&source="+a+"&code="+n.value+"&uuid="+s.random+"&_r="+(new Date).getTime(),type:"post",headers:l,successMethod:function(e){if(i.setState({button:"登录"}),e.responseHeader){var t={expires:new Date("2100-01-01"),path:"/",domain:k.ONLINE?"jyall.com":""};i.props.loginAction(e.responseBody),m["default"].remove("tokenid",t),m["default"].remove("userId",t),m["default"].remove("name",t),m["default"].remove("photo",t),m["default"].save("tokenid",e.responseBody.tokenid,t),m["default"].save("name",e.responseBody.name,t),m["default"].save("userId",e.responseBody.userId,t),m["default"].save("photo",e.responseBody.photo,t),setTimeout(function(){if("http://m.jyall.com/"==document.referrer){if("hash"==i.loginParams)return void i.context.router.goBack();location.href="http://m.jyall.com/"}else i.context.router.goBack()},500)}else 400001039==e.code?(i.getRondom(i),i.setState({tipContent:e.message,display:"toasts"}),i.refs.code.style.display="block",i.refs.img.style.display="inline"):i.setState({tipContent:e.message,display:"toasts"})}})};var l=location.href.split("?")[1],r=s;return l=l?l.split("&"):[],l.forEach(function(e){"login"==e.split("=")[0]&&(r.loginParams=e.split("=")[1])}),s}return s(t,e),o(t,[{key:"toastDisplay",value:function(e){this.setState({display:e})}},{key:"getRondom",value:function(e){e.random=Math.random(),e.refs.img.getElementsByTagName("img")[0].src=v["default"].LOGINRANDOMIMAGE+"?uuid="+e.random}},{key:"passwordPaste",value:function(e){this.paste=!0}},{key:"passwordInput",value:function(e){this.paste&&(e.target.value="",this.paste=!1)}},{key:"findPdByPhone",value:function(){this.props.findPwdByMobile("findpwd"),y.Tool.history.push("/register")}},{key:"passwordHidden",value:function(e){"password"==this.refs.password.type?(this.setState({hiddenImg:n(373)}),this.refs.password.type="text"):(this.setState({hiddenImg:n(175)}),this.refs.password.type="password")}},{key:"componentDidMount",value:function(){this.props.findPwdByMobile("")}},{key:"render",value:function(){return u["default"].createElement("div",null,u["default"].createElement(E.Header,{title:"登录",leftIcon:"fanhui"}),u["default"].createElement("div",{className:"signin"},u["default"].createElement("div",{className:"center"},u["default"].createElement("div",{className:"text"},u["default"].createElement("input",{ref:"phone",type:"number",className:"phone",placeholder:"请输入手机号"}),u["default"].createElement("input",{ref:"password",type:"password",placeholder:"请输入密码",onPaste:this.passwordPaste.bind(this),onInput:this.passwordInput.bind(this)}),u["default"].createElement("input",{ref:"code",type:"number",className:"code",placeholder:"请输入验证码",style:{borderTop:"1px solid #e6e6e6",display:"none"}}),u["default"].createElement("span",{style:{display:"block",height:".36rem",top:"1.16rem"},onClick:this.passwordHidden.bind(this)},u["default"].createElement("img",{src:this.state.hiddenImg,style:{height:"70%"}})),u["default"].createElement("span",{style:{display:"none",height:".36rem",top:"2.1rem"},ref:"img"},u["default"].createElement("img",{src:""}))),u["default"].createElement("button",{className:"btn",onClick:this.signin.bind(this)},this.state.button),u["default"].createElement("div",{style:{marginTop:"10px"}},u["default"].createElement(d.Link,{to:"/register",style:{color:"#666"}},u["default"].createElement("span",{className:"fl"},"注册")),u["default"].createElement("span",{className:"fr",style:{color:"#666"},onClick:this.findPdByPhone.bind(this)},"找回密码")))),u["default"].createElement(A.Toast,{content:this.state.tipContent,display:this.state.display,callback:this.toastDisplay.bind(this)}))}}]),t}(c.Component);N.contextTypes={router:u["default"].PropTypes.object.isRequired},t["default"]=(0,f.connect)(l,r)(N)}).call(this)}finally{}}).call(t,n(15)(e))},373:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAbCAYAAAD77kbeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0Y1RENENkI3MEVBMTFFNkJFNjFBOTU1QkM1MjBCOUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0Y1RENENkM3MEVBMTFFNkJFNjFBOTU1QkM1MjBCOUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRjVEQ0Q2OTcwRUExMUU2QkU2MUE5NTVCQzUyMEI5RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRjVEQ0Q2QTcwRUExMUU2QkU2MUE5NTVCQzUyMEI5RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhMYFBIAAANLSURBVHjarJd5iMxhGMdnd4RWxFpZR1PY2k1iZd3LkhyZIqEcU5awu46QI4al3HfhDzus20b4w9EKsQhplZzlPhLrHLZtjexY4/voOxpj5vd7fmOe+vwxzft73+d93+f4vgkej8dm0ZqAQaAvyARtQFNQF/jAB/AM3AQXwGXw3coCdSyM7QamgTGgHvgBHoByOiJmB6kgAwwAC8AnsBtsBy/j5VQa2AaGgK/gEDgKLvFkolkzMBiMBfOIOLYEVBotmGjwn+x6MbgLcsBK4AATwWkTh8Q+goPACdLBPlDA0x0Zi1MNQSkdkZjoCArBZ1ts9hRMAj2BFxwD60GC1qlkcBEMBAvBUE4aD7vB2JQQmA/280YMYyqJVyNZNR4ctrCg7DqgGOfj3BVgLqjmtUY8KZl0L3cyQeGQjHeBK0wAP3gONoIUk28DIYGfD+ZEcyoPjAbLQYnJpHKix8EBkM3fdtYs2f1D0EdxajPBWbAWdAl3qhUD7xpYoZhMTnSYwf9STM+ADibz1PJWpEQUB+Mr6NRqUB9M4UAjc/JEbYrT3KwY956nm8kM/e1UOgPPwxpiZgUWgl8yuL1iXAnb0lJpV+LUDAbeGuVC/S2WgRzFmADDpjUYJU6NYP+qUHzciNdixVoqx5WyXAxPZBZ1BS0UH35T1qJQq1aOc3LDJxPZbCXq3YoP/cq4C7VbysIrjfq1NHtx6hEDLY+Sw8yOWHDoHXunmY0DWWAVqAmWBDeF2M5IvSjMtoC3SqeWKQRec7AJ3Gat+lOn3lCQZSuKZyWlR5XJOFlgh8kYOwuxqNnJFI5/tZkiSopFilp0HfRm1obbFzAbTFWc5FaKRzfr1D8qIcCS72Dwe03i5z7oATqB7qABeAzKmKVmgb2O8rqY1xdVuviYmueoeRz8wKgM3CFaS2L3cHGNfI3IE6HfD5wHG1jU2sVJ5GVR6LnYF12Rem00OVxFxVnItnKPkqZxjM60BbsYgyls6NKEf1p9ONRSo4s+v0oHX4E9fPeZtZtkvmROMdZymY0ZTKj/emI9oRMSzNO5UC6ruwT7C165n+/BVCqPNAa0l1dVRGUa18doOZnFNJYXcmfQi288qTk1rOLyQj7BTCyz+kL+JcAAIrPCZEgp7voAAAAASUVORK5CYII="}});