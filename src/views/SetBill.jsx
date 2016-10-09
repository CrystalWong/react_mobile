import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/setbill';
/**
 * 模块入口
 * 
 * @className SetBill
 * @extends {Component}
 */
class SetBill extends Component {
    render() {
        return (
            <div>
                <header className="common-header">
                    <div className="left-arrow"><a><i></i></a></div>
                    <h2 className="title">订单结算</h2></header>
                    <div className="setBill">
                    	<div className="fptype">
			              	<h3>
			              		发票类型
			              	</h3>
			              	<div className="typediv">
			              		<a data-info="">不需要</a>
			               		<a data-info="" className="active">电子发票</a>
			               		<a data-info="">纸质发票</a>
			              	</div>
		               </div>
		               <div className="fptype1">
			              	<h3>
			              		发票抬头
			              	</h3>
			              	<div className="typediv1">
			              		<a data-info="per"><span className="checked"></span><span>个人</span></a>
			               		<a data-info="comp"><span className="unchecked"></span><span>单位</span></a>
			               		<p><input type="text" id="fptt"/></p>
			              	</div>
		               </div>
		               <div className="bootm">
							<a className="confpinfo">确定</a>
						</div>
                    </div>
               
            </div>
        );
    }
}

export default SetBill;