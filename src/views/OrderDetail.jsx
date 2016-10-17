import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/orderdetail.css';
import {COMMON_HEADERS_POST} from '../constants/headers';
import cookie from 'react-cookie';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';
import {OrderClosedList} from '../Component/orderClosedList';

/**
 * 模块入口
 * 
 * @class OrderDetail
 * @extends {Component}
 */
class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.getQueryString = (name) => {
                let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
                let r = window.location.search.substr(1).match(reg);
                if (r != null) return decodeURIComponent(r[2]);
                return "";
        };
        this.state = {
            ajdata:{
                 address:{consigneeName:""},
                 totalShipFee:"",
                 goodsTotalFee:"",
                 orderTotalFee:"",
                 storeVOList: []
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
            this.choseAddress=()=>{
                location.href="/";
            }
        }
    render() {
        return (
            <div className="order-detail">
                <Header title="全部订单" leftIcon="fanhui" />
                <div className="num">
                    <p className="ordernum">订单号:39483903948483030</p>
                    <p className="orderstate">等待发货</p>
                </div>
                <div className="address1">
                    <div className="adinfo">
                    <p>张小明&nbsp;15121345566<span>默认</span></p>
                        <span>地址：</span><span>北京市北京市东城区广渠门外南街8号楼金色家园大厦金色家园大厦</span>
                    </div>
                </div>
                <div className="orderClose">
                    <OrderClosedList {...this.state.ajdata}/>
                </div>
                <dl className="line"><dt>支付方式</dt><dd>在线支付</dd></dl>
                <dl className="line"><dt>配送方式</dt><dd>快递</dd></dl>
                <dl className="line"><dt>发票</dt><dd>不开发票</dd></dl>
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
                <div className="jinediv">
                        <dl className="line jine">
                            <dt></dt>
                            <dd>实付款:<span>¥{this.state.ajdata.goodsTotalFee}</span></dd>
                        </dl>
                        <dl className="line jine">
                            <dt></dt>
                            <dd style={{color: '#D4D1D1'}}>下单时间:2015-11-06 14:54:23</dd>
                        </dl>
                </div>
            </div>
        );
    }
}

export default OrderDetail;