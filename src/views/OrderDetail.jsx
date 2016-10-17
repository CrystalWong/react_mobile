import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/orderdetail';

/**
 * 模块入口
 * 
 * @class OrderDetail
 * @extends {Component}
 */
class OrderDetail extends Component {
    render() {
        return (
            <div className="order-detail">
                <Header title="全部订单" leftIcon="fanhui" />
                <div className="num">
                    <p>订单号:39483903948483030</p>
                </div>
                <div className="address1">
                    <div className="adinfo">
                    <p>张小明&nbsp;15121345566<span>默认</span></p>
                        <span>地址：</span><span>北京市北京市东城区广渠门外南街8号楼金色家园大厦金色家园大厦</span>
                    </div>
                </div>
                <div className="product">
                    <ul>
                        <li>
                            <div>
                                <span></span>
                                <img src="src/images/orderdetail/chouyanji.png" />
                            </div>
                            <div>
                                <h3>德意(DE&E)269E+170G抽烟机环保包邮</h3>
                                <p>颜色分类：<span>银白色</span></p>
                            </div>
                            <div>
                                <span>￥2180.00</span>
                                <span>X1</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span></span>
                                <img src="src/images/orderdetail/chouyanji.png" />
                            </div>
                            <div>
                                <h3>德意(DE&E)269E+170G抽烟机环保包邮</h3>
                                <p>颜色分类：<span>银白色</span></p>
                            </div>
                            <div>
                                <span>￥2180.00</span>
                                <span>X1</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default OrderDetail;