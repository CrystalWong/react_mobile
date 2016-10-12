import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/myorder';

/**
 * 模块入口
 * 
 * @class MyOrder
 * @extends {Component}
 */
class MyOrder extends Component {
    render() {
        return (
            <div className="my-order">
                <Header title="全部订单" leftIcon="fanhui" />
                <div>
                    内容
                </div>
            </div>
        );
    }
}

export default MyOrder;