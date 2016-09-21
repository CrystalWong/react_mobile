import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

import IndexList from '../Component/IndexList'; //首页组件
import Topic from '../Component/Topic'; //主题详情
import TopicCreate from '../Component/TopicCreate'; //发布主题
import MyMessages from '../Component/MyMessages'; //我的消息
import UserView from '../Component/UserView'; //我的个人中心
import Login from '../Component/Login'; //登录
import Signout from '../Component/Signout'; //退出
import Yue from '../views/yue'; //退出

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
            <Route path="topic/create" component={TopicCreate} />
            <Route path="topic/:id" component={Topic} />
            <Route path="my/messages" component={MyMessages} />
            <Route path="user/:loginname" component={UserView} />
            <Route path="signin" component={IndexList} />
            <Route path="signout" component={Signout} />
            <Route path="yue" component={Yue} />
        </Route>
    </Router>
);

export default RouteConfig;