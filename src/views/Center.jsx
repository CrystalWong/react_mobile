import React,{Component,PropTypes} from 'react';
import Cookie from 'react-cookie';
import {Link } from 'react-router';
import {COMMON_HEADERS} from '../constants/headers';
import URLS from '../constants/urls.js';
import {Tool, merged} from '../Tool';
import '../Style/center';
import {Header} from '../Component/common/index';
import {ONLINE} from '../constants/common';

class Center extends Component {
	constructor(props){
		super(props);
		let self = this;
		Tool.loginChecked(this,function(){
			self.onOut = true;
		});
		this.state = {
			userId : Cookie.load('userId'),
			nickname : Cookie.load('name'),
			couponTotal : 0,
			photo : require("../images/center/weidenglu.png"),
			allBean: 0,
			bean : 0,
			login: true
		};
		//获取家园豆、优惠券、购物车数量
		this.getBean = () => {
			let _this = this;
			if(!this.state.userId)return;
			Tool.fetch(this,{
                url: URLS.bean + "?memberId=" + this.state.userId,
                type: "get",
                successMethod: function(json){
                    _this.setState({
                    	allBean: json.beanAllTotal/100,
                    	bean : json.beanTotal/100,
                    	totalItemCount : json.totalItemCount,
                    	couponTotal : json.couponTotal,
                    	photo : Cookie.load('photo')
                    });
                }
            });
		}
	}

	//是否登录
	noLogin(){
		//检测是否登录，否跳转至登录页
		let _this = this;
		if(!this.state.userId){
	        this.setState({login: false});
		}else{
			Tool.fetch(this,{
	            url: `${URLS.TOKENCHECKED}${Cookie.load('tokenid')}`,
	            type: "get",
	            headers: COMMON_HEADERS,
	            successMethod: function(json){
	                if(!json.loginFlag){
	                    _this.setState({login: false});
	                }
	            }
	        });
		}
	}
	//退出
	signOut(){
		let _this = this;
		var cookieObj = { expires:new Date("2100-01-01"),path:"/",domain:(ONLINE?"m.jyall.com":"") }
		Tool.fetch(this,{
            url: URLS.LOGINOUT + Cookie.load('tokenid'),
            type: "get",
            successMethod: function(json){
            	if(json){
                    Cookie.remove('userId', cookieObj);     
                    Cookie.remove('tokenid', cookieObj); 
                    Cookie.remove('name', cookieObj); 
                    Cookie.remove('photo', cookieObj);      		
	                _this.setState({
	                	login: false,
	                	photo: require("../images/center/weidenglu.png")
	                });
            	}
            }
        });		
	}

	checkOut(link){
		if(this.onOut){
            Tool.history.push("/");
		}else{
            Tool.history.push(link);
		}		
	}

	appointment(){
		this.checkOut("/appointment");
	}

	myorder(){
		this.checkOut("/myorder");
	}

	address(){
		this.checkOut("/address");
	}

	componentWillMount(){
		this.noLogin();
	}

	componentDidMount() {
	    this.getBean();
	}

	render(){
		return(
			<div className="center-body">
			    <Header title="个人中心" leftIcon="fanhui" />
				<header className="center-header">
					<div className="ch-avatar"><img src={this.state.photo?this.state.photo:require("../images/center/weidenglu.png")} /></div>
					<p className="ch-nickname" style={{display: this.state.login?"block":"none"}}>{this.state.nickname}</p>
					<p className="ch-quantity" style={{display: this.state.login?"block":"none"}}>家园豆：{this.state.allBean} （可用：{this.state.bean}）</p>
					<p className="login-button" style={{display: this.state.login?"none":"block"}}><Link to="/">点击登录</Link></p>
				</header>
				<ul className="center-menu">
					{/*<p className="ch-quantity">优惠券：（{this.state.couponTotal}）</p> <li><a href="#" className="cm-message">消息<i></i></a></li>*/}
					<li><Link to="/shoppingcart" className="cm-cart">购物车<em>{this.state.totalItemCount}</em></Link></li>
				</ul>
				<ul className="center-menu">
					<li><a href="javascript:;" onClick={this.appointment.bind(this)} className="cm-yue">我的预约单</a></li>
					<li><a href="javascript:;" onClick={this.myorder.bind(this)} className="cm-order">我的订单</a></li>
				</ul>
				<ul className="center-menu">
					<li><a href="javascript:;" onClick={this.address.bind(this)} className="cm-address">管理收货地址</a></li>
				</ul>
				<p className="signin center-out" style={{display: this.state.login?"block":"none"}} ><button className="btn" onClick={this.signOut.bind(this)}>退出</button></p>
			</div>
		)
	}
}

export default Center;