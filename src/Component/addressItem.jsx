import React, {Component, PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls.js';
import {Tool, merged} from '../Tool';

export class AddressItem extends Component{
	constructor(props){
		super(props);
		this.state = {
			userId : Cookie.load('userId'),
			addressMsg : []
		}
		this.getAddress = () => {
			let _this = this;
			Tool.fetch(this,{
                url: URLS.Address + "/user/" + this.state.userId,
                type: "get",
                successMethod: function(json){
                	_this.setState({addressMsg : json});
                }
            });
		}
	}

	componentWillMount(){
		this.getAddress();
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
		let Dom = [];
		if(this.state.addressMsg.length > 0){
			let liItem = [];
			this.state.addressMsg.map((item,index) => {
				liItem.push(<li key={index}>
					<div className="address-msg">
						<h6><span>{item.consigneeName}</span><span>{item.consigneeMobile}</span><em>默认</em></h6>
						<p>{item.detailInfo}</p>
					</div>
					<div className="address-operation">
						<span className="current on" onClick={this.addressDefault.bind(this)}>设为默认</span>
						<span className="ao-del" onClick={this.addressDel.bind(this)}>删除</span>
						<span className="ao-edit" onClick={this.addressEdit.bind(this)}>编辑</span>
					</div>
				</li>)
			});
			Dom.push(<ul className="address-list">{liItem}</ul>)
		}else{
			Dom.push(<div className="no-address"><i className="na-ico"></i><p>收货地址还是空的快去新建地址吧</p></div>)
		}

		return(
			<div>
				{Dom}
			</div>
		)
	}
}