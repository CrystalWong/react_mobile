import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute,Redirect, browserHistory, hashHistory } from 'react-router';

import Login from '../views/Login'; //登录
import Register from '../views/Register'; //注册
import RegisterPro from '../views/RegisterPro'; //注册协议
import Yue from '../views/yue'; //预约
import Center from '../views/Center'; //个人中心
import RegisterPassword from '../views/RegisterPassword'; //设置密码
import ShoppingCart from '../views/ShoppingCart'; //购物车
import OrderClosed from '../views/OrderClosed'; //订单结算
import SetBill from '../views/SetBill'; //设置发票信息
import {Tool, merged} from '../Tool';
import Address from '../views/Address'; //收货地址
import AddressAdd from '../views/Address_add'; //新增收货地址
import MyOrder from '../views/MyOrder'; //全部订单
import OrderDetail from '../views/OrderDetail'; //订单详情
import Appointment from '../views/Appointment'; //预约单
import ExpressInfo from '../views/ExpressInfo'; //物流详情


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

// const App = (props) => (
//   <div className="viewport">
//     {props.children}
//   </div>
// );

var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={Login} />
            <Route path="register" component={require('react-router!../views/Register')} />
            <Route path="registerpd" component={RegisterPassword} />
            <Route path="registerpro" component={RegisterPro} />
            <Route path="yue*" component={Yue} />
            <Route path="center" component={Center} />
            <Route path="shoppingcart" component={ShoppingCart} />
            <Route path="orderclosed*" component={OrderClosed} />
            <Route path="setbill" component={SetBill} />
            <Route path="address" component={Address} />
            <Route path="address-add" component={AddressAdd} />
            <Route path="myorder" component={MyOrder} />
            <Route path="orderdetail*" component={OrderDetail} />
            <Route path="appointment" component={Appointment} />
            <Route path="expressinfo*" component={ExpressInfo} />
        </Route>
    </Router>
);




//动态测试
// let rootRoute = {
//   component: App,
//   childRoutes: [
//     // {
//     //   path: '/',
//     //   getIndexRoute(partialNextState, callback) {
//     //     require.ensure([], function (require) {
//     //       callback(null, {
//     //         component: require('../views/Login'),
//     //       })
//     //     })
//     //   }
//     // },
//     {
//       path: '/',
//       getComponent(location, cb) {
//         // require('../views/Login');
//         require.ensure([], function (require) {
//           cb(null, require('../views/Login'))
//         })        
//       }
//     },
//     {
//       path: 'register',
//       getComponent(location, cb) {
//         // require('../views/Register');
//         require.ensure([], function (require) {
//           cb(null, require('../views/Register'))
//         })         
//       }
//     },
//     {
//       path: 'center',
//       getComponent(location, cb) {
//         // require('../views/Center');
//         require.ensure([], function (require) {
//           cb(null, require('../views/Center'))
//         })          
//       }
//     },
//   ]
// };

// const RouteConfig = (
//   <Router history={history} routes={rootRoute} />
// );

Tool.rem();
export default RouteConfig;