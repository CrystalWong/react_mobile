import React, {Component, PropTypes} from 'react';
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
        this.state = {
            data1:{
            	// address:"",
            	// couponUserList:"",
            	// goodsTotalFee:"",
            	// orderTotalFee:"",
            	 storeVOList: [
        {
            "storeId": "IMHZS2016080501290",
            "payType": 1,
            "goodsVOList": [
                {
                    "goodsId": "IMGDSKU2016081821082114400001",
                    "groupId": "IMGDG2016081811592",
                    "goodsName": "美的/Midea MK-TM1502电热水壶 防烫 自动断电",
                    "goodsPrice": 115,
                    "storePrice": 115,
                    "discountedPrice": null,
                    "goodsMainPhoto": "http://image1.jyall.com/v1/tfs/T1cf__BgJT1RXrhCrK.jpg",
                    "paymentMethod": 1,
                    "paymentMethodDesc": "全额",
                    "count": 24,
                    "enjoyedPromotionDesc": null,
                    "payment": 2760,
                    "actualPayment": null,
                    "instalmentPayment": null,
                    "bookCode": null,
                    "bookCodeAccount": null,
                    "industryId": null,
                    "goodsChoiceType": 2,
                    "isSend": "1",
                    "storeVO": {
                        "storeId": "IMHZS2016080501290",
                        "storeName": "B-北京米扬方略科技发展有限公司",
                        "storePhone": null
                    },
                    "promotionVO": null,
                    "appointmentOrderId": null,
                    "appointmentOrderList": null,
                    "templateId": "IMFreightTemplateId201608050129000000",
                    "goodsWeight": "0.0",
                    "goodsVolume": "0.0",
                    "spec": "",
                    "partnerSkuId": "",
                    "upScale": 1.8,
                    "commissionBusinessId2": null,
                    "activityId": null
                }
            ]
        },
        {
            "storeId": "HZS201608120000000371",
            "payType": 1,
            "goodsVOList": [
                {
                    "goodsId": "GDSKU201610080000002062",
                    "groupId": "GDG201610080000001112",
                    "goodsName": "王萌用到的",
                    "goodsPrice": 500,
                    "storePrice": 1000,
                    "discountedPrice": null,
                    "goodsMainPhoto": "http://image1.jyall.com/v1/tfs/T1GzhTB4C_1RXrhCrK.jpg",
                    "paymentMethod": 1,
                    "paymentMethodDesc": "全额",
                    "count": 2,
                    "enjoyedPromotionDesc": null,
                    "payment": 2000,
                    "actualPayment": null,
                    "instalmentPayment": null,
                    "bookCode": null,
                    "bookCodeAccount": null,
                    "industryId": null,
                    "goodsChoiceType": 2,
                    "isSend": "1",
                    "storeVO": {
                        "storeId": "HZS201608120000000371",
                        "storeName": "欧阳测试家电",
                        "storePhone": null
                    },
                    "promotionVO": null,
                    "appointmentOrderId": null,
                    "appointmentOrderList": null,
                    "templateId": "f86c22134ce34a05a1a4ae3d7e67276f",
                    "goodsWeight": "12",
                    "goodsVolume": "12",
                    "spec": "",
                    "partnerSkuId": "",
                    "upScale": 1.03,
                    "commissionBusinessId2": null,
                    "activityId": null
                },
                {
                    "goodsId": "GDSKU201610080000002063",
                    "groupId": "GDG201610080000001113",
                    "goodsName": "得分王",
                    "goodsPrice": 500,
                    "storePrice": 1500,
                    "discountedPrice": null,
                    "goodsMainPhoto": "http://image1.jyall.com/v1/tfs/T1jyLTBjCg1RXrhCrK.jpg",
                    "paymentMethod": 1,
                    "paymentMethodDesc": "全额",
                    "count": 1,
                    "enjoyedPromotionDesc": null,
                    "payment": 1500,
                    "actualPayment": null,
                    "instalmentPayment": null,
                    "bookCode": null,
                    "bookCodeAccount": null,
                    "industryId": null,
                    "goodsChoiceType": 2,
                    "isSend": "1",
                    "storeVO": {
                        "storeId": "HZS201608120000000371",
                        "storeName": "欧阳测试家电",
                        "storePhone": null
                    },
                    "promotionVO": null,
                    "appointmentOrderId": null,
                    "appointmentOrderList": null,
                    "templateId": "f86c22134ce34a05a1a4ae3d7e67276f",
                    "goodsWeight": "11",
                    "goodsVolume": "11",
                    "spec": "",
                    "partnerSkuId": "",
                    "upScale": 1.03,
                    "commissionBusinessId2": null,
                    "activityId": null
                }
            ]
        }
    ]
            	// totalShipFee:"ccc"
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
                    //self.setState({data1:json});
                    // for(let v of json.storeVOList){
                    // 	for(let l of v.goodsVOList){
                    // 		console.log(l);
                    // 	}
                    // }
                }
            });
        }
    
    render() {
        return (
            <div>
            	<Header title="订单结算" leftIcon="fanhui" />
                <div className="orderClose">
                	<div className="address" onClick={()=>alert('您点击了新增收货地址')}>
						<img src="src/images/orderclosed/add@2x.png" alt="添加"/> 新增收货地址
	                </div>
	                <div className="address1">
	                	<img src="src/images/orderclosed/address@2x.png"/>
	                	<div className="adinfo">
	                		<h3>张三&nbsp;15121345566</h3>
	                		<span>地址：</span><span>北京市东城区广渠门外南街金色家园网大厦8-0-1sdsdsdsd</span>
	                	</div>
	                </div>
				    <OrderClosedList {...this.state.data1}/>
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
							<dd><span>¥98898</span></dd>
						</dl>
						<dl className="line jine">
							<dt>运费</dt>
							<dd><span>¥98898</span></dd>
						</dl>
					</div>
                </div>
            	<div className="bootm">
					<a className="heji">合计:<span>¥100000</span></a>
					<a className="subbtn" href="">提交订单</a>
				</div>
				<Confirm  {...this.state.confirm}/>
                <div className="mask" style={{display: this.state.confirm.display}}></div>
		
            </div>
        );
    }
}

export default OrderClosed;