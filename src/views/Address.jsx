import React,{Component,PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls.js';
import {Header} from '../Component/common/index';
import {AddressItem} from '../Component/addressItem';
import {Tool, merged} from '../Tool';
import {Toast,Confirm} from '../Component/common/Tip';
import {COMMON_HEADERS_POST} from '../constants/headers';
import '../Style/address';

class Address extends Component {
	constructor(props){
		super(props);
		this.state = {
			userId : Cookie.load('userId'),
			display : '',
			nolist : 'none',
			addressMsg : [],
			confirm: {
            	title: "",
            	content: "", 
            	leftText: "取消",
            	leftMethod: null,
            	rightText: "确定",
            	rightMethod: null,
            	display: "none"
            }
		};
		this.getAddress = () => {
			let _this = this;
			Tool.fetch(this,{
                url: URLS.Address + "/user/" + this.state.userId,
                type: "get",
                successMethod: function(json){
                	console.log(json);
                	_this.setState({
                		addressMsg : json,
                		nolist : json.length  > 0 ? 'none' : 'block'
                	});
                }
            });
		}
	}

	componentWillMount(){
		this.getAddress();
	}

	onChildDefault(child){
		let {memberId , id} = child.props,_this = this;
		let headers = COMMON_HEADERS_POST('tokenid', Cookie.load('tokenid'));
		let data = {
			"memberId" : memberId,
			"id" : id,
			"type" : 1
		}
		Tool.fetch(this,{
            url: URLS.Address,
            type: "put",
            body:JSON.stringify(data),
            headers: headers,
            successMethod: function(json){
            	console.log('成功设置为默认地址');
            	_this.getAddress();
            }
        });
	}

	// 删除
	callbackDel(child){
		let {id} = child.props,_this = this;
		this.setState({
			confirm : {
				title: "确定删除本地址吗",
            	leftText: "取消",
            	leftMethod: ()=>{
            		_this.setState({confirm : {display : 'none'}});
            	},
            	rightText: "确定",
            	rightMethod: ()=>{
            		Tool.fetch(this,{
			            url: URLS.Address + '/' + id,
			            type : "delete",
			            successMethod: function(json){
			            	console.log('删除成功');
			            	_this.getAddress();
			            	_this.state.confirm.leftMethod();
			            }
			        });
            	},
            	display: "block"
			}
		})
	}

	render(){
		return(
			<div>
				<Header title="管理收货地址" leftIcon="fanhui" />
				<ul className="address-list">
					{
						this.state.addressMsg.map((item,index) => 
							<AddressItem key={index}{...item} flag={this.state.flag} callbackDefault={this.onChildDefault.bind(this)}  callbackDel={this.callbackDel.bind(this)} />
						)
					}
				</ul>
				<Nolist display={this.state.nolist} />
				<a href="/address-add" className="add-address-btn">+ 新增收货地址</a>
				<Confirm  {...this.state.confirm}/>
	            <div className="mask" style={{display: this.state.confirm.display}}></div>
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