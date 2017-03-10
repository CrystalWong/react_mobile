import React, {Component, PropTypes} from 'react';
import Cookie from 'react-cookie';
import URLS from '../constants/urls';
import { connect } from 'react-redux';
import {COMMON_HEADERS} from '../constants/headers';
//header公用头部引入
import {Header} from '../Component/common/index';
//css引入
import '../Style/use-coupon';
//Tool工具引入
import {Tool, merged} from '../Tool';
import {Toast} from '../Component/common/Tip';
import {useCoupon} from '../Action/UseCoupon';
/**
 * 模块入口
 * 
 * @class Appointment
 * @extends {Component}
 */
class Usecoupon extends Component {
     constructor(props){
          super(props);
          //清空couponId
          //document.getElementById('route_div').setAttribute('couponId','');
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
               noCouponTip :'block',
               usedCount :'',
               value:'',
               expiredCount :'',
               couponState:'active',
               dataList:JSON.parse(sessionStorage.getItem('couponList'))
          }
          this.confirmUse=(e)=>{
            let couponList=[],couponObj={};
            couponObj.activityId=document.getElementsByClassName('span check')[0].id.split('_')[0];
            couponObj.couponId=document.getElementsByClassName('span check')[0].id.split('_')[1];
            couponObj.groupValue=document.getElementsByClassName('span check')[0].id.split('_')[2];
            couponList.push(couponObj);
            sessionStorage.setItem('useCouponList',JSON.stringify(couponList))
            //Tool.history.push("/orderclosed");
            //this.context.router.goBack();
            window.history.go( -1 );
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
          //this.getAppointmentList();
     }

     render() {
        return (
                <div className="use-coupon">
                <Header title="使用优惠券" leftIcon="fanhui" hasRight="true"/>
                <div className="wrapdiv">
                    <div className="activation">
                        <input type="num" placeholder="请输入优惠券编码" ref="coupon_code" value={this.state.value} onChange={this.handleChange.bind(this)}/>
                        <span onClick={this.userCode.bind(this)}>激活</span>
                    </div>
                    <div className="no-coupon" style={{display: this.state.dataList.length==0?'block':'none'}}>没有对应优惠券</div>
                    <div className="coupon-list" style={{display: this.state.dataList.length==0?'none':'block'}}>
                      <ul>
                          {
                                this.state.dataList.map((item,index) =>
                                     <UseCouponList key={index}{...item} />
                                )
                           }
                      </ul>
                      <div style={{display: this.state.noCouponTip}} className="no-coupon-tip">没有更多了</div>
                    </div>
                  </div>
                  <div className="get-coupon-button">
                    <a onClick={this.confirmUse.bind(this)}>确定</a>
                  </div>
                  <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
                </div>
        );
    }
}
let mapStateToProps = function(state,ownProps) {
  return {
    useCoupon: state.useCoupon
  };
}

let mapDispatchToProps = function(dispatch) {
  return {
    confirmUseCoupon: (obj) => {
      dispatch(useCoupon(obj));
    }
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Usecoupon);
//export default connect(mapStateToProps)(Usecoupon);
//export default Usecoupon;
process.env.NODE_ENV !== 'production' && module.hot.accept();
//循环优惠券列表
class UseCouponList extends Component {
     constructor(props){
      super(props);
      this.subStrTime=(str)=>{
            return str.split(' ')[0];
      }
      //选择优惠券
      this.checkCoupon=(couponId,e)=>{
          var arry=document.getElementsByClassName('span check');
          var len=arry.length;
        if(e.target.className=='span uncheck'){
          for(var i=0;i<len;i++){
            arry[i].className='span uncheck';
          }
          e.target.className='span check';
        }else{
          e.target.className='span uncheck';
        }
      }
     }
     render(){
          let {couponId,groupValue,groupType,couponTag,goodsRange,useLimitAmount,startUseTime,endUseTime,activityId} = this.props;
          return (
                      <li>
                        <span id={activityId+'_'+couponId+'_'+groupValue} name={couponId+'_'+groupValue} className="span uncheck"  onClick={this.checkCoupon.bind(this,couponId)}></span>
                        <div className="check-div">
                          <div className="div-inline name-info">
                            <div className="left-div"><h1>¥{groupValue}</h1><span>({groupType==1?'满减券':'满折券'})</span></div>
                            <a>{couponTag}</a>
                          </div>
                          <div className="div-inline date-info">
                            <p>有效期:{this.subStrTime(startUseTime)}--{this.subStrTime(endUseTime)}</p>
                            <div className="right-div">满{useLimitAmount}元使用</div>
                          </div>
                        </div>
                        
                      </li>
          );
     }
}
