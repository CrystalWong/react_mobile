import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import {login,findPwdByMobile} from '../Action/login';
// import { default as action } from '../Action/login';
import {Tool, merged} from '../Tool';
import {DataLoad, DataNull, Header, TipMsgSignin, Footer} from '../Component/common/index';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST} from '../constants/headers';
import {ONLINE} from '../constants/common';
import {Toast} from '../Component/common/Tip';
/**
 * 模块入口
 * 
 * @class Login
 * @extends {Component}
 */
class Login extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(3333333333);
        this.state = {
            button: '登录',
            tipContent: '',
            display: ''
        };

        this.signin = () => {
            var userName = this.refs.phone.value,
                passWord = this.refs.password.value,
                code = this.refs.code,
                source = "app",
                self = this;
            //this.props.signinSuccess({a:1,b:2});   //action > state
            if (!userName){
                this.setState({ tipContent: '号码不能为空',display: 'toasts' });
                return;
            }
            if(!passWord){
                this.setState({ tipContent: '密码不能为空',display: 'toasts' });
                return;
            }
            if(code.style.display == "block"&&!code.value){
                this.setState({ tipContent: '验证码不能为空',display: 'toasts' });
                return;
            }
            
            this.setState({ button: '登录中...' });
            // let headers = COMMON_HEADERS_POST('content-type', 'application/json');
            let headers = COMMON_HEADERS_POST();
            Tool.fetch(this,{
                url: `${URLS.LOGIN}?userName=${userName}&passWord=${passWord}&source=${source}&version=14&code=${code.value}&uuid=${this.random}`,
                type: "post",
                body: "",
                headers: headers,
                successMethod: function(json){
                    self.setState({ button: '登录' });
                    //{"responseBody":{"password":"70ed0011afee14509cf8a9cb4fd932f591b355b7a2c3d4527c3d6e3a","tokenid":"a3dd0adcZf19bcadcZ1574fbcc15dZb4ab","roleId":"1","sex":"0","name":"HYS15810341mq","photo":"http://image1.jyall.com/v1/tfs/T1Nqh_B4bT1R4cSCrK","userId":"HYS000705"},"responseHeader":{"errorCode":0,"message":"success"}}
                    if(json.responseHeader){//登录成功
                    //json
                        var cookieObj = { expires:new Date("2100-01-01"),path:"/",domain:(ONLINE?"m.jyall.com":"localhost") }
                        self.props.loginAction(json.responseBody);
                        cookie.save('tokenid', json.responseBody.tokenid, cookieObj);
                        cookie.save('name', json.responseBody.name, cookieObj);
                        cookie.save('userId', json.responseBody.userId, cookieObj);
                        cookie.save('photo', json.responseBody.photo, cookieObj);
                        self.context.router.goBack();
                    }else{
                       if(json.code == 400001039){

                            self.getRondom(self);
                           self.setState({ tipContent: json.message,display: 'toasts' });
                           self.refs.code.style.display = "block";
                           self.refs.img.style.display = "inline";
                           
                       } else{
                           self.setState({ tipContent: json.message,display: 'toasts' });
                       }
                    }
                }
            });
        }
    }

    toastDisplay(state){
        this.setState({
          display: state
        });
    }

    getRondom(obj){
        obj.random = Math.random();
        obj.refs.img.getElementsByTagName("img")[0].src = URLS.LOGINRANDOMIMAGE+"?uuid="+obj.random;
    }

    findPdByPhone(){
        this.props.findPwdByMobile("findpwd");
        Tool.history.push('/register');
    }

    componentDidMount(){
        this.props.findPwdByMobile("");
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
                            <input ref="code" type="num" placeholder="请输入验证码" style={{borderTop:'1px solid #e6e6e6',display: 'none'}} />
                            <span ref="img" style={{display: 'none'}}><img href="" /></span>
                        </div>
                        <button className="btn" onClick={this.signin.bind(this)}>{this.state.button}</button>
                        <div style={{marginTop: '10px'}}><Link to="/register" style={{color: '#666'}}><span className="fl">注册</span></Link><span className="fr" style={{color: '#666'}} onClick={this.findPdByPhone.bind(this)}>找回密码</span></div>
                    </div>
                </div>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
            </div>
        );
    }
}
Login.contextTypes = {//父组件跨级传数据
    router: React.PropTypes.object.isRequired
}

function mapStateToProps(state,ownProps) {
  console.log(state);  
  return {
    login: state.login
  };
}
function mapDispatchToProps(dispatch) {  
  return {
    loginAction: (user) => dispatch(login(user)),
    findPwdByMobile: (pwd) => dispatch(findPwdByMobile(pwd))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);