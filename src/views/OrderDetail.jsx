import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/orderdetail.css';
import {COMMON_HEADERS_POST} from '../constants/headers';
import cookie from 'react-cookie';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';
import {OrderClosedListItemSun} from '../Component/orderClosedItemSun';

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
                productList:[],
                periodOrderList:[
                    {payModeMsg:""}
                ],
                orderId:"",
                userName:"",
                userPhone:"",
                orderStatus:"",
                userAddress:{
                    
                },
                invoice:{

                }
            },
            show0:"none",
            show1:"none",
            show2:"none"
        };
        //枚举类 开票类型
        this.getkaipType=(val)=>{
            val=Number(val);
            if(val==0){
                this.setState({"show0":"block"});
            }else if(val==1){
                this.setState({"show1":"block"});
            }else if(val==2){
                this.setState({"show2":"block"});
            }
        }
        this.orderState={
            "-1":"已删除",
            "10":"未付款",
            "14":"分期付款中",
            "20":"已付款(待发货)",
            "30":"已发货",
            "40":"交易成功",
            "70":"交易关闭",
            "100":"快递配送中",
            "200":"自提点自提"
        }
            let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),self=this;
            Tool.fetch(this,{
                url: `${URLS.OrderDetail}/82B355CCFEBD49408EC432DDD40690F6`,
                type: "get",
                body:"",
                headers: headers,
                successMethod: function(json){
                    self.setState({ajdata:json});
                    self.getkaipType(json.invoice.invoiceType);
                }
            });
            this.choseAddress=()=>{
                location.href="/";
            }
        }
    render() {
        console.log(this.state.ajdata);
        console.log("-------------------------------");
        console.log((this.state.ajdata.periodOrderList)[0]);
        return (
            <div className="order-detail">
                <Header title="全部订单" leftIcon="fanhui" />
                <div className="num">
                    <p className="ordernum">订单号:{this.state.ajdata.orderId}</p>
                    <p className="orderstate">{this.orderState[this.state.ajdata.orderStatus]}</p>
                </div>
                <div className="address1">
                    <div className="adinfo">
                    <p>{this.state.ajdata.userAddress.trueName}&nbsp;{this.state.ajdata.userAddress.mobile}<span>默认</span></p>
                        <span>地址：</span><span>{this.state.ajdata.userAddress.locationInfo}</span>
                    </div>
                </div>
                <div className="orderClose">
                            <a className="tanm">
                                <OrderClosedListItemSun {...this.state.ajdata.productList[0]}/>
                                <div className="liu"><label>留言:</label>{this.state.ajdata.remark}</div>
                            </a>
                </div>
                <dl className="line"><dt>支付方式</dt><dd>{this.state.ajdata.periodOrderList[0].payModeMsg}</dd></dl>
                <dl className="line"><dt>配送方式</dt><dd>快递</dd></dl>
                <dl className="line" style={{display: this.state.show0}}><dt>发票</dt><dd>不开发票</dd></dl>
                <div className="jinediv" style={{display: this.state.show1}}>
                        <dl className="line jine">
                            <dt>发票信息</dt>
                            <dd>纸质发票</dd>
                        </dl>
                        <dl className="line jine" style={{color: '#D4D1D1'}}>
                            <dt className="fpname">{this.state.ajdata.invoice.invoiceCompanyName}</dt>
                            <dd className="fptype">个人</dd>
                        </dl>
                </div>
                <div className="jinediv" style={{display: this.state.show2}}>
                        <dl className="line jine">
                            <dt>发票信息</dt>
                            <dd><a href="/" className="elefp">查看电子发票</a></dd>
                        </dl>
                        <dl className="line jine" style={{color: '#D4D1D1'}}>
                            <dt className="fpname">{this.state.ajdata.invoice.invoiceCompanyName}</dt>
                            <dd className="fptype">单位</dd>
                        </dl>
                </div>
                <div className="jinediv">
                        <dl className="line jine">
                            <dt>商品总金额</dt>
                            <dd><span>¥{this.state.ajdata.totalGoodsCost}</span></dd>
                        </dl>
                        <dl className="line jine">
                            <dt>运费</dt>
                            <dd><span>¥{this.state.ajdata.freight}</span></dd>
                        </dl>
                </div>
                <div className="jinediv">
                        <dl className="line jine">
                            <dt></dt>
                            <dd>实付款:<span>¥{this.state.ajdata.actualCost}</span></dd>
                        </dl>
                        <dl className="line jine">
                            <dt></dt>
                            <dd style={{color: '#D4D1D1'}}>下单时间:{Tool.formatSeconds(this.state.ajdata.orderDate)}</dd>
                        </dl>
                </div>
                <div className="bootm">
                    <a className="subbtn">确认收货</a>
                    <a className="subbtn1">查看物流</a>
                </div>
            </div>
        );
    }
}

export default OrderDetail;