import React,{Component,PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls.js';
import {Header} from '../Component/common/index';
import {AddressItem} from '../Component/addressItem';
import {Tool, merged} from '../Tool';
import '../Style/address';

class Address extends Component {
	constructor(props){
		super(props);
		this.state = {
			userId : Cookie.load('userId'),
			display : '',
			nolist : 'none',
			addressMsg : []
		};
		this.getAddress = () => {
			let _this = this;
			Tool.fetch(this,{
                url: URLS.Address + "/user/" + this.state.userId,
                type: "get",
                successMethod: function(json){
                	_this.setState({
                		addressMsg : json,
                		nolist : json.length > 0 ? 'none' : 'block'
                	});
                }
            });
		}
	}

	componentWillMount(){
		this.getAddress();
	}

	render(){
		return(
			<div>
				<Header title="管理收货地址" leftIcon="fanhui" />
				<ul className="address-list">
					{
						this.state.addressMsg.map((item,index) => 
							<AddressItem key={index}{...item} />
						)
					}
				</ul>
				<Nolist display={this.state.nolist} />
				<a href="/address-add" className="add-address-btn">+ 新增收货地址</a>
			</div>
		)
	}
}

var Nolist = React.createClass({
	render : function(){
		return(
			<div className="no-address" style={{display : this.props.display}}>
				<i className="na-ico"></i>
				<p>收货地址还是空的快去新建地址吧</p>
			</div>
		)
	}
});


export default Address;