import React,{Component,PropTypes} from 'react';
import {Header} from '../Component/common/index';
import {Toast} from '../Component/common/Tip';
import {Tool, merged} from '../Tool';
import '../Style/address';

class AddressAdd extends Component {
	constructor(props){
		super(props);
		this.state = {
			tipContent: '',
            display: ''
		};

		this.saveAddress = () => {
			let name = this.refs.name.value,
				contact = this.refs.contact.value,
				area = this.refs.area.value,
				address = this.refs.address.value,
				current = this.refs.contact.checked;
			if(!name){
				this.setState({tipContent : '收货人不能为空',display : 'toasts' });return;
			}
			if(!contact){
				this.setState({tipContent : '联系方式不能为空',display : 'toasts' });return;
			}
			if(!area){
				this.setState({tipContent : '所在地区不能为空',display : 'toasts' });return;
			}
			if(!address){
				this.setState({tipContent : '详细地址不能为空',display : 'toasts' });return;
			}
			/*
			Tool.fetch(this,{
                url: '',//提交地址
                type: "get",
                successMethod: function(json){
                    if(true){
                    	console.log('提交成功')
                    }else{
                        self.setState({ tipContent: json.message,display: 'toasts' });
                    }
                }
            });
            */
		}
	}

	//toast
    toastDisplay(state){this.setState({display: state}); }

	render(){
		return(
			<div>
				<Header title="新增收货地址" leftIcon="fanhui" />
				<ul className="address-form">
					<li><label>收货人：</label><blockquote><input type="text" ref="name"/></blockquote></li>
					<li><label>联系方式：</label><blockquote><input type="text" ref="contact"/></blockquote></li>
					<li><label>所在地区：</label><blockquote className="area-box"><input type="text" ref="area"/></blockquote></li>
					<li><label>详细地址：</label><blockquote><input type="text" ref="address" placeholder="街道、楼牌号等"/></blockquote></li>
					<li><label>设为默认地址<p>注：设为默认后，下单时会使用该地址</p></label><blockquote className="pub_switch_box"><input type="checkbox" id="pub_switch_a1" className="pub_switch" ref="current" /><label htmlFor="pub_switch_a1"></label></blockquote></li>
				</ul>
				<a href="javascript:void(0)" className="add-address-btn" onClick={this.saveAddress.bind(this)}>保存并使用</a>
				<Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
			</div>
		)
	}
}

export default AddressAdd;