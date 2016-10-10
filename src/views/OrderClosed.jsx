import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/orderclosed';
/**
 * 模块入口
 * 
 * @className OrderClosed
 * @extends {Component}
 */
class OrderClosed extends Component {
    render() {
        return (
            <div>
                <header className="common-header">
                    <div className="left-arrow"><a><i></i></a></div>
                    <h2 className="title">订单结算</h2></header>
                    <div className="orderClose">
                    	<div className="address">
							<img src="src/images/orderclosed/add@2x.png" alt="添加"/> 新增收货地址
		                </div>
		                <div className="address1">
		                	<img src="src/images/orderclosed/address@2x.png"/>
		                	<div className="adinfo">
		                		<h3>张三&nbsp;15121345566</h3>
		                		<span>地址：</span><span>北京市东城区广渠门外南街金色家园网大厦8-0-1sdsdsdsd</span>
		                	</div>
		                </div>
		               <a className="tanm">
						    <dl className="clearfix">
						        <dt>
						            <img src="http://image1.jyall.com/v1/tfs/T1TqJ_BTWv1RXrhCrK.jpg"/>
						        </dt>
						        <dd>
						        	<p>艾理思 美式实木真皮配布沙发 Y630-19<br/><span>颜色分类:<span>红色</span></span></p>
		 				        <p className="price">¥ 9250.00<br/><span>x1</span></p>
						        </dd>
						    </dl>
						 <div className="liu"><label>留言:</label><input type="text"/></div>
						</a>
						<dl className="line">
							<dt>配送方式</dt>
							<dd>快递</dd>
						</dl>
						<dl className="line fp">
							<dt>发票</dt>
							<dd><span>不开发票</span><img src="src/images/orderclosed/fp@2x.png"/></dd>

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
						<div className="bootm">
							<a className="heji">合计:<span>¥100000</span></a>
							<a className="subbtn" href="">提交订单</a>
						</div>
                    </div>
                
            </div>
        );
    }
}

export default OrderClosed;