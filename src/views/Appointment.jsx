import React, {Component, PropTypes} from 'react';
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
import Cookie from 'react-cookie';
import URLS from '../constants/urls';
import {COMMON_HEADERS} from '../constants/headers';
//header公用头部引入
import {Header} from '../Component/common/index';
//css引入
import '../Style/appointment';
//Tool工具引入
import {Tool, merged} from '../Tool';
import {Toast} from '../Component/common/Tip';

// iscroll
// import ReactIScroll from 'react-iscroll';
// import iScroll from 'iscroll';

/**
 * 模块入口
 * 
 * @class Appointment
 * @extends {Component}
 */
class Appointment extends Component {
     constructor(props){
          super(props);

          this.state = {
               // userId : Cookie.load('userId'),
               pageNo : 1,
               pageSize : 10,
               // button:'联系他',
               // genero:'您的专属管家：',
               // address:'',
               // time:'',
               // remarks:'',
               nolist : 'none',
               dataList : []

          }
          this.getAppointmentList = () => {
               let _this = this,
                    headers = COMMON_HEADERS('tokenid', Cookie.load("tokenid"));
               Tool.fetch(this,{
                    url: URLS.APPOINTMENTLIST+"?pageSize="+this.state.pageSize+"&pageNo="+this.state.pageNo,// + this.state.userId,
                    type: "get",
                    headers:headers,
                    successMethod: function(json){
                         if(!json.code){//登录成功
                              //json
                              console.log("json");
                              console.log(json,json.length);
                              _this.setState({
                                   dataList : json,
                                   nolist : json.length > 0 ? 'none' : 'block'
                              });
                         }else{
                              // dataList
                              _this.setState({ tipContent: json.message,display: 'toasts' });
                              setTimeout(function(){
                                   Tool.history.push('/');
                              },2000);
                         }
                    },

               });

          }
     }

     toastDisplay(state){
        this.setState({
          display: state
        });
     }

     onScrollEnd(){
          console.log("iScroll end scrolling")
     }
     onScrollStart(){
          console.log("iScroll starts scrolling")
     }


     //渲染完成之后再执行
     //componentDidMount(){
     componentWillMount(){
          this.getAppointmentList();
     }

     render() {
         this.props = {
              options: {
                  // mouseWheel: true,
                  // scrollbars: true
              }
          } 
        return (
            <div className="appointment">
                <Header title="预约单" leftIcon="fanhui" />
                <div className="listbox">
                     <ReactIScroll iScroll={iScroll}
                              options={this.props.options}
                           onScrollStart={this.onScrollStart}
                           onScrollEnd={this.onScrollEnd}>
                     <div className="appointmentbox" >
                     
                         {
                              this.state.dataList.map((item,index) => 
                                   <OrderList key={index}{...item} />
                              )
                         }
                     </div>
                     </ReactIScroll>
                </div>
                <NoList display={this.state.nolist} />
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
            </div>
        );
    }
}

// Points.defaultProps = {
//     options: {
//         mouseWheel: true,
//         scrollbars: true
//     }
// }

var OrderList = React.createClass({
     render: function() {
          let {lastUpdateTime,variableMap} = this.props,
               tellNum = variableMap.businessPeople.butler.mobile;
          tellNum = tellNum.replace(/(\d+)-(\d+)-(\d+)-(\d+)/, "$1$2$3,$4");
          return (
               <div className="appointmentlist">
                    <h3>{variableMap.goodsInfo.goodsGroup.goodsGroupName}</h3>
                    <p>
                         预约时间：{lastUpdateTime} <br/>
                         地址：{variableMap.addressInfo.community} <br/>
                         备注：{variableMap.appointmentParam.remark}
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
            <img src="src/images/appointment/icon-appoint.png" />
            <p>预约单还是空的，去逛逛吧~ <br/></p>
            <a href="http://m.jyall.com"><button>继续逛逛</button></a>
        </div>
    );
  }
});

export default Appointment;