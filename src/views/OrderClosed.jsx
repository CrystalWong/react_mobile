import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';

/**
 * 模块入口
 * 
 * @class OrderClosed
 * @extends {Component}
 */
class OrderClosed extends Component {
    render() {
        return (
            <div>
                <Header title="订单结算" leftIcon="fanhui" />
                <div>内容</div>
            </div>
        );
    }
}

export default OrderClosed;