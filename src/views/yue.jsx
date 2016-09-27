import React, { Component,PropTypes } from 'react';
import { bindActionCreators } from 'redux';
// import {reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {Tool, merged} from '../Tool';
import '../Style/yue.css';

/**
 * 预约页面.
 */
export default class Yue extends Component {
    constructor(props){
      super(props);
      Tool.rem();
    }

  /**
   * 预约
   * @return {[type]} [description]
   */
  goYue(){
    //账号密码
    // console.log(md5(this.refs.password.value))
    // var data = {
    //   password: md5(this.refs.password.value),
    //   phone: this.refs.username.value
    // },
    // //账号hash
    //   verificationHash = getVerificationHash(data);
    // let headers = LOGIN_HEADERS('Verification-Hash', verificationHash);
    // //防作弊mac地址
    // address.mac(function (err, addr) {
    //   headers['sdcard-id'] = addr;
    // });

    // fetch(`${URLS.LOGIN}`,{
    //   method: 'post',
    //   body: getSortParams(data),
    //   headers: headers
    // }).then(response => response.json()).then(json => {
    //     if(json.status == 'fail') {
    //       console.error(json);
    //     }else if(json.status === 'ok'){
    //       var ls = localStorage,
    //           content = json.content,
    //           address;
    //       try {
    //         ls.setItem(LS_ACCESS_TOKEN,content.accessToken);
    //         ls.setItem(LS_USER_ID,content.userId);
    //         ls.setItem(LS_USER_PHONE, data.phone);
    //       } catch(e){
    //         console.error('localStorage存储异常');
    //         return;
    //       }
    //     }
    // });
  }

  /**
   * 组件渲染.
   * @return {[type]} [description]
   */
  render() {
    let { actions, orders, page, pageAmount } = this.props;

    return (
      <section>
        <div className="main">
          <div className="addren">
            <ul>
              <li id = "area_select">
                <input type="text" placeholder="请选择服务区域" />
                <a href = "javascript:"><span className="chose"></span></a></li>
              <li>
                <input type="text" placeholder="姓名" />
              </li>
              <li>
                <input type="number" placeholder="电话" />
              </li>
            </ul>
          </div>
          <a className="yue-but" id = "yue_but" style={{cursor: 'pointer'}} onClick={this.goYue.bind(this)}>立即申请</a> </div>
      </section>
    );
  }
}
