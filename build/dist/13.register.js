webpackJsonp([13],{8:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Downloadapp=t.AddressSelect=t.Header=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),c=e(l),u=n(11),d=n(10),f=n(9),p=e(f),h=n(3),m=n(4),y=e(m),v=n(6),E=t.Header=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={hClass:"h-screen",hPar:!1},n}return o(t,e),r(t,[{key:"classify",value:function(){this.state.hPar?this.setState({hClass:"h-screen",hPar:!1}):this.setState({hClass:"h-screen hs-icoUp",hPar:!0}),this.props.callbackParent(this.state.hPar)}},{key:"industry",value:function(e){if("LI"==e.target.parentNode.tagName){this.props.callback(e.target.parentNode.id);for(var t=0;t<this.refs.industry.childNodes.length;t++)this.refs.industry.childNodes[t].className=" ";this.refs.sHead.innerText=e.target.innerText,e.target.parentNode.className="active",this.setState({hClass:"h-screen",hPar:!1}),this.props.callbackParent(this.state.hPar)}}},{key:"goBack",value:function(){"center"==this.props.type?location.href="http://m.jyall.com/":this.context.router.goBack()}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftIcon,a=e.hadeScreen,s=void 0===a?"":a,o=(e.hClass,e.type,e.className),i=null,r=null;return"fanhui"===n&&(i=c["default"].createElement("a",{href:"javascript:;",onClick:this.goBack.bind(this)},c["default"].createElement("i",null))),"true"===s&&(r=c["default"].createElement("div",{className:"h-screen-warp"},c["default"].createElement("div",{className:this.state.hClass,ref:"hState",onClick:this.classify.bind(this)}),c["default"].createElement("div",{className:"h-s-list",style:{display:this.state.hPar?"block":"none"}},c["default"].createElement("ul",{className:"clearfix",onClick:this.industry.bind(this),ref:"industry"},c["default"].createElement("li",{id:"0",className:"active"},c["default"].createElement("span",null,"全部订单")),c["default"].createElement("li",{id:"1"},c["default"].createElement("span",null,"家居订单")),c["default"].createElement("li",{id:"2"},c["default"].createElement("span",null,"装修订单")),c["default"].createElement("li",{id:"4"},c["default"].createElement("span",null,"家电订单")),c["default"].createElement("li",{id:"3"},c["default"].createElement("span",null,"家具订单")),c["default"].createElement("li",{id:"5"},c["default"].createElement("span",null,"家政订单")),c["default"].createElement("li",{id:"6"},c["default"].createElement("span",null,"汽车订单")),c["default"].createElement("li",{id:"7"},c["default"].createElement("span",null,"旅行订单")))))),c["default"].createElement("header",{className:"common-header"},c["default"].createElement("div",{className:"left-arrow"},i),c["default"].createElement("h2",{className:o?"title "+o:"title"},c["default"].createElement("span",{ref:"sHead"},t),r))}}]),t}(l.Component);E.contextTypes={router:c["default"].PropTypes.object.isRequired};var b=c["default"].createClass({displayName:"AddressSelectList",render:function(){var e=this,t=this.props,n=t.index,a=t.id,s=t.name,o=t.status,i=t.selectIndex;return this.callback=function(){e.props.callback({index:n,name:s,id:a,status:o})},c["default"].createElement("li",{className:n==i?"select":"",onClick:this.callback.bind(this)},s)}}),g=(t.AddressSelect=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={list:[],status:0,index:0,select:"请选择",province:"",provinceId:"",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},n.getProvince(n,0),n}return o(t,e),r(t,[{key:"getProvince",value:function(e,t){0!=t&&(this.setState({index:0,status:0,select:"请选择",province:"",city:"",country:"",xz:""}),e=this),h.Tool.fetch(e,{url:y["default"].PROVINCE+"?containChilds=false",type:"get",headers:v.COMMON_HEADERS,successMethod:function(t){e.setState({list:t,status:0})}})}},{key:"getCity",value:function(e,t){0!=t&&(e=this.state.provinceId);var n=this;h.Tool.fetch(this,{url:""+y["default"].CITY+e,type:"get",headers:v.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:1,city:"",country:"",xz:""})}})}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var n=this;h.Tool.fetch(this,{url:""+y["default"].COUNTRY+e,type:"get",headers:v.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:2,country:"",xz:""})}})}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var n=this;h.Tool.fetch(this,{url:""+y["default"].XZ+e,type:"get",headers:v.COMMON_HEADERS,successMethod:function(e){n.setState({index:0,list:e,status:3,xz:""})}})}},{key:"selectItem",value:function(e){0==e.status?(this.refs.province.innerText=e.name,this.setState({province:e.name,provinceId:e.id,select:"",index:e.index}),this.getCity(e.id,0)):1==e.status?(this.refs.city.innerText=e.name,this.setState({city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0),console.log(this.state.provinceId)):2==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):3==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({provinceId:this.state.provinceId,province:this.state.province,cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return c["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},c["default"].createElement("header",null,"所在地区",c["default"].createElement("span",{onClick:this.props.close},"+")),c["default"].createElement("div",{className:"select-value"},c["default"].createElement("span",{style:{color:"#ff6600",marginRight:"0"}},this.state.select),c["default"].createElement("span",{ref:"province",onClick:this.getProvince.bind(this)},this.state.province),c["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),c["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),c["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),c["default"].createElement("div",{className:"select-scroll"},c["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,n){return c["default"].createElement(b,i({key:n,index:n,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(l.Component),t.Downloadapp=function(e){var t="http://m.jyall.com/download.html",n="myapp://m.jyall.app/openwith",a=document.getElementsByClassName("j-downAppBtn");a.length,document.body.addEventListener("click",function(e){if("j-downAppBtn"==e.target.className){if("MicroMessenger"==navigator.userAgent.match(/MicroMessenger/i))return;if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var a=new Date,s=document.createElement("a");s.href=t,document.body.appendChild(s);var o=document.createEvent("HTMLEvents");o.initEvent("click",!1,!0),window.setTimeout(function(){var e=new Date;e-a<5e3?(s.dispatchEvent(o),setTimeout(function(){},500)):window.close()},2e3),window.location=n}else if(navigator.userAgent.match(/android/i)){var i=null;try{i=document.createElement("iframe"),i.setAttribute("src",n),i.setAttribute("style","display:none"),document.body.appendChild(i)}catch(e){}setTimeout(function(){window.location=t},2e3)}}},!1)},function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),r(t,[{key:"render",value:function(){var e=this.props.User&&this.props.User.loginname?"/user/"+this.props.User.loginname:"/signin",t=[];return t[this.props.index]="on",c["default"].createElement("footer",{className:"common-footer"},c["default"].createElement("div",{className:"zhanwei"}),c["default"].createElement("ul",{className:"menu","data-flex":"box:mean"},c["default"].createElement("li",{className:t[0]},c["default"].createElement(u.Link,{to:"/"},c["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),c["default"].createElement("li",{className:t[1]},c["default"].createElement(u.Link,{to:"/topic/create"},c["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),c["default"].createElement("li",{className:t[2]},c["default"].createElement(u.Link,{to:"/my/messages"},c["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),c["default"].createElement("li",{className:t[3]},c["default"].createElement(u.Link,{to:e},c["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(l.Component));g.defaultProps={index:0};var C=(0,d.connect)(function(e){return{User:e.User}},(0,p["default"])("User"))(g);t.Footer=C}).call(this)}finally{}},9:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){console.log(e),console.log(0x650e124ef1c7);for(var t={},n=["signinSuccess","signin","setState"],a=function(a){t[n[a]]=function(t){return{_ID:e,target:t,type:n[a]}}},s=0;s<n.length;s++)a(s);return t}}).call(this)}finally{}},12:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.AjaxTip=t.Confirm=t.Toast=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(1),l=e(r);t.Toast=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.content,n=e.display;return"toasts"==n&&(n="toast "+n),l["default"].createElement("div",{className:n,ref:"toast"},l["default"].createElement("div",{className:"toast-out"},l["default"].createElement("div",{className:"toast-in"},t)))}},{key:"componentDidMount",value:function(){var e=this;this.refs.toast.addEventListener("webkitAnimationEnd",function(){e.props.callback("toast")},!1)}}]),t}(r.Component),t.Confirm=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"componentDidUpdate",value:function(){this.refs.content.innerHTML=this.props.content}},{key:"render",value:function(){var e=this.props,t=e.title,n=(e.content,e.leftText),a=e.rightText,s=e.display,o=e.leftMethod,i=e.rightMethod,r=e.rightClass,c=void 0===r?"":r;return l["default"].createElement("div",{className:"confirm",ref:"confirm",style:{display:s}},l["default"].createElement("header",null,t),l["default"].createElement("div",{className:"content",ref:"content"}),l["default"].createElement("div",{className:"button"},l["default"].createElement("span",{onClick:o},n),a?l["default"].createElement("span",{onClick:i,className:c},a):""))}}]),t}(r.Component),t.AjaxTip=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),i(t,[{key:"render",value:function(){var e=this.props.display;return l["default"].createElement("div",{className:"loadEffect",id:"loadEffect",ref:"load",style:{display:e}},l["default"].createElement("span",null),l["default"].createElement("span",null),l["default"].createElement("span",null),l["default"].createElement("span",null),l["default"].createElement("span",null),l["default"].createElement("span",null),l["default"].createElement("span",null),l["default"].createElement("span",null))}}]),t}(r.Component)}).call(this)}finally{}},104:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.findPwdByMobile=t.register=t.login=void 0;var e=n(22);t.login=function(t){return t.type=e.LOGIN,t},t.register=function(t){return{type:e.REGISTER,register:t}},t.findPwdByMobile=function(t){return{type:e.FINDPWDBYMOBILE,findPwd:t}}}).call(this)}finally{}},345:function(e,t,n){(function(e){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t){return e}function r(e){return{register:function(t){return e((0,h.register)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),d=e(u),f=n(11),p=n(10),h=n(104),m=n(8),y=n(4),v=e(y),E=n(6),b=n(12),g=n(3),C=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return console.log(e),n.state={button:"下一步",tipContent:"",display:"",protocol:!0,protocolClass:"",codeText:"获取验证码",codeControl:!0,title:"注册",protocolDisplay:"block"},n.validate=function(){if(!n.state.protocol)return void n.setState({tipContent:"请同意协议",display:"toasts"});var e=n.refs.phone.value,t=n.refs.num.value,a=n;if(!/^[1][3-9][0-9]{9,9}$/.test(e))return void n.setState({tipContent:"请输入正确的手机号",display:"toasts"});if(!t)return void n.setState({tipContent:"验证码不能为空",display:"toasts"});var s=(0,E.COMMON_HEADERS)();g.Tool.fetch(n,{url:v["default"].Vcode+e+"/"+t,type:"get",headers:s,successMethod:function(t){t.uuid?(a.props.register({uuid:t.uuid,phone:e}),clearInterval(a.inte),g.Tool.history.push("/registerpd")):a.setState({tipContent:t.message,display:"toasts"})}})},n}return o(t,e),c(t,[{key:"readProtocol",value:function(){this.state.protocol?this.setState({protocol:!1,protocolClass:"no-pro"}):this.setState({protocol:!0,protocolClass:""})}},{key:"toastDisplay",value:function(e){this.setState({display:e})}},{key:"getRandomCode",value:function(){if(this.state.codeControl){if(!/^[1][3-9][0-9]{9,9}$/.test(this.refs.phone.value))return void this.setState({tipContent:"请输入正确的手机号",display:"toasts"});var e=this,t=(0,E.COMMON_HEADERS)();"findpwd"!=this.props.login.pwd?g.Tool.fetch(this,{url:v["default"].CHECKMOBILE+this.refs.phone.value+"/1",type:"get",headers:t,successMethod:function(n){return n?void e.setState({tipContent:"用户已注册",display:"toasts"}):(e.setState({codeControl:!1}),void g.Tool.fetch(e,{url:v["default"].Vcode+e.refs.phone.value,type:"get",headers:t,successMethod:function(t){if(console.log("undefined"==typeof t?"undefined":l(t)),"object"==("undefined"==typeof t?"undefined":l(t)))return void e.setState({tipContent:t.message,display:"toasts"});e.setState({tipContent:"验证码已发送",display:"toasts"});var n=60;e.inte=setInterval(function(){e.setState({codeText:"重新发送（"+n+"s）"}),n--,0==n&&(e.setState({codeText:"重新发送",codeControl:!0}),clearInterval(e.inte))},1e3)}}))}}):g.Tool.fetch(this,{url:v["default"].Vcode+this.refs.phone.value,type:"get",headers:t,successMethod:function(t){if(console.log("undefined"==typeof t?"undefined":l(t)),"object"==("undefined"==typeof t?"undefined":l(t)))return void e.setState({tipContent:t.message,display:"toasts"});e.setState({tipContent:"验证码已发送",display:"toasts"});var n=60;e.inte=setInterval(function(){e.setState({codeText:"重新发送（"+n+"s）"}),n--,0==n&&(e.setState({codeText:"重新发送",codeControl:!0}),clearInterval(e.inte))},1e3)}})}}},{key:"componentDidMount",value:function(){"findpwd"==this.props.login.pwd&&(this.setState({title:"找回密码"}),this.setState({protocolDisplay:"none"}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.inte)}},{key:"render",value:function(){return d["default"].createElement("div",null,d["default"].createElement(m.Header,{title:this.state.title,leftIcon:"fanhui"}),d["default"].createElement("div",{className:"signin"},d["default"].createElement("div",{className:"center"},d["default"].createElement("div",{className:"text"},d["default"].createElement("input",{ref:"phone",type:"text",placeholder:"请输入手机号",className:"phone"}),d["default"].createElement("input",{ref:"num",type:"num",placeholder:"请输入验证码",className:"code"}),d["default"].createElement("span",{onClick:this.getRandomCode.bind(this),ref:"codeText",style:{lineHeight:".5rem",top:"1.1rem"}},this.state.codeText)),d["default"].createElement("div",{className:"protocol",style:{display:this.state.protocolDisplay}},d["default"].createElement("span",{onClick:this.readProtocol.bind(this),className:this.state.protocolClass}),"我已经阅读并同意遵守",d["default"].createElement(f.Link,{to:"/registerpro",style:{color:"#45b3fc"}},"《家园用户服务协议》")),d["default"].createElement("button",{className:"btn",onClick:this.validate.bind(this)},this.state.button))),d["default"].createElement(b.Toast,{content:this.state.tipContent,display:this.state.display,callback:this.toastDisplay.bind(this)}))}}]),t}(u.Component);t["default"]=(0,p.connect)(i,r)(C)}).call(this)}finally{}}).call(t,n(15)(e))}});