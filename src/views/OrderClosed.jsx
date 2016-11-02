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
            console.log('本地调试...');
            console.log(props.address);
            this.getQueryString = (name) => {
    		        let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    		        let r = window.location.href.split("?")[1]?window.location.href.split("?")[1].match(reg):null;
    		        if (r != null) return decodeURIComponent(r[2]);
    		        return "";
    		};
            let choseAddress;
            props.address.consigneeName==undefined?choseAddress={consigneeName:""}:choseAddress=props.address;
            this.state = {
                choseAddress:choseAddress,
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
                	 storeVOList: [],
                     errorGoodsList: []
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
    		let headers = COMMON_HEADERS_POST('tokenid', cookie.load('tokenid')),
                self=this,
                data = {},
                params = "";
            if(this.getQueryString('cartParamJson')){
                // cartParamJson = "cartParamJson="+this.getQueryString('cartParamJson');
                params = this.getQueryString('cartParamJson');
            }else{
                params = JSON.stringify({"cartFlag":"1"});
            }    

            data = {
                url: `${URLS.OrderClosed}`,
                type: "post",
                headers: headers,
                body: params,
                tokenid: cookie.load('tokenid'),
                successMethod: function(json){
                    self.setState({ajdata:json});
                    if(json.address==null||json.address==undefined||json.address==""){
                        self.state.isShow.adOn="none";
                        self.state.isShow.adOff="block";
                    }
                }
            }
            // if(!this.getQueryString('cartParamJson'))data.body = JSON.stringify({"cartFlag":"1"});

            
            Tool.fetch(this,data);
            this.submitOrder = () => {
            	let goodsListVO=[];

                this.state.ajdata.storeVOList.forEach(function(item){
                    item.goodsVOList.forEach(function(it){
                        goodsListVO.push(it);
                    });
                });

    //         	for(let v of self.state.ajdata.storeVOList){
    //                 for(let b of v.goodsVOList){
    //                     goodsListVO.push(b);
    //                 }
				// }
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
	                successMethod: function(json,status){
                        if(json.errorList==undefined){
                                if(status == 200){
                                     Tool.fetch(this,{//获取支付地址
                                        url: `${URLS.TOPAY}${json.id}?source=WAP`,
                                        type: "post",
                                        headers: headers,
                                        successMethod: function(json){
                                            console.log(json);
                                            location.href=json.wapPayUrl;
                                        }
                                    });
                                }
                            // 
                        }else{
                            // if(json.errorType=="1"){
                            //     alert("部分库存不足");
                            // }else if(json.errorType=="2"){
                            //     alert("商品不再配送区域");
                            // }else if(json.errorType=="3"){
                            //     alert("商品库存不足");
                            // }
                            self.setState({
                                confirm: {
                                    title: "",
                                    content: "以下商品库存不足或已下架，无法继续购买",
                                    leftText: "我知道了",
                                    leftMethod: function() {
                                        Tool.history.goBack();
                                    },
                                    display: "block"
                                }
                            });
                        }
	                }
	            });
            }
            this.choseAddress=()=>{
            	// location.href="/address";
                Tool.history.push("/address");
            }
            this.goBack=()=>{
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
                        self.setState({confirm:{display:"none"}});
                    },
                    display: "block"
                }
            });
            }
            // window.onbeforeunload=function(){
            //   return "快住手！！别点下去！！";
            // };
        }
    // componentDidUpdate(){
    //     alert(this.refs.h3.innerText)
    // }    
    render() {
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
						<dd><a href="/setbill"><span>不开发票</span><img src={require("../images/orderclosed/fp@2x.png")}/></a></dd>

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
                    <a className="tanm" style={{display: this.state.ajdata.errorGoodsList.length>=1?'block':'none'}}>
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
