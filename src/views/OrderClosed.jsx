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
        console.log('订单结算..');
        this.state = {
            data1:{
            	address:"",
            	couponUserList:"",
            	goodsTotalFee:"",
            	orderTotalFee:"",
            	storeVOList:"",
            	totalShipFee:"ccc"
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
			console.log(cookie.load('tokenid'));
            Tool.fetch(this,{
                url: `${URLS.OrderClosed}`,
                type: "post",
                body:JSON.stringify({"cartFlag":"1"}),
                headers: headers,
                successMethod: function(json){
                    console.log(json);
                    //self.setState({data:json});
                    console.log(self.state.data1);
                    console.log(self.state.confirm.title);
        			console.log('订单结算数据返回..');
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