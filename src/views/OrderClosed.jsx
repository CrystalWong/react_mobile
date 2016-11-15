import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {Link } from 'react-router';
import '../Style/orderclosed';
import {Tool, merged} from '../Tool';
import {Header} from '../Component/common/index';
import URLS from '../constants/urls';
import {Toast,Confirm,AjaxTip} from '../Component/common/Tip';
import {COMMON_HEADERS_POST} from '../constants/headers';
import cookie from 'react-cookie';
import {OrderClosedList} from '../Component/orderClosedList';
import {OrderClosedItemSunCancel} from '../Component/orderClosedItemSunCancel';
/**
 * 模块入口
 * 
 * @className OrderClosed
 * @extends {Component}
 */
class OrderClosed extends Component {
    constructor(props) {
        super(props);
        Tool.loginChecked(this);
        console.log('代理到本地12...');
        console.log(props.address);
        this.getQueryString = (name) => {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.href.split("?")[1] ? window.location.href.split("?")[1].match(reg) : null;
            if (r != null) return decodeURIComponent(r[2]);
            return "";
        };
        let choseAddress;
        props.address.consigneeName == null || props.address.consigneeName == undefined ? choseAddress = {
            consigneeName: ""
        } : choseAddress = props.address;
        console.log(choseAddress);
        this.state = {
            tipContent: '',
            display: '',
            choseAddress: choseAddress,
            setBillData: {
                fptype: this.getQueryString("fptype") || 0,
                fptype1: this.getQueryString("fptype1") || 0,
                fptt: this.getQueryString("fptt") || ""
            },
            ajdata: {
                getLiu: function(e) {
                    console.log('留言参数拼装..');
                },
                address: {
                    consigneeName: ""
                },
                totalShipFee: "",
                goodsTotalFee: "",
                orderTotalFee: "",
                storeVOList: [],
                errorGoodsList: []
            },
            isShow: {
                adOn: 'block',
                adOff: 'none'
            },
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
            maskDisplay: "block"
        };
        let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),
            self = this,
            data = {},
            params = "";
        if (this.getQueryString('cartParamJson')) {
            params = JSON.parse(this.getQueryString('cartParamJson'));
            params.addressId=props.address.id;
            params = JSON.stringify(params);
            console.log(params);
        } else {
            params = JSON.stringify({
                "cartFlag": "1",
                "addressId": props.address.id
            });
        }
        //this.setState({ajaxDisplay: "block",maskDisplay: "block"});
        data = {
            url: `${URLS.OrderClosed}`,
            type: "post",
            headers: headers,
            body: params,
            tokenid: cookie.load('tokenid'),
            successMethod: function(json, status) {
                if (status == 200) {
                    //self.setState({ajaxDisplay: "none",maskDisplay: "none"});
                    if (json.address == null) {
                        self.state.isShow.adOn = "none";
                        self.state.isShow.adOff = "block";
                        json.address = self.state.ajdata.address;
                    }
                    self.setState({
                        ajdata: json
                    });
                } else {
                    self.setState({
                        tipContent: json.message,
                        display: 'toasts'
                    });
                }
            }
        }
        Tool.fetch(this, data);
        this.submitOrder = () => {
            console.log('提交订单..');
            if (props.address.id == undefined || this.state.ajdata.address.id == undefined) {
                // alert('没地址,调试..');
                return;
            }
            let goodsListVO = [];

            this.state.ajdata.storeVOList.forEach(function(item) {
                item.goodsVOList.forEach(function(it) {
                    goodsListVO.push(it);
                });
            });
            let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),
                self = this,
                paramData = {
                    "addressVO": {
                        "addressId": props.address.id || this.state.ajdata.address.id
                    },
                    "couponList": [], //优惠券列表
                    "goodsListVO": goodsListVO,
                    "invoiceVO": {
                        "invoiceClass": this.state.setBillData.fptype1,
                        "invoiceType": this.state.setBillData.fptype,
                        "invoiceHead": this.state.setBillData.fptt,
                    },
                    remarkList:liuList
                };
            this.setState({ajaxDisplay: "block",maskDisplay: "block"});           
            Tool.fetch(this, {
                url: `${URLS.SubmitOrder}`,
                type: "post",
                body: JSON.stringify(paramData),
                headers: headers,
                successMethod: function(json, status) {
                    if (json.errorList == undefined) {
                        if (status == 200) {
                            self.setState({ajaxDisplay: "block",maskDisplay: "block"});   
                            Tool.fetch(self, { //获取支付地址
                                url: `${URLS.TOPAY}${json.id}?source=WAP`,
                                type: "post",
                                headers: headers,
                                successMethod: function(json) {
                                    location.href = json.wapPayUrl;
                                }
                            });
                        }
                        // 
                    } else {
                        let imgStr='';
                        json.errorList.forEach(function(item){
                            imgStr+='<img src="'+item.goodsMainPhoto+'">';
                        });
                        if(json.errorType=="1"){
                            self.setState({
                                confirm: {
                                    title: "以下商品库存不足或已下架，无法继续购买",
                                    content: imgStr,
                                    leftText: "我知道了",
                                    rightText: "",
                                    leftMethod: function() {
                                        self.setState({
                                            confirm: {
                                                display: "none"
                                            },
                                            maskDisplay:"none"
                                        });
                                        Tool.history.goBack();
                                    },
                                    display: "block"
                                },
                                maskDisplay:"block"
                            });
                        }else if(json.errorType=="2"){
                            //alert("商品不再配送区域");
                            self.setState({
                                confirm: {
                                    title: "商品不在配送区域",
                                    content: imgStr,
                                    leftText: "我知道了",
                                    rightText: "",
                                    leftMethod: function() {
                                        self.setState({
                                            confirm: {
                                                display: "none"
                                            },
                                            maskDisplay:"none"
                                        });
                                    },
                                    display: "block"
                                },
                                maskDisplay:"block"
                            });
                        }else if(json.errorType=="3"){
                            //alert("商品库存不足");
                            self.setState({
                                confirm: {
                                    title: "以下商品库存不足或已下架，无法继续购买",
                                    content: imgStr,
                                    leftText: "我知道了",
                                    rightText: "",
                                    leftMethod: function() {
                                        self.setState({
                                            confirm: {
                                                display: "none"
                                            },
                                            maskDisplay:"none"
                                        });
                                        Tool.history.goBack();
                                    },
                                    display: "block"
                                },
                                maskDisplay:"block"
                            });
                        }
                    }
                }
            });
        }
        this.choseAddress = () => {
            Tool.history.push("/address");
        }
        //留言参数
        let liuObj={},liuList=[];
        this.getLiu = (e) => {
            var value=e.target.getAttribute('value');
            var supplier_payment=e.target.getAttribute('class');
            console.log(liuList.length);
            if(liuList.length>0){
                for(var i=0;i<liuList.length;i++){
                    console.log(liuList[i].supplier_payment!=supplier_payment);
                    if(liuList[i].supplier_payment!=supplier_payment){
                        liuList.push({'supplier_payment':supplier_payment,'remark':value});
                    }else{
                        liuList[i].remark=value;
                    }
                }
            }else{
                liuList.push({'supplier_payment':supplier_payment,'remark':value});
            }
            history.state.remark='test';
            console.log(liuList);
        }
        this.goBack = () => {
            self.setState({
                confirm: {
                    title: "",
                    content: "东西这么实惠，真的要离我而去么",
                    leftText: "去意已决",
                    leftMethod: function() {
                        Tool.history.goBack();
                    },
                    rightText: "我再想想",
                    rightMethod: function() {
                        self.setState({
                            confirm: {
                                display: "none"
                            },
                            maskDisplay:"none"
                        });
                    },
                    display: "block"
                },
                maskDisplay:"block"
            });
        }
    }
    toastDisplay(state) {
        this.setState({
            display: state
        });
    }
    window.addEventListener("beforeunload", function (e) {
            alert('卸载该页面..');
    });
    render() {
        console.log('------------------------------render.....');
        console.log(this.state.maskDisplay);
        let fpInfoShow={
            '0':'不开发票',
            '1':'个人发票',
            '2':'单位发票'
        },fpInfoTypeShow={
            '0':'',
            '1':'电子',
            '2':'纸质'
        },
        linkBill='/setbill?cartParamJson='+this.getQueryString('cartParamJson');
        return (
            <div>
                <header className="common-header">
                    <div className="left-arrow" onClick={this.goBack}>
                        <a>
                            <i></i>
                        </a>
                    </div>
                    <h2 className="title">订单结算</h2>
                </header>
                <div className="orderClose">
                	<div style={{display: this.state.isShow.adOff}} className="address" onClick={this.choseAddress.bind(this)}>
						<img src={require('../images/orderclosed/add@2x.png')} alt="添加"/> 新增收货地址
	                </div>
	                <div className="address1" style={{display: this.state.isShow.adOn}} onClick={this.choseAddress.bind(this)}>
	                	<img src={require("../images/orderclosed/address@2x.png")}/>
	                	<div className="adinfo">
	                		<h3>{this.state.choseAddress.consigneeName!=''&&this.state.ajdata.address!=null?this.state.choseAddress.consigneeName:this.state.ajdata.address.consigneeName}&nbsp;
                            {this.state.choseAddress.consigneeMobile!=undefined&&this.state.ajdata.address!=null?this.state.choseAddress.consigneeMobile:this.state.ajdata.address.consigneeMobile}</h3>
                            <span>地址：</span><span>{this.state.choseAddress.locationInfo!=undefined&&this.state.ajdata.address!=null?this.state.choseAddress.locationInfo+this.state.choseAddress.detailInfo:(this.state.ajdata.address.detailInfo?(this.state.ajdata.address.locationInfo+this.state.ajdata.address.detailInfo):"请选择地址")}</span>
	                	</div>
	                </div>
				    <OrderClosedList {...this.state.ajdata} getLiu={this.getLiu.bind(this)}/>
					<dl className="line">
						<dt>配送方式</dt>
						<dd>快递</dd>
					</dl>
					<dl className="line fp">
						<dt>发票</dt>
						<dd><Link to={linkBill}><span>{fpInfoTypeShow[this.state.setBillData.fptype]}{this.state.setBillData.fptype=='0'?'不开发票':fpInfoShow[this.state.setBillData.fptype1]}<em className="fpttshow">{this.state.setBillData.fptt}</em></span><img src={require("../images/orderclosed/fp@2x.png")}/></Link></dd>

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
                    <a className="tanm" style={{display: this.state.ajdata.errorGoodsList.length>=1?'inline-block':'none'}}>
                                {
                                    this.state.ajdata.errorGoodsList.map((item,index)=>
                                        <OrderClosedItemSunCancel key={index} {...item}/>
                                    )
                                }
                    </a>
                </div>
            	<div className="bootm">
					<a className="heji">合计:<span>¥{this.state.ajdata.orderTotalFee}</span></a>
					<a className="subbtn" onClick={this.submitOrder.bind(this)}>提交订单</a>
				</div>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} parent={this} />
				<Confirm  {...this.state.confirm}/>
                <AjaxTip display={this.state.ajaxDisplay} />
                <div className="mask" style={{display: this.state.maskDisplay}}></div>
		
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
