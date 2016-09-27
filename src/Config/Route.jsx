import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import Login from '../views/Login'; //登录
import Register from '../views/Register'; //注册
import RegisterPro from '../views/RegisterPro'; //注册协议
import Yue from '../views/yue'; //预约
import Download from '../views/Download'; //预约
import RegisterPassword from '../views/RegisterPassword'; //设置密码
import {Tool, merged} from '../Tool';

/**
 * (路由根目录组件，显示当前符合条件的组件)
 * 
 * @class Roots
 * @extends {Component}
 */
class Roots extends Component {
    render() {
        return (
            <div className="route-div" id="route_div">{this.props.children}</div>
        );
    }
}
var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;
const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Login} />
            <Route path="register" component={Register} />
            <Route path="registerpd" component={RegisterPassword} />
            <Route path="registerpro" component={RegisterPro} />
            <Route path="yue" component={Yue} />
            <Route path="download" component={Download} />
        </Route>
    </Router>
);
Tool.rem();

export default RouteConfig;