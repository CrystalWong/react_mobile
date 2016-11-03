import React,{Component,PropTypes} from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import {Header,AddressSelect} from '../Component/common/index';
import {Toast} from '../Component/common/Tip';
import {Tool, merged} from '../Tool';
import '../Style/address';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST} from '../constants/headers';

class AddressAdd extends Component {
	constructor(props){
		super(props);
		console.log(props);
		this.state = {
			tipContent: '',
            display: '',
            addressSelectStyle: "100%",
            provinceId: "",
            province: "",
            cityId: "",
            city:"",
            countryId: "",
            country:"",
            xzId: "",
            xz:""
		};

		this.saveAddress = () => {
			let name = this.refs.name.value,
				contact = this.refs.contact.value,
				phone = "",
				area = this.refs.area.value,
				address = this.refs.address.value,
				current = this.refs.current.checked,
				self = this;
			if(!name){
				this.setState({tipContent : '收货人不能为空',display : 'toasts' });return;
			}
			if(!contact){
				this.setState({tipContent : '联系方式不能为空',display : 'toasts' });return;
			}
			if (/^[1][3-9][0-9]{9,9}$/.test(contact)){
				phone = this.refs.contact.value;
				contact = "";
			}
			if(!area){
				this.setState({tipContent : '所在地区不能为空',display : 'toasts' });return;
			}
			if(!address){
				this.setState({tipContent : '详细地址不能为空',display : 'toasts' });return;
			}
			let headers = COMMON_HEADERS_POST('Accept','application/json');
			Tool.fetch(this,{
                url: `${URLS.Address}/?_t=${cookie.load('tokenid')}`,//提交地址
                type: "post",
                headers: headers,
                body: '{"provinceId" : '+this.state.provinceId+',"cityId" : '+this.state.cityId+',"countyId" : '+this.state.countryId+',"townId" : '+this.state.xzId+',"areaId" : null,"detailInfo" : "'+ address +'","consigneeTelephone" : '+(contact?contact:null)+',"consigneeMobile" : '+(phone?phone:null)+',"consigneeName" : "'+ name +'","zip" : null,"memberId" : "'+cookie.load("userId")+'","memberUsername" : "'+cookie.load("name")+'","type" : '+ (current?1:2) +',"status" : null,"locationInfo" : null}',
                successMethod: function(json,status){
                	if(status == 200){
                		self.setState({ tipContent: '添加地址成功',display: 'toasts' });
                		setTimeout(function(){
                			Tool.history.goBack();
                		},1500);
                	}
                }
            });
            
		}
	}

	//toast
    toastDisplay(state){this.setState({display: state}); }

    addressSelect(){
    	this.setState({addressSelectStyle: "0"});
    }

    closeAddress(){
    	this.setState({addressSelectStyle: "100%"});
    }

    addressResult(data){//获取四级地址结果
    	this.setState({
    		addressSelectStyle: "100%",
            provinceId: data.provinceId,
            province: data.province,
            cityId: data.cityId,
            city: data.city,
            countryId: data.countryId,
            country: data.country,
            xzId: data.xzId,
            xz: data.xz
    	});
    }
    componentDidMount(){
    	let addressItem = this.props.address;
    	if(addressItem.from && addressItem.from == "edit"){
    		this.refs.contact.value = addressItem.consigneeMobile;
    		this.refs.name.value = addressItem.consigneeName;
    		this.refs.current.checked = (addressItem.type1 == 1)?true:false;
	    	this.setState({
	            provinceId: addressItem.provinceId,
	            province: addressItem.locationInfo,
	            cityId: addressItem.cityId,
	            countryId: addressItem.countryId,
	            xzId: addressItem.townId
	    	});
    	}
    }

	render(){
		return(
			<div>
				<Header title="新增收货地址" leftIcon="fanhui" />
				<ul className="address-form">
					<li><label>收货人：</label><blockquote><input type="text" ref="name" /></blockquote></li>
					<li><label>联系方式：</label><blockquote><input type="text" ref="contact"/></blockquote></li>
					<li><label>所在地区：</label><blockquote className="area-box"><input type="text" ref="area" value={`${this.state.province}${this.state.city}${this.state.country}${this.state.xz}`} readOnly="readonly" onClick={this.addressSelect.bind(this)} /></blockquote></li>
					<li><label>详细地址：</label><blockquote><input type="text" ref="address" placeholder="街道、楼牌号等"/></blockquote></li>
					<li><label>设为默认地址<p>注：设为默认后，下单时会使用该地址</p></label><blockquote className="pub_switch_box"><input type="checkbox" id="pub_switch_a1" className="pub_switch" ref="current" /><label htmlFor="pub_switch_a1"></label></blockquote></li>
				</ul>
				<a href="javascript:void(0)" className="add-address-btn" onClick={this.saveAddress.bind(this)}>保存</a>
				<Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
				<AddressSelect _style={this.state.addressSelectStyle} close = {this.closeAddress.bind(this)} addressResult={this.addressResult.bind(this)} />
				<div className="mask" style={{display: this.state.addressSelectStyle=="0"?"block":"none"}}></div>
			</div>
		)
	}
}

// export default AddressAdd;
function mapStateToProps(state,ownProps) {
  return {
    address: state.address
  };
}

export default connect(mapStateToProps)(AddressAdd);