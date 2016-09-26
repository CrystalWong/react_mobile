import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';

/**
 * 模块入口
 * 
 * @class RegisterPro
 * @extends {Component}
 */
class RegisterPro extends Component {
    render() {
        return (
            <div>
                <Header title="用户服务协议" leftIcon="fanhui" />
                <div>内容</div>
            </div>
        );
    }
}

export default RegisterPro;