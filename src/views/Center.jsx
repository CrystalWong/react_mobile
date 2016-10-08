import React,{Component,PropTypes} from 'react';
import Cookie from 'react-cookie';
import {Tool, merged} from '../Tool';
import '../Style/center';

class Center extends Component {
	constructor(props){
		super(props);

		this.state = {
			userId : Cookie.load('userId'),
			avatarURL : Cookie.load('photo'),
			nickname : Cookie.load('name'),
			bean : 0
		};
		console.log('用户ID：' + this.state.userId);
		//获取家园豆
		this.getBean = () => {
			Tool.fetch(this,{
                url: URLS.bean + "?" + this.state.userId,
                type: "get",
                successMethod: function(json){
                    this.setState({bean : json.beanTotal});
                }
            });
		}
	}

	//是否登录
	noLogin(){
		//检测是否登录，否跳转至登录页
		if(true){
			window.location.href = '/'
		}
	}

	componentWillMount(){
		// this.noLogin();
	}

	componentDidMount() {
	    this.getBean();
	    // this.getBean();
	}


	render(){
		return(
			<div>
				<header className="center-header">
					<div className="ch-avatar"><img src="{this.state.avatarURL}" /></div>
					<p className="ch-nickname">{this.state.nickname}</p>
					<p className="ch-bean">家园豆：{this.state.bean}</p>
				</header>
				<ul className="center-menu">
					<li><a href="/yue" className="cm-reservation">预约单</a></li>
					<li><a href="#" className="cm-order">订单</a></li>
					<li><a href="#" className="cm-address">管理收货地址</a></li>
				</ul>
			</div>
		)
	}
}

export default Center;