import React,{Component,PropTypes} from 'react';
import Cookie from 'react-cookie';
import {Link } from 'react-router';
import {COMMON_HEADERS} from '../constants/headers';
import URLS from '../constants/urls.js';
import {Tool, merged} from '../Tool';
import '../Style/center';
import {Header} from '../Component/common/index';

class Center extends Component {
	constructor(props){
		super(props);
		// Tool.loginChecked(this);
		this.state = {
			userId : Cookie.load('userId'),
			nickname : Cookie.load('name'),
			couponTotal : 0,
			photo : require("../images/center/weidenglu.png"),
			bean : 0,
			login: true
		};
		//获取家园豆、优惠券、购物车数量
		this.getBean = () => {
			let _this = this;
			if(!this.state.userId)return;
			Tool.fetch(this,{
                url: URLS.bean + "?" + this.state.userId,
                type: "get",
                successMethod: function(json){
                    _this.setState({
                    	bean : json.beanTotal,
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
		Tool.fetch(this,{
            url: URLS.LOGINOUT + Cookie.load('tokenid'),
            type: "get",
            successMethod: function(json){
            	if(json){
	                Cookie.remove('tokenid');
                    Cookie.remove('userId');
                    Cookie.remove('name');
                    Cookie.remove('photo');            		
	                _this.setState({
	                	login: false,
	                	photo: require("../images/center/weidenglu.png")
	                });
            	}
            }
        });		
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
					<div className="ch-avatar"><img src={this.state.photo} /></div>
					<p className="ch-nickname" style={{display: this.state.login?"block":"none"}}>{this.state.nickname}</p>
					<p className="ch-quantity" style={{display: this.state.login?"block":"none"}}>家园豆：（{this.state.bean}）</p>
					<p className="login-button" style={{display: this.state.login?"none":"block"}}><Link to="/">点击登录</Link></p>
				</header>
				<ul className="center-menu">
					{/*<p className="ch-quantity">优惠券：（{this.state.couponTotal}）</p> <li><a href="#" className="cm-message">消息<i></i></a></li>*/}
					<li><Link to="/shoppingcart" className="cm-cart">购物车<em>{this.state.totalItemCount}</em></Link></li>
				</ul>
				<ul className="center-menu">
					<li><Link to="/appointment" className="cm-yue">我的预约单</Link></li>
					<li><Link to="/myorder" className="cm-order">我的订单</Link></li>
				</ul>
				<ul className="center-menu">
					<li><Link to="/address" className="cm-address">管理收货地址</Link></li>
				</ul>
				<p className="signin center-out" style={{display: this.state.login?"block":"none"}} ><button className="btn" onClick={this.signOut.bind(this)}>退出</button></p>
			</div>
		)
	}
}

export default Center;