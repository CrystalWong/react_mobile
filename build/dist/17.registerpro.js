webpackJsonp([17],{6:function(e,t,l){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.Footer=t.Downloadapp=t.AddressSelect=t.Header=void 0;var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},c=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),i=l(1),s=e(i),o=l(12),d=l(9),f=l(7),m=e(f),p=l(2),h=l(3),E=e(h),y=l(4),v=t.Header=function(e){function t(e){n(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={hClass:"h-screen",hPar:!1},l}return r(t,e),c(t,[{key:"classify",value:function(){this.state.hPar?this.setState({hClass:"h-screen",hPar:!1}):this.setState({hClass:"h-screen hs-icoUp",hPar:!0}),this.props.callbackParent(this.state.hPar)}},{key:"industry",value:function(e){if("LI"==e.target.parentNode.tagName){this.props.callback(e.target.parentNode.id);for(var t=0;t<this.refs.industry.childNodes.length;t++)this.refs.industry.childNodes[t].className=" ";this.refs.sHead.innerText=e.target.innerText,e.target.parentNode.className="active",this.setState({hClass:"h-screen",hPar:!1}),this.props.callbackParent(this.state.hPar)}}},{key:"goBack",value:function(){"center"==this.props.type?location.href="http://m.jyall.com/":this.context.router.goBack()}},{key:"render",value:function(){var e=this.props,t=e.title,l=e.leftIcon,n=e.hadeScreen,a=void 0===n?"":n,r=e.hasRight,u=void 0===r?"":r,c=(e.hClass,e.type,e.className),i=null,o=null,d=null;return"fanhui"===l&&(i=s["default"].createElement("a",{href:"javascript:;",onClick:this.goBack.bind(this)},s["default"].createElement("i",null))),u&&(d=s["default"].createElement("a",{href:"//m.jyall.com/app/popup/jycoupon.html"},s["default"].createElement("span",{className:"coupon-intro"},"使用说明"))),"true"===a&&(o=s["default"].createElement("div",{className:"h-screen-warp"},s["default"].createElement("div",{className:this.state.hClass,ref:"hState",onClick:this.classify.bind(this)}),s["default"].createElement("div",{className:"h-s-list",style:{display:this.state.hPar?"block":"none"}},s["default"].createElement("ul",{className:"clearfix",onClick:this.industry.bind(this),ref:"industry"},s["default"].createElement("li",{id:"0",className:"active"},s["default"].createElement("span",null,"全部订单")),s["default"].createElement("li",{id:"1"},s["default"].createElement("span",null,"房产订单")),s["default"].createElement("li",{id:"2"},s["default"].createElement("span",null,"装修订单")),s["default"].createElement("li",{id:"4"},s["default"].createElement("span",null,"家电订单")),s["default"].createElement("li",{id:"3"},s["default"].createElement("span",null,"家具订单")),s["default"].createElement("li",{id:"5"},s["default"].createElement("span",null,"家政订单")),s["default"].createElement("li",{id:"6"},s["default"].createElement("span",null,"汽车订单")),s["default"].createElement("li",{id:"7"},s["default"].createElement("span",null,"旅行订单")))))),s["default"].createElement("header",{className:"common-header"},s["default"].createElement("div",{className:"left-arrow"},i),s["default"].createElement("h2",{className:c?"title "+c:"title"},s["default"].createElement("span",{ref:"sHead"},t),o,d))}}]),t}(i.Component);v.contextTypes={router:s["default"].PropTypes.object.isRequired};var g=s["default"].createClass({displayName:"AddressSelectList",render:function(){var e=this,t=this.props,l=t.index,n=t.id,a=t.name,r=t.status,u=t.selectIndex;return this.callback=function(){e.props.callback({index:l,name:a,id:n,status:r})},s["default"].createElement("li",{className:l==u?"select":"",onClick:this.callback.bind(this)},a)}}),b=(t.AddressSelect=function(e){function t(e){n(this,t);var l=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return l.state={list:[],status:0,index:0,select:"请选择",province:"",provinceId:"",city:"",cityId:"",country:"",countryId:"",xz:"",xzId:""},l.getProvince(l,0),l}return r(t,e),c(t,[{key:"getProvince",value:function(e,t){0!=t&&(this.setState({index:0,status:0,select:"请选择",province:"",city:"",country:"",xz:""}),e=this),p.Tool.fetch(e,{url:E["default"].PROVINCE+"?containChilds=false",type:"get",headers:y.COMMON_HEADERS,successMethod:function(t){e.setState({list:t,status:0})}})}},{key:"getCity",value:function(e,t){0!=t&&(e=this.state.provinceId);var l=this;p.Tool.fetch(this,{url:""+E["default"].CITY+e,type:"get",headers:y.COMMON_HEADERS,successMethod:function(e){l.setState({index:0,list:e,status:1,city:"",country:"",xz:""})}})}},{key:"getCountry",value:function(e,t){0!=t&&(e=this.state.cityId);var l=this;p.Tool.fetch(this,{url:""+E["default"].COUNTRY+e,type:"get",headers:y.COMMON_HEADERS,successMethod:function(e){l.setState({index:0,list:e,status:2,country:"",xz:""})}})}},{key:"getXz",value:function(e,t){0!=t&&(e=this.state.xzId);var l=this;p.Tool.fetch(this,{url:""+E["default"].XZ+e,type:"get",headers:y.COMMON_HEADERS,successMethod:function(e){l.setState({index:0,list:e,status:3,xz:""})}})}},{key:"selectItem",value:function(e){0==e.status?(this.refs.province.innerText=e.name,this.setState({province:e.name,provinceId:e.id,select:"",index:e.index}),this.getCity(e.id,0)):1==e.status?(this.refs.city.innerText=e.name,this.setState({city:e.name,cityId:e.id,index:e.index}),this.getCountry(e.id,0)):2==e.status?(this.refs.country.innerText=e.name,this.setState({country:e.name,countryId:e.id,index:e.index}),this.getXz(e.id,0)):3==e.status&&(this.refs.xz.innerText=e.name,this.setState({xz:e.name,xzId:e.id,index:e.index}),this.props.addressResult({provinceId:this.state.provinceId,province:this.state.province,cityId:this.state.cityId,city:this.state.city,countryId:this.state.countryId,country:this.state.country,xzId:e.id,xz:e.name}))}},{key:"render",value:function(){var e=this,t=this.props._style;return s["default"].createElement("section",{className:"cascade-select",style:{WebkitTransform:"translate3d(0,"+t+",0)",transform:"translate3d(0,"+t+",0)"}},s["default"].createElement("header",null,"所在地区",s["default"].createElement("span",{onClick:this.props.close},"+")),s["default"].createElement("div",{className:"select-value"},s["default"].createElement("span",{style:{color:"#ff6600",marginRight:"0"}},this.state.select),s["default"].createElement("span",{ref:"province",onClick:this.getProvince.bind(this)},this.state.province),s["default"].createElement("span",{ref:"city",onClick:this.getCity.bind(this)},this.state.city),s["default"].createElement("span",{ref:"country",onClick:this.getCountry.bind(this)},this.state.country),s["default"].createElement("span",{ref:"xz",onClick:this.getXz.bind(this)},this.state.xz)),s["default"].createElement("div",{className:"select-scroll"},s["default"].createElement("ul",{ref:"list"},this.state.list.map(function(t,l){return s["default"].createElement(g,u({key:l,index:l,selectIndex:e.state.index,status:e.state.status},t,{callback:e.selectItem.bind(e)}))}))))}}]),t}(i.Component),t.Downloadapp=function(e){var t="http://m.jyall.com/download.html",l="myapp://m.jyall.app/openwith",n=document.getElementsByClassName("j-downAppBtn");n.length,document.body.addEventListener("click",function(e){if("j-downAppBtn"==e.target.className){if("MicroMessenger"==navigator.userAgent.match(/MicroMessenger/i))return;if(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)){var n=new Date,a=document.createElement("a");a.href=t,document.body.appendChild(a);var r=document.createEvent("HTMLEvents");r.initEvent("click",!1,!0),window.setTimeout(function(){var e=new Date;e-n<5e3?(a.dispatchEvent(r),setTimeout(function(){},500)):window.close()},2e3),window.location=l}else if(navigator.userAgent.match(/android/i)){var u=null;try{u=document.createElement("iframe"),u.setAttribute("src",l),u.setAttribute("style","display:none"),document.body.appendChild(u)}catch(e){}setTimeout(function(){window.location=t},2e3)}}},!1)},function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"render",value:function(){var e=this.props.User&&this.props.User.loginname?"/user/"+this.props.User.loginname:"/signin",t=[];return t[this.props.index]="on",s["default"].createElement("footer",{className:"common-footer"},s["default"].createElement("div",{className:"zhanwei"}),s["default"].createElement("ul",{className:"menu","data-flex":"box:mean"},s["default"].createElement("li",{className:t[0]},s["default"].createElement(o.Link,{to:"/"},s["default"].createElement("i",{className:"iconfont icon-shouye"}),"首页")),s["default"].createElement("li",{className:t[1]},s["default"].createElement(o.Link,{to:"/topic/create"},s["default"].createElement("i",{className:"iconfont icon-fabu"}),"发表")),s["default"].createElement("li",{className:t[2]},s["default"].createElement(o.Link,{to:"/my/messages"},s["default"].createElement("i",{className:"iconfont icon-xiaoxi"}),"消息")),s["default"].createElement("li",{className:t[3]},s["default"].createElement(o.Link,{to:e},s["default"].createElement("i",{className:"iconfont icon-wode"}),"我的"))))}},{key:"shouldComponentUpdate",value:function(e){return this.props.index!==e.index}}]),t}(i.Component));b.defaultProps={index:0};var x=(0,d.connect)(function(e){return{User:e.User}},(0,m["default"])("User"))(b);t.Footer=x}).call(this)}finally{}},7:function(e,t,l){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){for(var t={},l=["signinSuccess","signin","setState"],n=function(n){t[l[n]]=function(t){return{_ID:e,target:t,type:l[n]}}},a=0;a<l.length;a++)n(a);return t}}).call(this)}finally{}},314:function(e,t,l){t=e.exports=l(17)(),t.push([e.id,".xieyi{background:#fff;margin-top:-.28rem}.xieyi div:nth-child(2){padding:.2rem}.xieyi p{color:#656565;font-size:.28rem;line-height:.4rem}",""])},327:function(e,t,l){var n=l(314);"string"==typeof n&&(n=[[e.id,n,""]]),l(18)(n,{}),n.locals&&(e.exports=n.locals)},358:function(e,t,l){(function(e){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,l,n){return l&&e(t.prototype,l),n&&e(t,n),t}}(),c=l(1),i=e(c),s=l(6);l(327);var o=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){return document.getElementsByTagName("title")[0].innerHTML="家园网用户服务协议",i["default"].createElement("div",{className:"xieyi"},i["default"].createElement(s.Header,{title:"用户服务协议",leftIcon:"fanhui"}),i["default"].createElement("div",null,i["default"].createElement("h4",null,"一、导语"),i["default"].createElement("p",null,"尊敬的用户，欢迎您注册成为家园网用户。"),i["default"].createElement("p",null,'在注册前请您仔细阅读如下服务条款：本协议双方为您与家园网，本协议具有合同效力。您确认本协议后，本协议即在您和家园网之间产生法律效力。请您务必在注册之前认真阅读协议内容，如有任何疑问，可向家园网咨询。无论您事实上是否在注册之前认真阅读了本协议，只要您点击协议正本下方的"同意"按钮并按照家园网注册程序成功注册为用户，您的行为均表示您阅读、同意并签署了本协议。'),i["default"].createElement("h4",null,"二、用户帐号、密码和安全"),i["default"].createElement("p",null,"2.1您一旦注册成功，便成为家园网的合法用户，将得到一个密码和帐号，您有义务保证密码和帐号的安全。您对利用该密码和帐号所进行的活动负责，因此所产生的损失或损害，家园网不承担责任。"),i["default"].createElement("p",null,'2.2您的密码和帐号遭到未授权的使用或发生其他安全问题，您可以立即通知家园网。在每次连线结束时，您应点击"安全退出"或"退出"按钮结束账号使用，否则可能得不到家园网的安全保护。'),i["default"].createElement("h4",null,"三、版权声明"),i["default"].createElement("p",null,"家园网为了保护您的合法权益，根据《中华人民共和国著作权法》《中华人民共和国商标法》等法律规定，发表如下版权声明："),i["default"].createElement("p",null,"3.1家园网之网页内容，包括但不限于文字、商标、视频、图表、图片、设计、网页上的照片、产生网页的程序编码及其他构成这些网页内容的要素，以上作品的著作权均属于家园网。"),i["default"].createElement("p",null,"3.2未经许可，任何个人或组织不得对家园网内容进行复制、转载、修改、抄袭、剽窃、贩卖、展示、公开、散播或用于商业目的。"),i["default"].createElement("p",null,"3.3您发表、转载的所有文章及资料（如示例代码、视频、图片等）的版权归您所有，同时您保证上传、转载、发表的内容不侵犯他人版权，家园网保有使用权。"),i["default"].createElement("p",null,'3.4"公开使用区域"包括网上论坛、留言版、评论区和其它一般公众可以使用的网络内容区域；您一旦在公开使用区域张贴内容，即视为授予家园网该内容著作权的免费及非独家许可使用权，家园网有权为展示、传播及推广前述张贴的内容之服务目的，对上述内容进行复制、修改、出版。因您进行上述张贴，而导致第三方提出索赔要求或衍生的损害或损失，您须承担全部责任。'),i["default"].createElement("p",null,"3.5其他访问者或者企业、单位，未经家园网授权，不得对他人张贴在公开使用区域或本服务其他内容进行复制、出售或用作其他商业用途。"),i["default"].createElement("h4",null,"四、用户的权利和义务"),i["default"].createElement("p",null,"4.1为了能使用本服务，您同意以下事项："),i["default"].createElement("p",null,"4.1.1使用信息服务不作非法用途。"),i["default"].createElement("p",null,"4.1.2不干扰或混乱网络服务。"),i["default"].createElement("p",null,"4.1.3遵守所有使用服务的网络协议、规定、程序和惯例。您的行为准则是以互联网法规，政策、程序和惯例为根据的。"),i["default"].createElement("p",null,"4.1.4家园网为您提供服务，您在使用家园网提供的服务时需提供真实身份信息，并对自己在家园网的行为、言论负责。"),i["default"].createElement("p",null,"4.1.5您提供的注册信息不得冒用他人信息或侵犯他人合法权益。家园网有权暂停或终止帐号，并有权追究相关责任人的法律责任。"),i["default"].createElement("p",null,"4.1.6您在享用各项服务的同时，同意接受家园网提供的各类信息服务。"),i["default"].createElement("p",null,"4.2用户不得发布下列违法信息"),i["default"].createElement("p",null,"4.2.1反对宪法所确定的基本原则的。"),i["default"].createElement("p",null,"4.2.2危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的。"),i["default"].createElement("p",null,"4.2.3损害国家荣誉和利益的。"),i["default"].createElement("p",null,"4.2.4煽动民族仇恨、民族歧视，破坏民族团结的。"),i["default"].createElement("p",null,"4.2.5破坏国家宗教政策，宣扬邪教和封建迷信的。"),i["default"].createElement("p",null,"4.2.6散布谣言，扰乱社会秩序，破坏社会稳定的。"),i["default"].createElement("p",null,"4.2.7散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的。"),i["default"].createElement("p",null,"4.2.8侮辱或者诽谤他人，侵害他人合法权益的。"),i["default"].createElement("p",null,"4.2.9含有法律、行政法规禁止的其他内容的。"),i["default"].createElement("p",null,"4.3禁止用户从事以下行为"),i["default"].createElement("p",null,"4.3.1未经家园网许可的广告行为。"),i["default"].createElement("p",null,"4.3.2冒充任何人或机构，或以虚伪不实的方式谎称或使人误认为与任何人或任何机构有关。"),i["default"].createElement("p",null,"4.3.3伪造标题或以其他方式操控识别资料，使人误认为该内容为家园网所传送。"),i["default"].createElement("p",null,"4.3.4上载、张贴、发送电子邮件或以其它方式传送无权传送的内容（例如内部资料、机密资料）。"),i["default"].createElement("p",null,"4.3.5上载、张贴、发送电子邮件或以其它方式传送侵犯任何人的专利、商标、著作权、商业秘密或其他专属权利之内容。"),i["default"].createElement("p",null,'4.3.6在家园网提供的专供张贴广告的区域之外，上载、张贴、发送电子邮件或以其他方式传送广告函件、促销资料、"垃圾邮件"等。'),i["default"].createElement("p",null,"4.3.7上载、张贴、发送电子邮件或以其他方式传送有关干扰、破坏或限制任何计算机软件、硬件或通讯设备功能的软件病毒或其他计算机代码、档案和程序之资料。"),i["default"].createElement("p",null,"4.3.8干扰或破坏本服务或与本服务相连的服务器和网络，或不遵守本注册协议之规定。"),i["default"].createElement("p",null,"4.3.9以任何方式危害未成年人。"),i["default"].createElement("p",null,"4.3.10跟踪或以其他方式骚扰他人。"),i["default"].createElement("p",null,"4.3.11其它被家园网视为不适当的行为。"),i["default"].createElement("p",null,"4.4您需对经由本服务上载、张贴、发送电子邮件或传送的内容负责；对经由本协议而传送的内容，家园网不保证前述内容的正确性、完整性或品质。家园网可以拒绝或删除经由本协议提供的内容。您使用上述内容，须承担风险。                "),i["default"].createElement("p",null,"4.5在下述情况下，家园网有权对内容进行保存、删除或披露："),i["default"].createElement("p",null,"4.5.1法律程序所规定，或政府管理部门所要求。"),i["default"].createElement("p",null,"4.5.2本协议条款规定。"),i["default"].createElement("p",null,"4.5.3被侵害的第三人提出权利主张。"),i["default"].createElement("p",null,"4.5.4为保护家园网、其使用者及社会公众的权利、财产或人身安全。"),i["default"].createElement("p",null,"4.5.5其他家园网认为必要的情况。"),i["default"].createElement("h4",null,"五、隐私权制度"),i["default"].createElement("p",null,"5.1尊重和保护您的个人隐私是家园网的一项基本政策，家园网保证不对外公开或者向任何第三方提供您的注册资料以及您在使用网络服务时存储在家园网的非公开内容和信息，但下列情况除外："),i["default"].createElement("p",null,"5.1.1家园网事先获得您明确授权。"),i["default"].createElement("p",null,"5.1.2遵守有关法律法规的规定，向国家有关机关提供。"),i["default"].createElement("p",null,"5.1.3保持维护家园网的知识产权和其他重要权利。"),i["default"].createElement("p",null,"5.1.4为维护社会公众利益、维护第三方合法权益。"),i["default"].createElement("p",null,"5.1.5在紧急情况下维护您个人和社会大众的隐私安全。"),i["default"].createElement("p",null,"5.1.6根据本协议相关规定或家园网认为必要的其他情况下。"),i["default"].createElement("p",null,"5.2家园网可能会与第三方合作向您提供相关的网络服务，在此情况下，如该第三方同意承担与家园网同等的保护您隐私的责任，则家园网可将您的注册资料在家园网的监管下提供给第三方。"),i["default"].createElement("p",null,"5.3在不透露您隐私资料的前提下，家园网有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。"),i["default"].createElement("p",null,"5.4您知悉并同意，为便于向您提供更好的服务，家园网将在您自愿选择服务或者提供信息的情况下收集您的个人信息，并将这些信息进行整合。"),i["default"].createElement("p",null,"5.5家园网会采取行业惯用措施保护您信息的安全，但家园网不能完全确保您信息的安全性，您须承担相应的风险。比如联机公布可被公众访问的个人信息时，您有可能会收到未经您同意的信息；家园网的合作伙伴和可通过家园网访问的第三方互联网站点和服务；通过抽奖、促销等活动得知您信息的第三方会进行独立的数据收集工作等活动。家园网对您及其他第三方的上述行为，无法承担责任，敬请您谅解。"),i["default"].createElement("p",null,"5.6家园网会向您发送您订制的信息或者家园网认为您会感兴趣的其他信息。如果您不希望收到这样的信息，只需在提供个人信息时或其他任何时候告知家园网即可。"),i["default"].createElement("p",null,"5.7在进行促销或抽奖时，家园网可能会与赞助商共享您的个人信息，在这些情况下，家园网会在发送信息之前进行提示，并且您可以通过选择不参与的方式来终止传送过程。"),i["default"].createElement("h4",null,"六、用户信息的存储与限制"),i["default"].createElement("p",null,"6.1您所发布信息的删除或储存失败，家园网不承担责任，同时限于存储条件，家园网无法承诺对您的存储信息无限期保留。"),i["default"].createElement("p",null,"6.2家园网有判定您的行为是否符合家园网服务条款要求和精神的保留权利，如果您违背了服务条款的规定，家园网有中断对您提供网络服务的权利。家园网运用自己的操作系统通过互联网向用户提供丰富的网上资源，包括各种信息工具、网上论坛、个性化内容等。除非另有明确规定，增强或强化目前服务的新功能，包括新产品、栏目，均无            条件地适用本协议条款。"),i["default"].createElement("h4",null,"七、免责声明"),i["default"].createElement("p",null,'7.1您明确了解并同意，使用本服务之风险由您承担，除非此种风险或损害系由家园网自身过错直接导致。本协议系依"现状"及"现有"基础提供。家园网对本协议不提供任何明示或默示的担保或保证，包含但不限于商业适售性、特定目的之适用性及未侵害他人权利等担保或保证。'),i["default"].createElement("p",null,"7.2对于家园网站向用户提供的下列产品或服务的质量缺陷本身及其引发的损失，若非由家园网自身过错而直接导致，则家园网不承担责任。"),i["default"].createElement("p",null,"7.3用户明确了解并同意，基于以下原因造成的包括但不限于利润、信誉、应用、数据等有形损失或其它无形损失，家园网不承担任何直接、间接、附带、特别、衍生性或惩罚性赔偿责任："),i["default"].createElement("p",null,"7.3.1家园网的服务之使用或无法使用。"),i["default"].createElement("p",null,"7.3.2为替换通过家园网的服务购买或取得的任何商品、数据、信息、服务，收到的讯息，或缔结交易而发生的成本。"),i["default"].createElement("p",null,"7.3.3用户的传输或数据遭到未经家园网授权的存取或变造。"),i["default"].createElement("p",null,"7.4任何第三方在家园网的服务中所作声明、行为或与家园网的服务相关的其它事宜，但本协议条款有明确规定的除外。"),i["default"].createElement("p",null,"7.5由于您将密码告知他人或与他人共享注册账户，由此导致的任何个人资料泄露，您须自行承担责任。"),i["default"].createElement("p",null,"7.6任何由于计算机问题、黑客攻击、计算机病毒侵入或发作、政府管制而造成的暂时性关闭等影响网络正常经营之不可抗力或其它家园网不能控制的原因造成的您资料泄露、丢失、被盗用或被篡改等，家园网不承担责任，但将尽全力减少给您造成的损失和影响。"),i["default"].createElement("p",null,"7.7由于与本网站链接的其它网站所造成的您资料泄露及由此而导致的法律争议和后果，家园网不承担责任。"),i["default"].createElement("p",null,"7.8家园网无法保证所有信息、文本、图形、链接及其它项目的绝对准确性和完整性，故仅供访问者参考使用。因使用或依赖上述资源所产生的损失或损害，家园网不承担责任。"),i["default"].createElement("p",null,"7.9如果单位或个人认为家园网某部分内容有侵权嫌疑，请立即通知我们，并提供合法有效的权利证明，我们将第一时间予以更改或删除。家园网不承担查清事情的责任和证实事情公正性和合法性的责任，同时在事情查清前保留对该部分内容继续刊载的权利。"),i["default"].createElement("p",null,"7.10若家园网已经明示网络服务提供方式发生变更并提醒您应当注意事项，您未按要求操作所产生的后果须自行承担。"),i["default"].createElement("p",null,"7.11您同意保障和维护家园网及其他用户的利益，由于您登录网站内容违法、不真实、不正当、侵犯第三方合法权益，或违反本协议项下的任何条款而给家园网或任何其他第三人造成损失，您同意承担由此造成的损害赔偿责任。"),i["default"].createElement("p",null,"7.12家园网对如下直接、间接、偶然、特殊及继起的损害不负责任，这些损害可能来自："),i["default"].createElement("p",null,"7.12.1不正当使用网络服务，在网上购买商品或进行同类型服务，在网上进行交易，非法使用网络服务或您传送的信息有误。"),i["default"].createElement("p",null,"7.12.2家园网组织的活动或使用由家园网提供的各项优惠及增值服务用户，如遭受人身或财务的损失、损害或伤害，家园网不承担责任，您可以向产品服务的提供商提出权利要求。"),i["default"].createElement("p",null,"7.12.3您须对自身及所邀请的宾客在参加家园网组织的活动或使用由家园网提供的各项优惠及增值服务时的行为、行动及违法、违规或疏忽行为（不论是否故意）负责任。"),i["default"].createElement("p",null,"7.12.4如家园网的系统发生故障影响到用户服务的正常运行，家园网承诺在第一时间内与相关单位配合，及时进行修复。但您因此而产生的经济损失，家园网和合作公司不承担责任。"),i["default"].createElement("p",null,"7.12.5您使用某些用户功能可能存在第三方通过恶意或其他手段获得验证问题的答案、密钥等从而造成相关的风险，您须明白并承担以上风险。家园网不对任何由第三方原因导致的用户损失承担责任。"),i["default"].createElement("p",null,"7.13家园网努力使产品说明尽可能准确。不过，我们无法不保证产品说明或家园网站上的其他内容是准确的、完整的、可靠的、最新的或无错误的。如果家园网提供的产品本身并非如说明所说，您可以选择将该未经使用过的产品退还我们。直到您发出订单，我们才能确认商品的价格。尽管我们做出最大的努力，我们的商品目录里的一小部分商品可能会有定价错误。如果我们发现错误定价，我们将采取下列之一措施："),i["default"].createElement("p",null,"7.13.1如果某一商品的正确定价低于我们的错误定价，我们将按照较低的定价向您销售交付该商品。"),i["default"].createElement("p",null,"7.13.2如果某一商品的正确定价高于我们的错误定价，我们会根据我们的情况决定是否在交付前联系您寻求您的指示,或者取消订单并通知您。"),i["default"].createElement("h4",null,"八、条款的修改和终止"),i["default"].createElement("p",null,"8.1家园网有权在必要时修改注册协议，注册协议一旦发生变动，将会在重要页面上提示修改内容。如果不同意所改动的内容，您可以取消获得的家园网信息服务。如果您继续享用家园网信息服务，则视为接受注册协议的变动。"),i["default"].createElement("p",null,"8.2家园网可根据实际情况中断一项或多项服务，并且不需对任何个人或第三方负责。您若反对注册协议的建议或对后来的协议修改有异议，或对家园网服务不满，您可以选择不再使用家园网信息服务或通知家园网停止对您的服务。结束用户服务后，您使用家园网服务的权利即中止。"),i["default"].createElement("h4",null,"九、协议修改或变更的通知方式"),i["default"].createElement("p",null,"9.1家园网向您发出的通知，可以采用电子邮件、页面公告或家园网认为适合的形式。注册协议的修改或其他事项变更时，家园网将会以上述形式进行通知。"),i["default"].createElement("p",null,"9.2您在注册时应当选择稳定性及安全性相对较好的电子邮箱，并且同意接受并阅读家园网发往您的各类电子邮件。如您未及时从自己的电子邮箱接受电子邮件或您电子邮件接收及阅读程序本身的问题使电子邮件无法正常接收或阅读的，只要家园网成功发送了电子邮件，则视为您已接收到相关的电子邮件。电子邮件在发信服务器上所记录的发出时间视为送达时间。"),i["default"].createElement("h4",null,"十、关于手机服务"),i["default"].createElement("p",null,"10.1家园网为用户提供手机短信服务。一旦您在注册的过程输入自己的手机号码和验证码并完成注册程序，则表明您愿意接受家园网发送的短信，此服务为免信息费服务，家园网不向您收取任何费用，您主动发送的短信产生的费用，由您向移动运营商支付。"),i["default"].createElement("p",null,"10.2家园网不承担您由于手机故障、欠费、丢失、借用或盗用后他人利用手机订购家园网服务而遭受的损失或并非由于家园网的原因而导致的其它损失。"),i["default"].createElement("p",null,"10.3如因家园网的过错，导致您接收到错误的信息并支付了不应支付的信息费，家园网的责任仅限于赔偿您因错误信息而支付的信息费。"),i["default"].createElement("h4",null,"十一、运营规则"),i["default"].createElement("p",null,"11.1本协议包含了您使用用户服务的基本规范，您在使用用户服务时，还需遵循网站公示的具体规范，即网站规则，如网站服务条款、通知公告、操作规则、温馨提示等网站规则。"),i["default"].createElement("p",null,"11.2请您在阅读并同意遵守本协议及网站规则后，再享受用户服务，否则由此带来的不便和责任由您自行承担。"),i["default"].createElement("p",null,"11.3如果注册协议或网站规则条款中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。"),i["default"].createElement("h4",null,"十二、遵守法律法规"),i["default"].createElement("p",null,"12.1本注册协议应与中华人民共和国法律的解释相一致，如发生家园网注册协议条款与中华人民共和国法律相抵触时，则这些条款将按法律规定重新解释，而其它条款则依旧保持对您产生法律效力和影响。"),i["default"].createElement("p",null,"12.2您同意遵守中华人民共和国法律法规，包括但不限于《中华人民共和国保守国家秘密法》、《中华人民共和国计算机信息系统安全保护条例》、《计算机软件保护条例》、《互联网电子公告服务管理规定》、《互联网信息服务管理办法》等有关计算机及互联网的法律法规和实施办法。"),i["default"].createElement("p",null,"12.3在任何情况下，如您的行为可能违反上述法律、法规，家园网可以在任何时候，不经事先通知而终止向您提供服务。鉴于互联网的无国界性，您应注意遵守当地有关的法律和法规。"),i["default"].createElement("p",null,"12.4对于因家园网或与之有关而产生的任何争议，家园网使用条款所包含的您的权利和义务及所有行为适用中华人民共和国区域法律管辖。"),i["default"].createElement("h4",null,"十三、司法管辖"),i["default"].createElement("p",null,"13.1因本服务协议所产生的争议和纠纷，双方可协商解决，若协商未果，则任何一方均可向家园网所在地的人民法院提起诉讼解决。"),i["default"].createElement("p",null,"13.2如果您以任何方式侵犯或可能侵犯我们的知识产权或其他所有权，我们可在任何法院寻求指令性或其他适当的补救，而您对该法院的管辖、管辖区域和或管辖权放弃反对权。")))}},{key:"componentDidMount",value:function(){location.href.indexOf("source=app")!=-1&&(document.getElementsByTagName("header")[0].style.display="none",document.getElementById("route_div").style.paddingTop=".14rem")}}]),t}(c.Component);t["default"]=o}).call(this)}finally{}}).call(t,l(14)(e))}});