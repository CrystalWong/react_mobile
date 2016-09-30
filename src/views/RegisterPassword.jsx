import React, {Component, PropTypes} from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import {Header} from '../Component/common/index';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST,COMMON_HEADERS,SIGN} from '../constants/headers';
import {Toast} from '../Component/common/Tip';
import {Tool, merged} from '../Tool';

/**
 * 模块入口
 * 
 * @class RegisterPassword
 * @extends {Component}
 */
class RegisterPassword extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            button: '完成',
            tipContent: '',
            display: ''
        };

        this.setPassword = () => {
            let password = this.refs.password.value,
                self = this;
            if (!password){
                this.setState({ tipContent: '密码不能为空',display: 'toasts' });return;
            }

            let headers = COMMON_HEADERS('sign', SIGN);
            // headers = COMMON_HEADERS('deviceid', "M");

            Tool.fetch(this,{
                url: URLS.Register+"?uuid="+this.props.login.uuid,
                type: "post",
                headers: headers,
                body: '{mobile:'+this.props.login.phone+',loginName:"",password:"'+ password +'",source:"app",userType:"1"}',
                successMethod: function(json,status){
                    console.log(json);
                    if(status == 200){
                        self.setState({ tipContent: '注册成功！',display: 'toasts' });
                        setTimeout(function(){
                            Tool.history.push('/');
                        },1500);
                    }else{
                        self.setState({ tipContent: json.message,display: 'toasts' });
                    }
                }
            });

        }
    }

    //toast
    toastDisplay(state){  this.setState({display: state}); }

    render() {
        return (
            <div>
                <Header title="注册" leftIcon="fanhui" />
                <div className="signin">
                    <div className="center">
                        <div className="title">请设置密码</div>
                        <div className="text">
                            <input ref="password" type="password" placeholder="请设置密码" />
                        </div>
                        <div className="protocol">只支持数字和字母（区分大小写），6-26位字符</div>
                        <button className="btn" onClick={this.setPassword.bind(this)}>{this.state.button}</button>
                    </div>
                </div>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state,ownProps) {
    console.log(state);
  return state;
}

export default connect(mapStateToProps)(RegisterPassword);