import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import {Tool, merged} from '../Tool';
import {DataLoad, DataNull, Header, TipMsgSignin, Footer} from './common/index';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST} from '../constants/headers';

/**
 * 模块入口
 * 
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            button: '登录'
        };
        this.signin = () => {
            var userName = this.refs.phone.value,
                passWord = this.refs.password.value,
                source = "app";
            //this.props.signinSuccess({a:1,b:2});   //action > state
            // if (!accesstoken) return alert('不能为空！');
            this.setState({ button: '登录中...' });
            // Tool.post('/api/v1/accesstoken', { accesstoken }, (res) => {
            //     if (res.success) {
            //         alert('登录成功');
            //         res.accesstoken = accesstoken;
            //         this.props.signinSuccess(res);
            //         this.context.router.push({
            //             pathname: '/user/' + res.loginname
            //         });
            //     } else {
            //         alert('登录失败');
            //         this.setState({ button: '登录' });
            //     }

            // }, () => {
            //     alert('登录失败！');
            //     this.setState({ button: '登录' });
            // });
            let headers = COMMON_HEADERS_POST('content-type', 'application/json');
            fetch(`${URLS.LOGIN}?userName=${userName}&passWord=${passWord}&source=${source}`,{
              method: 'post',
              // body: getSortParams(data),
              headers: headers
            }).then(response => response.json()).then(json => {
                //console.log(json);
                // if(json.status == 'fail') {
                //   console.error(json);
                // }else if(json.status === 'ok'){
                //   var ls = localStorage,
                //       content = json.content,
                //       address;
                //   try {
                //     ls.setItem(LS_ACCESS_TOKEN,content.accessToken);
                //     ls.setItem(LS_USER_ID,content.userId);
                //     ls.setItem(LS_USER_PHONE, data.phone);
                //   } catch(e){
                //     console.error('localStorage存储异常');
                //     return;
                //   }

                //   this.getAddress(content.userId).then( address => {
                //     if(address && address.id){
                //       ls.setItem(LS_ADDRESS_ID, address.id);
                //       ls.setItem(LS_SUPPLIER_NAME, address.name);
                //       window.location.href = "app.html";
                //     }else{
                //       console.error('未获取到地址');
                //       return;
                //     }
                //   });
                // }
            });

        }

    }
    render() {
        return (
            <div>
                <Header title="登录" leftIcon="fanhui" />
                <div className="signin">
                    <div className="center">
                        <div className="text">
                            <input ref="phone" type="text" placeholder="请输入手机号" />
                            <input ref="password" type="password" placeholder="请输入密码" />
                        </div>
                        <button className="btn" onClick={this.signin}>{this.state.button}</button>
                        <div style={{marginTop: '10px',color: '#666'}}><a className="fl">注册</a><a className="fr">找回密码</a></div>
                    </div>
                </div>
            </div>
        );
    }
}
Login.contextTypes = {//父组件跨级传数据
    router: React.PropTypes.object.isRequired
}


export default connect((state) => {console.log(state);console.log("state"); return { User: state.User }; }, action('User'))(Login); //连接redux