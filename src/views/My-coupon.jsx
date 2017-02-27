import React, {Component, PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls';
import {COMMON_HEADERS} from '../constants/headers';
//header公用头部引入
import {Header} from '../Component/common/index';
//css引入
import '../Style/my-coupon';
//Tool工具引入
import {Tool, merged} from '../Tool';
import {Toast} from '../Component/common/Tip';
/**
 * 模块入口
 * 
 * @class Appointment
 * @extends {Component}
 */
class Mycoupon extends Component {
     constructor(props){
          super(props);
          Tool.loginChecked(this);
          this.state = {
               couponStatus:'1',//优惠券状态参数
               pageNo : 1,
               pageSize : 10,
               more:'',
               nextPage: false, //下一页控制器
               scrollNoData: false, //分页没有数据
               display: '',
               nolist : 'block',
               dataList : [],
          }
          this.getAppointmentList = () => {
               let _this = this,
                    headers = COMMON_HEADERS('tokenid', Cookie.load("tokenid"));
               Tool.fetch(this,{
                    url: URLS.COUPONLIST+"?pageSize="+this.state.pageSize+"&pageNo="+this.state.pageNo+"&memberId="+Cookie.load("userId")+"&couponStatus="+this.state.couponStatus,// + this.state.userId,
                    type: "get",
                    headers:headers,
                    successMethod: function(json){

                    },

               });

          }
     }
     // let this=this;
     toastDisplay(state){
        this.setState({
          display: state
        });
     }
     //渲染完成之后再执行
     componentWillMount(){
          this.getAppointmentList();
     }

     render() {
        return (
                <div className="my-coupon">
                <Header title="我的优惠券" leftIcon="fanhui" hasRight="true"/>
                  <div className="mo-nav">
                      <ul className="clearfix">
                          <li id="0" className="active">未使用(1)</li>
                          <li id="10">已使用(2)</li>
                          <li id="20">已过期(333)</li>
                      </ul>
                  </div>
                  <div className="activation">
                      <input type="num" placeholder="请输入优惠券编码"/>
                      <span>激活</span>
                  </div>
                  <div className="no-coupon">没有对应优惠券</div>
                  <div className="coupon-list">
                    <ul>
                      <li>
                        <div className="div-inline name-info">
                          <div className="left-div"><h1>¥100</h1><span>(满减券)</span></div>
                          <a href="">全品类<i></i></a>
                        </div>
                        <div className="div-inline date-info">
                          <p>有效期:2017-2-27 14:33:44</p>
                          <div className="right-div">满300使用</div>
                        </div>
                      </li>
                      <li>
                        <div className="div-inline name-info">
                          <div className="left-div"><h1>¥100</h1><span>(满减券)</span></div>
                          <a href="">全品类<i></i></a>
                        </div>
                        <div className="div-inline date-info">
                          <p>有效期:2017-2-27 14:33:44</p>
                          <div className="right-div">满300使用</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="get-coupon-button">
                    领取更多好券<i></i>
                  </div>
                </div>
        );
    }
}
var OrderList = React.createClass({
     render: function() {
          let {lastUpdateTime,variableMap} = this.props,
               tellNum = variableMap.businessPeople.butler.mobile,
               infoAddress= '';
          tellNum = tellNum.replace(/(\d+)-(\d+)-(\d+)-(\d+)/, "$1$2$3,$4");
          if(variableMap.addressInfo){
            let addressOne = variableMap.addressInfo.community?variableMap.addressInfo.community:"",
                addressTwo = variableMap.addressInfo.doorNum?variableMap.addressInfo.doorNum:"";
            infoAddress = addressOne + addressTwo;
          }
          return (
               <div className="appointmentlist">
                    <h3>{variableMap.goodsInfo.goodsGroup.goodsGroupName}</h3>
                    <p>
                         预约时间：{lastUpdateTime} <br/>
                         地址：{infoAddress} <br/>
                         备注：{variableMap.appointmentParam.remark?variableMap.appointmentParam.remark:""}
                    </p>
                    <h3 className="generoname">您的专属管家：{variableMap.businessPeople.butler.empName}<a href={`tel:`+tellNum}><button>联系他</button></a></h3>
                </div>
          );
     }
});



var NoList = React.createClass({
  render: function() {
    return (
        <div style={{ display: this.props.display }} className="no-list">
            <img src={require("../images/appointment/icon-appoint.png")} style={{width: '1.63rem'}} />
            <p>预约单还是空的，去逛逛吧~ <br/></p>
            <a href="http://m.jyall.com"><button>继续逛逛</button></a>
        </div>
    );
  }
});

export default Mycoupon;
process.env.NODE_ENV !== 'production' && module.hot.accept();