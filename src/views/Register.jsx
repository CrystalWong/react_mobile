import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import {Header} from '../Component/common/index';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST} from '../constants/headers';
import {Toast} from '../Component/common/Tip';

/**
 * 模块入口
 * 
 * @class Login
 * @extends {Component}
 */
class Register extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            button: '下一步',
            tipContent: '',
            display: '',
            protocol: true,
            protocolClass: ''
        };

        this.signin = () => {
            var userName = this.refs.phone.value,
                num = this.refs.num.value,
                source = "app";
            if (!userName){
                this.setState({ tipContent: '号码不能为空',display: 'toasts' });
                return;
            }
            if(!num){
                this.setState({ tipContent: '验证码不能为空',display: 'toasts' });
                return;
            }
            let headers = COMMON_HEADERS_POST('content-type', 'application/json');
            fetch(`${URLS.LOGIN}?userName=${userName}&passWord=${passWord}&source=${source}`,{
              method: 'post',
              // body: getSortParams(data),
              headers: headers
            }).then(response => response.json()).then(json => {
              if(json.responseHeader){//登录成功
                //json

              }else{
                this.setState({ tipContent: json.message,display: 'toasts' });
              }

            });

        }

    }

    readProtocol(){
        console.log(this.state.protocol);
        if(this.state.protocol){
            this.setState({protocol: false,protocolClass: 'no-pro'});
        }else{
            this.setState({protocol: true,protocolClass: ''});
        }
    }

    toastDisplay(state){
        this.setState({
          display: state
        });
    }

    render() {
        return (
            <div>
                <Header title="注册" leftIcon="fanhui" />
                <div className="signin">
                    <div className="center">
                        <div className="text">
                            <input ref="phone" type="text" placeholder="请输入手机号" />
                            <input ref="num" type="num" placeholder="请输入验证码" />
                            <span>获取验证码</span>
                        </div>
                        <div className="protocol"><span onClick={this.readProtocol.bind(this)} className={this.state.protocolClass}></span>我已经阅读并同意遵守<a href="javascript:;">《金色家园用户服务协议》</a></div>
                        <button className="btn" onClick={this.signin.bind(this)}>{this.state.button}</button>
                    </div>
                </div>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
            </div>
        );
    }
}
// Register.contextTypes = {//父组件跨级传数据
//     router: React.PropTypes.object.isRequired
// }

export default connect((state) => {return { User: state.User }; }, action('User'))(Register); //连接redux