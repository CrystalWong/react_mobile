import React,{Component,PropTypes} from 'react';
import {Header} from '../Component/common/index';
import {Tool, merged} from '../Tool';
import '../Style/address';

class Address extends Component {
	constructor(props){
		super(props);
		console.log(props)
		this.state = {
			
		};
	}

	addressEdit(){

	}

	addressDel(){

	}

	render(){
		return(
			<div>
				<Header title="管理收货地址" leftIcon="fanhui" />
				{/* 有地址 */}
				<ul className="address-list">
					<li>
						<div className="address-msg">
							<h6><span>张小A</span><span>15110098765</span><em>默认</em></h6>
							<p>北京北京市东城区广渠门外南街8号金色家园大厦</p>
						</div>
						<div className="address-operation">
							<span className="current on">设为默认</span>
							<span className="ao-del">删除</span>
							<span className="ao-edit">编辑</span>
						</div>
					</li>
					<li>
						<div className="address-msg">
							<h6><span>张小A</span><span>15110098765</span></h6>
							<p>北京北京市东城区广渠门外南街8号金色家园大厦</p>
						</div>
						<div className="address-operation">
							<span className="current">设为默认</span>
							<span className="ao-del">删除</span>
							<span className="ao-edit">编辑</span>
						</div>
					</li>
				</ul>
				{/* 无地址 
				<div className="no-address">
					<i className="na-ico"></i>
					<p>收货地址还是空的快去新建地址吧</p>
				</div>*/}
				<a href="/address-add" className="add-address-btn">+ 新增收货地址</a>
			</div>
		)
	}
}

export default Address;