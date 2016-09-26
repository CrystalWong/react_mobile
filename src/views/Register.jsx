import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../Action/Index';
import {Header} from '../Component/common/index';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST,COMMON_HEADERS,SIGN} from '../constants/headers';
import {Toast} from '../Component/common/Tip';
import {Tool, merged} from '../Tool';

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
            protocolClass: '',
            codeText: '获取验证码',
            codeControl: true
        };

        this.validate = () => {
            let phone = this.refs.phone.value,
                num = this.refs.num.value;
            if (!phone){
                this.setState({ tipContent: '号码不能为空',display: 'toasts' });return;
            }
            if(!num){
                this.setState({ tipContent: '验证码不能为空',display: 'toasts' });return;
            }
            let headers = COMMON_HEADERS('sign', SIGN);
            Tool.fetch(this,{
                url: URLS.Vcode+phone+"/"+num,
                type: "get",
                headers: headers,
                successMethod: function(json){
                    console.log(json.uuid);
                }
            });

        }

    }

    readProtocol(){ //同意协议
        if(this.state.protocol){
            this.setState({protocol: false,protocolClass: 'no-pro'});
        }else{
            this.setState({protocol: true,protocolClass: ''});
        }
    }

    //toast
    toastDisplay(state){  this.setState({display: state}); }

    getRandomCode(){
        if(!this.state.codeControl)return; 
        if(!this.refs.phone.value){
            this.setState({ tipContent: '号码不能为空',display: 'toasts' });
            return;
        }
        this.setState({codeControl: false});
        let self = this,
            headers = COMMON_HEADERS('sign', SIGN);
        Tool.fetch(this,{
            url: URLS.Vcode+this.refs.phone.value,
            type: "get",
            headers: headers,
            successMethod: function(json){
                let n = 60,
                    inte = setInterval(function(){
                        self.setState({codeText: `重新发送（${n}s）`});
                        n--;
                        if(n == 0){
                            self.setState({codeText: "重新发送",codeControl:true});
                            clearInterval(inte);
                        }
                    },1000);
            }
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
                            <span onClick={this.getRandomCode.bind(this)} ref="codeText">{this.state.codeText}</span>
                        </div>
                        <div className="protocol"><span onClick={this.readProtocol.bind(this)} className={this.state.protocolClass}></span>我已经阅读并同意遵守<Link to="/registerpro" style={{color: '#45b3fc'}}>《金色家园用户服务协议》</Link></div>
                        <button className="btn" onClick={this.validate.bind(this)}>{this.state.button}</button>
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