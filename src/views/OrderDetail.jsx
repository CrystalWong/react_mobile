import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/orderdetail';

/**
 * 模块入口
 * 
 * @class MyOrder
 * @extends {Component}
 */
class OrderDetail extends Component {
    render() {
        return (
            <div className="order-detail">
                <Header title="全部订单" leftIcon="fanhui" />
                <div>
                    内容
                </div>
            </div>
        );
    }
}

export default OrderDetail;