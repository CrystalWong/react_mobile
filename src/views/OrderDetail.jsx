import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Header} from '../Component/common/index';
import {Link } from 'react-router';
import '../Style/orderdetail.css';
import {COMMON_HEADERS_POST} from '../constants/headers';
import cookie from 'react-cookie';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';
import {OrderClosedListItemSun} from '../Component/orderClosedItemSun';
import {order} from '../Action/Order';
import {Toast,Confirm,AjaxTip} from '../Component/common/Tip';
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
            let r = window.location.href.split("?")[1] ? window.location.href.split("?")[1].match(reg) : null;
            if (r != null) return decodeURIComponent(r[2]);
            return "";
        };
        var urlId=this.getQueryString('orderId');
        console.log(urlId);
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
                    invoiceCompanyName:'',
                    invoiceType:''
                }
            },
            show0:"none",
            show1:"none",
            show2:"none",
            tipContent: '',
            display: '',
            confirm: {
                title: "",
                content: "",
                leftText: "取消",
                leftMethod: function() {
                    alert("取消");
                },
                rightText: "确定",
                rightMethod: function() {
                    alert("确定");
                },
                display: "none"
            },
            ajaxDisplay: "block",
            maskDisplay: "block",
            cancelDisplay:"none"
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
            "10":"未付款",//2
            "14":"分期付款中",
            "20":"已付款(待发货)",
            "30":"已发货",//2-2
            "40":"交易成功",//1
            "70":"交易关闭",//1-2
            "100":"快递配送中",
            "200":"自提点自提"
        }
            let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),self=this;
            Tool.fetch(this,{
                url: `${URLS.OrderDetail}/`+urlId,
                type: "get",
                body:"",
                headers: headers,
                successMethod: function(json){
                    self.setState({ajdata:json});
                    if(json.invoice!=null){
                        self.getkaipType(json.invoice.invoiceType);
                    }
                }
            });
            this.choseAddress=()=>{
                location.href="/";
            }
            //取消订单
            this.cancelOrder=()=>{
                self.setState({
                    cancelDisplay:"block",
                    maskDisplay: "block"
                });
            }
            this.cancelConfirm=(e)=>{
                let reason=e.target.getAttribute('class');
                if(reason!=''){
                    Tool.fetch(this,{
                        url: `${URLS.CancelOrder}`+urlId+"?closeReason="+reason,
                        type: "post",
                        body:JSON.stringify({"id":this.state.ajdata.id,"closeReason":reason}),
                        headers: headers,
                        successMethod: function(json,status){
                            if(status==200){
                                self.setState({
                                    cancelDisplay:"none",
                                    maskDisplay: "none"
                                });
                                location.reload();
                            }
                        }
                    });
                }
            }
            //确认收货
            this.confirmGetDoods=()=>{
                Tool.fetch(this,{
                    url: `${URLS.ConfirmGetDoods}`+urlId,
                    type: "post",
                    body:JSON.stringify({"id":this.state.ajdata.id}),
                    headers: headers,
                    successMethod: function(json){
                        console.log(json);
                    }
                });
            }
            //删除订单
            this.deleateOrder=()=>{
                self.setState({
                confirm: {
                    title: "",
                    content: "确定删除此订单?",
                    leftText: "确定",
                    leftMethod: function() {
                        Tool.fetch(this,{
                            url: `${URLS.DeleateOrder}`+urlId,
                            type: "post",
                            body:{},//JSON.stringify({"id":this.state.ajdata.id}),
                            headers: headers,
                            successMethod: function(json,status){
                                if(status==200){
                                    location.reload();
                                }
                            }
                        });
                    },
                    rightText: "取消",
                    rightMethod: function() {
                        self.setState({
                            confirm: {
                                display: "none"
                            },
                            maskDisplay: "none"
                        });
                    },
                    display: "block"
                },
                maskDisplay: "block"
            });
            }
        //查看物流详情
        this.toExpressinfo=()=> {
                this.props.saveOrderId({
                    orderId: this.state.ajdata.orderId
                });
                Tool.history.push("/expressinfo");

        }
        //付款
        this.payment=()=> {
                Tool.fetch(this, {
                    url: `${URLS.CORRELATION}`+this.state.ajdata.id,
                    type: "get",
                    headers: headers,
                    successMethod: function(str,status) {
                        console.log("payment====="+str.payCode);
                         Tool.fetch(self, { //获取支付地址
                              url: `${URLS.TOPAY}${str.payCode}?source=WAP`,
                              type: "post",
                              headers: headers,
                              successMethod: function(json) {
                                  location.href = json.wapPayUrl;
                              }
                          });
                    }
                });
        }
        //再次购买
        this.goShopping=()=> {
            let isLogin = 0,
                uKey = cookie.load('tokenid'),
                productList = this.state.ajdata.productList,
                groupSkuId = (productList[0].groupId==null?'':productList[0].groupId) + "_" + productList[0].goodsId,
                count = 1,self=this;
                console.log(productList[0]);
            this.more = true;
            if (uKey) isLogin = 1;
            if (this.state.num >= this.props.stock) {
                this.props.callback({
                    more: true
                });
                return;
            }
            Tool.fetch(this, {
                url: `${URLS.ADDITEM}${isLogin}/${uKey}/${groupSkuId}/${count}`,
                type: "post",
                headers: COMMON_HEADERS_POST,
                successMethod: function(json,status) {

                    if (json.flag == true) {
                        Tool.history.push("/shoppingcart");
                    } else {
                        console.log(json.message);
                        self.setState({
                            tipContent: json.message,
                            display: 'toasts'
                        });
                    }
                }
            });
        }

        this.toastDisplay=(state)=> {
            this.setState({
                display: state
            });
        }
        }
    render() {
        console.log(this.state.ajdata);
        console.log("-------------------------------");
        console.log((this.state.ajdata.periodOrderList)[0]);
        return (
            <div className="order-detail">
                <Header title="订单详情" leftIcon="fanhui" />
                <div className="num">
                    <p className="ordernum">订单号:{this.state.ajdata.orderId}</p>
                    <p className="orderstate">{this.orderState[this.state.ajdata.orderStatus]}</p>
                </div>
                <div className="address1">
                    <div className="adinfo">
                    <p>{this.state.ajdata.userAddress.trueName}&nbsp;{this.state.ajdata.userAddress.mobile}<span style={{display: this.state.ajdata.userAddress==1?"block":"none"}}>默认</span></p>
                        <span>地址：</span><span>{this.state.ajdata.userAddress.locationInfo}{this.state.ajdata.userAddress.detailInfo}</span>
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
                            <dt className="fpname">发票抬头</dt>
                            <dd className="fptype">{this.state.ajdata.invoice!=null?this.state.ajdata.invoice.invoiceHead:''}</dd>
                        </dl>
                </div>
                <div className="jinediv" style={{display: this.state.show2}}>
                        <dl className="line jine">
                            <dt>发票信息</dt>
                            <dd><Link to={this.state.ajdata.invoice.invoicePathAndName} className="elefp">{this.state.ajdata.invoice.invoicePathAndName==""?"电子发票":"查看电子发票"}</Link></dd>
                        </dl>
                        <dl className="line jine" style={{color: '#D4D1D1'}}>
                            <dt className="fpname">发票抬头</dt>
                            <dd className="fptype">{this.state.ajdata.invoice!=null?this.state.ajdata.invoice.invoiceHead:''}</dd>
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
                <div className="bootm" style={{display: this.state.ajdata.orderStatus==10?"block":"none"}}>
                    <a className="subbtn" onClick={this.payment.bind(this)}>付款</a>
                    <a className="subbtn1" onClick={this.cancelOrder.bind(this)}>取消订单</a>
                </div>
                <div className="bootm" style={{display: this.state.ajdata.orderStatus==30?"block":"none"}}>
                    <a className="subbtn" onClick={this.confirmGetDoods.bind(this)}>确认收货</a>
                    <a style={{display:"none"}} className="subbtn1" onClick={this.toExpressinfo.bind(this)}>查看物流</a>
                </div>
                <div className="bootm" style={{display: this.state.ajdata.orderStatus==40&&this.state.ajdata.productList[0].groupId!=null?"block":"none"}}>
                    <a className="subbtn" href="javascript:;" onClick={this.goShopping.bind(this)}>再次购买</a>
                </div>
                <div className="bootm" style={{display: this.state.ajdata.orderStatus==70?"block":"none"}}>
                    <a className="subbtn1" onClick={this.deleateOrder.bind(this)}>删除订单</a>
                </div>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} parent={this} />
                <Confirm  {...this.state.confirm}/>
                <div className="mask" style={{display: this.state.maskDisplay}}></div>
                <ul style={{display: this.state.cancelDisplay}}>
                    <li>请选择取消订单的原因</li>
                    <li onClick={this.cancelConfirm.bind(this)} className="6">改买其他商品</li>
                    <li onClick={this.cancelConfirm.bind(this)} className="7">从其他商家购买</li>
                    <li onClick={this.cancelConfirm.bind(this)} className="5">其他原因</li>
                </ul>
            </div>
        );
    }
}


function mapStateToProps(state,ownProps) {
  return {
    order: state.order
  };
}
function mapDispatchToProps(dispatch) {  
  return {
    saveOrderId: (action) => dispatch(order(action))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderDetail);