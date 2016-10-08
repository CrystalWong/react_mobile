import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';

/**
 * 模块入口
 * 
 * @class SetBill
 * @extends {Component}
 */
class SetBill extends Component {
    render() {
        return (
            <div>
                <Header title="设置发票信息" leftIcon="fanhui" />
                <div>内容</div>
            </div>
        );
    }
}

export default SetBill;