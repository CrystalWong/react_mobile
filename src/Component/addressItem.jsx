import React, {Component, PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls.js';
import {Tool, merged} from '../Tool';

export class AddressItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			addressType : this.props.type == 1 ? true : false
		}
	}

	//设为默认地址
	addressDefault(){
		console.log(this)
	}

	//编辑地址
	addressEdit(){
		console.log('edit')
	}

	//删除地址
	addressDel(){
		console.log('del')
	}

	render(){
		console.log(this.props)
		let {consigneeName,consigneeMobile,detailInfo,type} = this.props;
		return(
			<li>
				<div className="address-msg">
					<h6><span>{consigneeName}</span><span>{consigneeMobile}</span>{this.state.addressType ? <em>默认</em> : ''}</h6>
					<p>{detailInfo}</p>
				</div>
				<div className="address-operation">
					<span className={this.state.addressType ? 'current on' : 'current'} onClick={this.addressDefault.bind(this)}>设为默认</span>
					<span className="ao-del" onClick={this.addressDel.bind(this)}>删除</span>
					<span className="ao-edit" onClick={this.addressEdit.bind(this)}>编辑</span>
				</div>
			</li>
		)
	}
}