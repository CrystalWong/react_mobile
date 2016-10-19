import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import '../Style/orderclosed';
import {Tool, merged} from '../Tool';
import {Header} from '../Component/common/index';
import URLS from '../constants/urls';
import {Toast,Confirm} from '../Component/common/Tip';
import {COMMON_HEADERS_POST} from '../constants/headers';
import cookie from 'react-cookie';
import {OrderClosedList} from '../Component/orderClosedList';
/**
 * 模块入口
 * 
 * @className OrderClosed
 * @extends {Component}
 */
class OrderClosed extends Component {
	    constructor(props) {
        super(props);
        console.log(2222222222222222222222222222);
        console.log(props.address);
        this.getQueryString = (name) => {
		        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		        let r = window.location.search.substr(1).match(reg);
		        if (r != null) return decodeURIComponent(r[2]);
		        return "";
		};
        this.state = {
            choseAddress:props.address,
        	setBillData:{
        		fptype:this.getQueryString("fptype")||"",
				fptype1:this.getQueryString("fptype1")||"",
				fptt:this.getQueryString("fptt")||""
        	},
            ajdata:{
            	 address:{consigneeName:""},
            	 totalShipFee:"",
            	 goodsTotalFee:"",
            	 orderTotalFee:"",
            	 storeVOList: []
            },
            isShow:{
            	adOn:'block',
            	adOff:'none'
            },
            confirm: {
            	title: "是否确认拨打此电话？",
            	content: "刘德华 13409090909", 
            	leftText: "取消",
            	leftMethod: function(){
            		alert("取消");
            	},
            	rightText: "确定",
            	rightMethod: function(){
            		alert("确定");
            	},
            	display: "none"
            }
        };
			let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),self=this;
            Tool.fetch(this,{
                url: `${URLS.OrderClosed}`,
                type: "post",
                body:JSON.stringify({"cartFlag":"1"}),
                headers: headers,
                successMethod: function(json){
                    self.setState({ajdata:json});
                    if(json.address==null||json.address==undefined||json.address==""){
                    	self.state.isShow.adOn="block";
                    	self.state.isShow.adOff="none";
                    }
                }
            });
            this.submitOrder = () => {
            	let goodsListVO=[];
            	for(let v of this.state.ajdata.storeVOList){
					for(let b of v.goodsVOList){
						goodsListVO.push(b);
					}
				}
				console.log(this.state);
            	let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),self=this,
            	paramData={
				    "addressVO": {
				        "addressId": props.address.id||this.state.ajdata.address.id
				    },
				    "couponList": [],//优惠券列表
				    "goodsListVO": goodsListVO,
				    "invoiceVO": {
				        "invoiceType": this.state.setBillData.fptype||0,
				        "invoiceCompanyName": this.state.setBillData.fptt
				    }
				};
	            Tool.fetch(this,{
	                url: `${URLS.SubmitOrder}`,
	                type: "post",
	                body:JSON.stringify(paramData),
	                headers: headers,
	                successMethod: function(json){
                        if(json.errorList.length){
                            self.setState({confirm:{display: "block"}});
                        }else{
                            location.href="";
                        }
	                }
	            });
            }
            this.choseAddress=()=>{
            	location.href="/address";
            }
            this.goBack=()=>{
                location.href="";
            }
            // window.onbeforeunload=function(){
            //   return "快住手！！别点下去！！";
            // };
        }
    render() {
        console.log(this.state);
        return (

            <div>
            	<Header leftIcon="fanhui" title="订单结算" onClick={this.goBack} />
                <div className="orderClose">
                	<div style={{display: this.state.isShow.adOff}} className="address" onClick={this.choseAddress.bind(this)}>
						<img src="src/images/orderclosed/add@2x.png" alt="添加"/> 新增收货地址
	                </div>
	                <div className="address1" style={{display: this.state.isShow.adOn}} onClick={this.choseAddress.bind(this)}>
	                	<img src="src/images/orderclosed/address@2x.png"/>
	                	<div className="adinfo">
	                		<h3>{this.state.choseAddress.consigneeName?this.state.choseAddress.consigneeName:this.state.ajdata.address.consigneeName}&nbsp;
                            {this.state.choseAddress.consigneeMobile?this.state.choseAddress.consigneeMobile:this.state.ajdata.address.consigneeMobile}</h3>
	                		<span>地址：</span><span>{this.state.choseAddress.locationInfo?this.state.choseAddress.locationInfo:this.state.ajdata.address.detailInfo}</span>
	                	</div>
	                </div>
				    <OrderClosedList {...this.state.ajdata}/>
					<dl className="line">
						<dt>配送方式</dt>
						<dd>快递</dd>
					</dl>
					<dl className="line fp">
						<dt>发票</dt>
						<dd><a href="/setbill"><span>不开发票</span><img src="src/images/orderclosed/fp@2x.png"/></a></dd>

					</dl>
					<div className="jinediv">
						<dl className="line jine">
							<dt>商品总金额</dt>
							<dd><span>¥{this.state.ajdata.goodsTotalFee}</span></dd>
						</dl>
						<dl className="line jine">
							<dt>运费</dt>
							<dd><span>¥{this.state.ajdata.totalShipFee}</span></dd>
						</dl>
					</div>
                </div>
            	<div className="bootm">
					<a className="heji">合计:<span>¥{this.state.ajdata.orderTotalFee}</span></a>
					<a className="subbtn" onClick={this.submitOrder.bind(this)}>提交订单</a>
				</div>
				<Confirm  {...this.state.confirm}/>
                <div className="mask" style={{display: this.state.confirm.display}}></div>
		
            </div>
        );
    }
}

// export default OrderClosed;

function mapStateToProps(state,ownProps) {
  return {
    address: state.address
  };
}

export default connect(mapStateToProps)(OrderClosed);
