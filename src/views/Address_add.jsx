import React,{Component,PropTypes} from 'react';
import {Header} from '../Component/common/index';
import {Tool, merged} from '../Tool';
import '../Style/address';

class AddressAdd extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		};

		
	}
	render(){
		return(
			<div>
				<Header title="新增收货地址" leftIcon="fanhui" />
				<ul className="address-form">
					<li><label>收货人：</label><blockquote><input type="text" ref=""/></blockquote></li>
					<li><label>联系方式：</label><blockquote><input type="text" ref=""/></blockquote></li>
					<li><label>所在地区：</label><blockquote><input type="text" ref=""/></blockquote></li>
					<li><label>详细地址：</label><blockquote><input type="text" ref="" placeholder="街道、楼牌号等"/></blockquote></li>
					<li><label>设为默认地址<p>注：设为默认后，下单时会使用该地址</p></label><blockquote></blockquote></li>
				</ul>
				<a href="/address-save" className="add-address-btn">保存并使用</a>
			</div>
		)
	}
}

export default AddressAdd;