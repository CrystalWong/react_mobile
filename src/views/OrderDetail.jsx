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
                orderId:"",
                userName:"",
                userPhone:"",
                userAddress:{
                    
                }

            }
        };
            let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),self=this;
            Tool.fetch(this,{
                url: `${URLS.OrderDetail}/82B355CCFEBD49408EC432DDD40690F6`,
                type: "get",
                body:"",
                headers: headers,
                successMethod: function(json){
                    //console.log(json);
                    self.setState({ajdata:json});
                }
            });
            this.choseAddress=()=>{
                location.href="/";
            }
        }
    render() {
        console.log(this.state.ajdata.productList);
        return (
            <div className="order-detail">
                <Header title="全部订单" leftIcon="fanhui" />
                <div className="num">
                    <p className="ordernum">订单号:{this.state.ajdata.orderId}</p>
                    <p className="orderstate">{this.state.ajdata.payType}</p>
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
                                <div className="liu"><label>留言:</label><input type="text"/></div>
                            </a>
                </div>
                <dl className="line"><dt>支付方式</dt><dd>在线支付</dd></dl>
                <dl className="line"><dt>配送方式</dt><dd>快递</dd></dl>
                <dl className="line"><dt>发票</dt><dd>不开发票</dd></dl>
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
            </div>
        );
    }
}

export default OrderDetail;