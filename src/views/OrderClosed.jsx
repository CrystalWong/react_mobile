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
        console.log(2222222222222222222222222222);
        this.getQueryString = (name) => {
		        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		        let r = window.location.search.substr(1).match(reg);
		        if (r != null) return decodeURIComponent(r[2]);
		        return "";
		};
        this.state = {
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
                	json={
                        "storeVOList": [
                            {
                                "storeId": "IMHZS2016080502804",
                                "payType": 1,
                                "goodsVOList": [
                                    {
                                        "goodsId": "GDSKU201610100000002071",
                                        "groupId": "GDG201610100000001120",
                                        "goodsName": "单个商品上下架",
                                        "goodsPrice": 5,
                                        "storePrice": 5,
                                        "discountedPrice": null,
                                        "goodsMainPhoto": "http://image1.jyall.com/v1/tfs/T1pabTBghv1RXrhCrK.jpg",
                                        "paymentMethod": 1,
                                        "paymentMethodDesc": "全额",
                                        "count": 1,
                                        "enjoyedPromotionDesc": null,
                                        "payment": 5,
                                        "actualPayment": null,
                                        "instalmentPayment": null,
                                        "bookCode": null,
                                        "bookCodeAccount": null,
                                        "industryId": null,
                                        "goodsChoiceType": 2,
                                        "isSend": "1",
                                        "storeVO": {
                                            "storeId": "IMHZS2016080502804",
                                            "storeName": "X-小狗电器（北京）有限公司",
                                            "storePhone": null
                                        },
                                        "promotionVO": null,
                                        "appointmentOrderId": null,
                                        "appointmentOrderList": null,
                                        "templateId": "af1d3c2cb5714fab82c9c1a623f0983c",
                                        "goodsWeight": "",
                                        "goodsVolume": "",
                                        "spec": "",
                                        "partnerSkuId": "",
                                        "upScale": 1.03,
                                        "commissionBusinessId2": null,
                                        "activityId": null,
                                        "cooperationMode": 0
                                    }
                                ]
                            }
                        ],
                        "totalShipFee": 5,
                        "address": {
                            "id": "1300c98ebf634b83a91215000c78224e",
                            "provinceId": "1003",
                            "cityId": "10003",
                            "countyId": "100043",
                            "townId": "116971",
                            "areaId": null,
                            "detailInfo": "sdfsdfsdf",
                            "consigneeTelephone": null,
                            "consigneeMobile": "15001191549",
                            "consigneeName": "sdfs",
                            "zip": null,
                            "memberId": "HYS000705",
                            "memberUsername": "HYS15810341mq",
                            "type": 1,
                            "status": null,
                            "createTime": 1476288000000,
                            "locationInfo": null
                        },
                        "orderTotalFee": 10,
                        "couponUserList": [],
                        "goodsTotalFee": 5
                    }
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
				        "addressId": this.state.ajdata.address.id
				    },
				    "couponList": [],//优惠券列表
				    "goodsListVO": goodsListVO,
				    "invoiceVO": {
				        "invoiceType": this.state.setBillData.fptype,
				        "invoiceCompanyName": this.state.setBillData.fptt
				    }
				};
	            Tool.fetch(this,{
	                url: `${URLS.SubmitOrder}`,
	                type: "post",
	                body:JSON.stringify(paramData),
	                headers: headers,
	                successMethod: function(json){
	                }
	            });
            }
            this.choseAddress=()=>{
            	location.href="/";
            }
        }
    render() {
        return (

            <div>
            	<Header title="订单结算" leftIcon="fanhui" />
                <div className="orderClose">
                	<div style={{display: this.state.isShow.adOff}} className="address" onClick={this.choseAddress.bind(this)}>
						<img src="src/images/orderclosed/add@2x.png" alt="添加"/> 新增收货地址
	                </div>
	                <div className="address1" style={{display: this.state.isShow.adOn}}>
	                	<img src="src/images/orderclosed/address@2x.png"/>
	                	<div className="adinfo">
	                		<h3>{this.state.ajdata.address.consigneeName}&nbsp;{this.state.ajdata.address.consigneeMobile}</h3>
	                		<span>地址：</span><span>{this.state.ajdata.address.detailInfo}</span>
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
