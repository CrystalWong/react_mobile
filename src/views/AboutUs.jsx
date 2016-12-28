import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/RegisterPro.css';

/**
 * 关于我们
 * 
 * @class AboutUs
 * @extends {Component}
 */
class AboutUs extends Component {
    render() {
        return (
            <div className="about-us">
               <Header title="关于我们" leftIcon="fanhui" />
               <div className="">金色家园网v2.0.0</div>
               <p></p>
               <p>© 2016 金色家园网 版权所有</p>
            </div>
        );
    }
}

export default RegisterPro;
process.env.NODE_ENV !== 'production' && module.hot.accept();