import React,{Component,PropTypes} from 'react';
import URLS from '../constants/urls';
import {Tool, merged} from '../Tool';
import '../Style/center';

class Center extends Component {
	constructor(props){
		super(props);
		Tool.rem();
	}
	render(){
		return(
			<div>
				<header className="center-header">
					<div className="ch-avatar"></div>
					<p className="ch-nickname">用户昵称</p>
					<p className="ch-bean">家园豆：3409（可用：7474）</p>
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