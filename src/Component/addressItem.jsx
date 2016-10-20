import React, {Component, PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls.js';
import {Tool, merged} from '../Tool';

export class AddressItem extends Component{
	constructor(props){
		super(props);
		console.log(props);
	}

	//设为默认地址
	addressDefault(e){
		e.stopPropagation(); 
        e.preventDefault();
		this.props.callbackDefault(this);
	}

	//编辑地址
	addressEdit(e){
		e.stopPropagation(); 
        e.preventDefault();
		console.log('edit')
	}

	//删除地址
	addressDel(e){
		e.stopPropagation(); 
        e.preventDefault();
		this.props.callbackDel(this);
	}

	setAddressInfo(){//保存每项地址信息
		this.props.saveAddressInfo({
			id: this.props.id,
			consigneeMobile: this.props.consigneeMobile,
			consigneeName: this.props.consigneeName,
			consigneeTelephone: this.props.consigneeTelephone,
			detailInfo: this.props.detailInfo,
			locationInfo: this.props.locationInfo,
			memberId: this.props.memberId
		});
		Tool.history.goBack();
	}

	render(){
		let {consigneeName,consigneeMobile,detailInfo,type} = this.props;
		return(
			<li onClick={this.setAddressInfo.bind(this)}>
				<div className="address-msg">
					<h6><span>{consigneeName}</span><span>{consigneeMobile}</span>{this.props.type==1 ? <em>默认</em> : ''}</h6>
					<p>{detailInfo}</p>
				</div>
				<div className="address-operation">
					<span className={this.props.type==1? 'current on' : 'current'} onClick={this.addressDefault.bind(this)}>设为默认</span>
					<span className="ao-del" onClick={this.addressDel.bind(this)}>删除</span>
					<span className="ao-edit" onClick={this.addressEdit.bind(this)}>编辑</span>
				</div>
			</li>
		)
	}
}