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
               unUsedCount :'',
               noCouponTip :'none',
               usedCount :'',
               value:'',
               expiredCount :'',
               couponState:'active',
               dataList:[]
          }
          this.getCouponBy=(e)=>{
            this.refs.couponState.childNodes.forEach(function(item,index){
              item.className='';
            });
            e.target.className='active';
            this.state.couponStatus=e.target.id;
            //切换状态初始化
            this.state.nextPage=false;
            this.state.pageNo=1;
            this.getAppointmentList();
          }
          this.couponScroll=(e)=>{
            ////console.log(e.target.scrollHeight);//元素的高度
            ////console.log(e.target.clientHeight);//窗口高度
            ////console.log(e.target.scrollTop);//收进去的高度
            this.setState({
                  noCouponTip:'none'
            });
            if(e.target.clientHeight+e.target.scrollTop>=e.target.scrollHeight){
              ////console.log('滚动..');
              if(this.state.nextPage){
                this.getAppointmentList();
              }else{
                this.setState({
                  noCouponTip:'block'
                });
              }
            }
          }
          this.getAppointmentList = () => {
               let _this = this,
                    headers = COMMON_HEADERS('tokenid', Cookie.load("tokenid"));
               Tool.fetch(this,{
                    url: URLS.COUPONLIST+"?pageSize="+_this.state.pageSize+"&pageNo="+_this.state.pageNo+"&memberId="+Cookie.load("userId")+"&couponStatus="+_this.state.couponStatus,// + this.state.userId,
                    type: "get",
                    headers:headers,
                    successMethod: function(json){
                      if(_this.state.nextPage&&_this.state.pageNo>1){
                          _this.setState({
                              dataList: _this.state.dataList.concat(json.data),
                              unUsedCount: json.unUsedCount,
                              usedCount:json.usedCount,
                              expiredCount:json.expiredCount
                          });
                        }else if(!_this.state.nextPage&&_this.state.pageNo==1){
                          _this.setState({
                              dataList: json.data,
                              unUsedCount: json.unUsedCount,
                              usedCount:json.usedCount,
                              expiredCount:json.expiredCount
                          });
                        }
                      if(json.data.length==10){
                        // _this.setState({
                        //     pageNo: _this.state.pageNo++
                        // });
                        _this.state.pageNo++;
                        _this.state.nextPage=true;
                      }else{
                        _this.state.nextPage=false;
                        _this.setState({
                          noCouponTip:'block'
                        });
                      }
                    },

               });

          }
          this.handleChange=(e)=>{
            this.setState({
              value:e.target.value
            });
          }
          this.userCode = () => {
            //console.log(this.refs.coupon_code.value);
               if(this.refs.coupon_code.value==''){
                this.setState({ tipContent: '请输入优惠券编码',display: 'toasts' });
                return;
               }
               let _this = this,
                    headers = COMMON_HEADERS('tokenid', Cookie.load("tokenid"));
               Tool.fetch(this,{
                    url: URLS.USERCOUPONCODE+"?memberId="+Cookie.load("userId")+"&redemptionCode="+this.refs.coupon_code.value,// + this.state.userId,
                    type: "post",
                    headers:headers,
                    successMethod: function(json){
                      //console.log(json);
                      _this.setState({ tipContent: json.message,display: 'toasts' });
                      _this.setState({
                        value:''
                      });
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
                <div className="my-coupon" onScroll={this.couponScroll.bind(this)}>
                <Header title="我的优惠券" leftIcon="fanhui" hasRight="true"/>
                <div className="wrapdiv">
                    <div className="mo-nav">
                        <ul className="clearfix" onClick={this.getCouponBy.bind(this)} ref="couponState">
                            <li id="1" className="active">未使用({this.state.unUsedCount})</li>
                            <li id="2">已使用({this.state.usedCount})</li>
                            <li id="3">已过期({this.state.expiredCount})</li>
                        </ul>
                    </div>
                    <div className="activation">
                        <input type="num" placeholder="请输入优惠券编码" ref="coupon_code" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <span onClick={this.userCode.bind(this)}>激活</span>
                    </div>
                    <div className="no-coupon" style={{display: this.state.dataList.length==0?'block':'none'}}>没有对应优惠券</div>
                    <div className="coupon-list" style={{display: this.state.dataList.length==0?'none':'block'}}>
                      <ul>
                          {
                                this.state.dataList.map((item,index) => 
                                     <CouponList key={index}{...item} />
                                )
                           }
                      </ul>
                      <div style={{display: this.state.noCouponTip}} className="no-coupon-tip">没有更多了</div>
                    </div>
                  </div>
                  <div className="get-coupon-button">
                    <a href="//m.jyall.com/list/coupon/couponCenter.html">领取更多好券<i></i></a>
                  </div>
                  <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
                </div>
        );
    }
}
export default Mycoupon;
process.env.NODE_ENV !== 'production' && module.hot.accept();
//循环优惠券列表
class CouponList extends Component {
     constructor(props){
      super(props);
      this.subStrTime=(str)=>{
            return str.split(' ')[0];
      }
      this.toCouponList=(id,e)=>{
        location.href='//m.jyall.com/list/goods/coupon-'+id;
      }
     }
     render(){
          let {couponId,groupValue,groupType,couponName,goodsRange,startUseTime,endUseTime} = this.props;
          return (
                      <li onClick={this.toCouponList.bind(this,couponId)}>
                        <div className="div-inline name-info">
                          <div className="left-div"><h1>¥{groupValue}</h1><span>({groupType==1?'满减券':'满折券'})</span></div>
                          <a><span className="text">{goodsRange}</span><i></i></a>
                        </div>
                        <div className="div-inline date-info">
                          <p>有效期:{this.subStrTime(startUseTime)}-{this.subStrTime(endUseTime)}</p>
                          <div className="right-div">{couponName}</div>
                        </div>
                      </li>
          );
     }
}
// var CouponList = React.createClass({
//       //console.log(this);
//       subStrTime=(str)=>{
//             return str.split(' ')[0];
//       }
//      render: function() {
//           let {groupValue,groupType,couponName,goodsRange,startUseTime,endUseTime} = this.props;
//           return (
//                       <li>
//                         <div className="div-inline name-info">
//                           <div className="left-div"><h1>¥{groupValue}</h1><span>({groupType})</span></div>
//                           <a href="">{couponName}<i></i></a>
//                         </div>
//                         <div className="div-inline date-info">
//                           <p>有效期:{this.subStrTime(startUseTime)}-{endUseTime}</p>
//                           <div className="right-div">{goodsRange}</div>
//                         </div>
//                       </li>
//           );
//      }
// });