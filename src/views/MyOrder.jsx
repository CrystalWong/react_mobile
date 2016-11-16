import React, {Component, PropTypes} from 'react';
//路由跳转
import {Link } from 'react-router';
import { connect } from 'react-redux';


//iscroll
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
//cookie
import cookie from 'react-cookie';
//urls
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST,COMMON_HEADERS} from '../constants/headers';
//header公用头部引入
import {Header} from '../Component/common/index';
//Tool工具引入
import {Tool, merged} from '../Tool';
import {Toast,Confirm} from '../Component/common/Tip';
import {order} from '../Action/Order';
//样式
import '../Style/myorder';

/**
 * 模块入口
 * 
 * @class MyOrder
 * @extends {Component}
 */
class MyOrder extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        Tool.loginChecked(this);
        this.state = {
            pageNo : 1,
            pageSize : 10,
            more:'',
            nextPage: false, //下一页控制器
            scrollNoData: false, //分页没有数据
            y:'',
            displayMark: true,
            display: '',
            nolist : 'none',
            list: [],
            industry: "",
            statusPar:"",
            confirm: {
              title: "",
              content: "", 
              leftText: "取消",
              leftMethod: null,
              rightText: "确定",
              rightMethod: null,
              display: "none"
            },
            options: {
                mouseWheel: true,//是否监听鼠标滚轮事件
                scrollbars: true,//是否显示默认滚动条
                //解决 iscroll onClick 失效
                preventDefault:false,
                preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ },
                click:true,
                interactiveScrollbars: true,//用户是否可以拖动滚动条
                shrinkScrollbars: 'scale',//滚动超出滚动边界时，是否收缩滚动条 clip’：裁剪超出的滚动条 scale’:按比例的收缩滚动条（占用CPU资源）false:不收缩
                fadeScrollbars: true, //是否渐隐滚动条，关掉可以加速
                useWheel: true
            }
        };
       // document.cookie="userId=HYS0000010335";
        this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":this.state.statusPar,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize});

    }

    fetch(data){
        let headers = COMMON_HEADERS_POST();    
        let _this = this;
        Tool.fetch(this,{
            url: `${URLS.myOrder}`,
            type: "post",
            body:JSON.stringify(data),
            headers: headers,
            successMethod: function(json){
                if(json.totalPage >_this.state.pageNo){
                       _this.setState({
                            scrollNoData: false,
                            more : "上拉加载更多",
                            list : _this.state.list.concat(json.data),
                            nolist : 'none'
                       });

                  }else if(json.totalPage ==_this.state.pageNo){
                       _this.setState({
                            scrollNoData: true,
                            more : "",
                            list : _this.state.list.concat(json.data),
                            nolist : 'none' 
                       });
                  }else if(json.totalPage == 0){
                    _this.setState({
                        scrollNoData: true,
                        more : "",
                        nolist : 'block'
                     });
                  }
                //_this.setState({list:json.data});_this.state.list.concat()
            }
        });
    };
    //切换 mark
    markDisplay(hPar){
        this.setState({displayMark:hPar});
    };
    //切换业态分类
    subScreen(id){
        this.setState({ industry: id});
        this.refs.OrderCon.innerHTML = "";
        this.fetch({"userId":cookie.load('userId'),"industry":id,"status":this.state.statusPar});
    };
    //切换订单状态
    orderStatusFun(e){
        if(e.target.tagName == "LI"){
            for(var i = 0; i < this.refs.orderStatus.childNodes.length;i++){
                this.refs.orderStatus.childNodes[i].className = " ";
            }
            e.target.className = "active"; 
            this.setState({ statusPar: e.target.id });
            this.refs.OrderCon.innerHTML = "";
            this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":e.target.id});
       }
    };
    toastDisplay(state){
        this.setState({
          display: state
        });
     }
    
    componentDidUpdate(){
        console.log('this.state.more==============='+this.state.more);
        console.log('this.state.scrollNoData==============='+this.state.scrollNoData);
        console.log('this.state.pageNo==============='+this.state.pageNo);
    }
    onScrollEnd(iScrollInstance){
          if(this.state.scrollNoData){
            return;
          }else{
              if((iScrollInstance.maxScrollY < 0 && Math.abs(iScrollInstance.startY) - Math.abs(iScrollInstance.maxScrollY) > 10) || (iScrollInstance.maxScrollY > 0 && iScrollInstance.directionY == 1 && iScrollInstance.distY > 10)){
                  this.setState({
                      more: "正在加载",
                      nextPage:true
                  });
                console.log("2222scrollNoData====="+this.state.scrollNoData);

              }else {
                  this.setState({
                      more: "上拉加载更多",
                      nextPage:false
                  });
                console.log("33333scrollNoData====="+this.state.scrollNoData);

              }
              if(this.state.nextPage){
                console.log("4444scrollNoData====="+this.state.scrollNoData);

                  this.state.pageNo = this.state.pageNo;
                   this.state.pageNo++;
                   this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":this.state.statusPar,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize});
              }
          }

          
    }
    
    // 删除订单
    callbackDel(dId){
      let _this = this,thisNode=document.getElementById(dId),headers = COMMON_HEADERS_POST();
      _this.setState({
        confirm : {
          title: "确认删除此订单吗?",
          content: "",
                leftText: "取消",
                leftMethod: ()=>{
                  _this.setState({confirm : {display : 'none'}});
                },
                rightText: "确定",
                rightMethod: ()=>{
                  Tool.fetch(this,{
                    url: `${URLS.DeleateOrder}`+dId,
                    type: "post",
                    headers: headers,
                    successMethod: function(json){
                      console.log('删除成功');
                      thisNode.parentNode.removeChild(thisNode);
                      _this.state.confirm.leftMethod();
                    }
                });
                },
                display: "block"
        }
      })
    } 

    //查看物流
    callbackLog(oId){
      console.log(oId);
      this.props.saveOrderId({orderId: oId.orderId});
      Tool.history.push("/expressinfo");
    }
     //渲染完成之后再执行
     //componentDidMount(){
     /*componentWillMount(){
          this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":this.state.statusPar,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize});
     }*/
    render() {
        return (
            <div className="my-order">
                <Header title="全部订单" leftIcon="fanhui" hadeScreen="true" callback={this.subScreen.bind(this)} callbackParent={this.markDisplay.bind(this)} />
                <div className="mo-nav">
                    <ul className="clearfix" onClick={this.orderStatusFun.bind(this)} ref="orderStatus">
                        <li id="0" className="active">全部</li>
                        <li id="10">待付款</li>
                        <li id="20">待发货</li>
                        <li id="30">待收货</li>
                    </ul>
                </div>
                <div style={{height: window.innerHeight - 95}}>
                    <ReactIScroll iScroll={iScroll} options={this.state.options} onScrollEnd={this.onScrollEnd.bind(this)}>
                    <div ref="OrderCon">
                        {
                            this.state.list.map((item,index) => <OrderList key={index} {...item} callbackDel={this.callbackDel.bind(this)} callbackLog={this.callbackLog.bind(this)}/>)
                        }
                        <div id="pullUp" className="pull-up" display={this.state.display}><span id="pull_up_label">{this.state.more}</span></div>
                    </div>
                    </ReactIScroll>
                </div>
                <NoList display={this.state.nolist} />
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
                <div className="mask" style={{display:this.state.displayMark?"none":"block"}}></div>
                <Confirm  {...this.state.confirm}/>
                <div className="mask" style={{display: this.state.confirm.display}}></div>
            </div>

        );
    }
}

var OrderList = React.createClass({
    /*删除订单*/
    delOrder:function(id,e){
        e.stopPropagation(); 
        e.preventDefault();
        let dId = id.id;
        this.props.callbackDel(dId);
    },
    //查看物流
    logistics:function(orderId){
        this.props.callbackLog(orderId);
    },
    //确认收货
    receipt:function(id){
      let dId = id.id,headers = COMMON_HEADERS_POST();
      Tool.fetch(this,{
          url: `${URLS.ConfirmGetDoods}`+dId,
          type: "post",
          headers: headers,
          successMethod: function(json){
              console.log("dId===="+dId);
              location.reload();    
          }
      })
    },
    //取消订单
    cancelOrder:function(id){
      let dId = id.id,headers = COMMON_HEADERS_POST();
      Tool.fetch(this,{
          url: `${URLS.CancelOrder}`+dId,
          type: "post",
          headers: headers,
          successMethod: function(json){
              console.log("dId===="+dId);
              location.reload();    
          }
      })
    },
    //再次购买
    goShopping:function(productList){

        let isLogin = 0,
            uKey = cookie.load('tokenid'),
            groupSkuId = (productList.productList[0].groupId==null?'':productList.productList[0].groupId) + "_" + productList.productList[0].goodsId,
            count = 1,self=this;
        if (uKey) isLogin = 1;
        
        Tool.fetch(this, {
            url: `${URLS.ADDITEM}${isLogin}/${uKey}/${groupSkuId}/${count}`,
            type: "post",
            headers: COMMON_HEADERS_POST,
            successMethod: function(json,status) {

                if (json.flag == true) {
                    Tool.history.push("/shoppingcart");
                } else {
                    console.log(json.message);
                    self.setState({
                        tipContent: json.message,
                        display: 'toasts'
                    });
                }
            }
        });
    },
    //付款
    payment:function(id){
      let dId = id.id;
       Tool.fetch(this, {
            url: `${URLS.CORRELATION}`+dId,
            type: "get",
            headers: COMMON_HEADERS(),
            successMethod: function(str,status) {
                console.log("payment====="+str.payCode);
                 Tool.fetch(self, { //获取支付地址
                      url: `${URLS.TOPAY}${str.payCode}?source=WAP`,
                      type: "post",
                      headers: COMMON_HEADERS_POST(),
                      successMethod: function(json) {
                          location.href = json.wapPayUrl;
                      }
                  });
            }
        });
    },
    render: function() {
          let {productList,orderIndustryName,actualCost,freight,orderStatus,osText,osDispaly,id,orderId} = this.props;
          switch(orderStatus){
            case 10:
            osText = "未付款";
            osDispaly = "block";
            break;
            case 20:
            osText = "等待发货";
            osDispaly = "none";
            break;
            case 30:
            osText = "等待收货";
            osDispaly = "block";
            break;
            case 40:
            osText = "交易成功";
            osDispaly = "block";
            break;
            case 14:
            osText = "分期付款中";
            osDispaly = "none";
            break;
            case 70:
            osText = "交易关闭";
            osDispaly = "block";
            break;
          }
          return (
                <div className="mo-main" id={id}>
                    <div className="mom-head">
                        <div className="fl">
                            <i className="mh-ico mh-icoJd"></i><span className="">{orderIndustryName}</span>
                        </div>
                        <div className="fr">
                            {osText}
                        </div>
                    </div>
                    <ul className="mom-list">
                    {
                        productList.map((item,index) => {
                            return(
                                <li className="" key={index}>
                                    <Link to={"/OrderDetail?orderId="+id}>
                                        <div className="ml-col1">
                                            <img src={item.goodsMainPhoto} />
                                        </div>
                                        <div className="ml-col2">
                                            <h2>{item.goodsName}</h2>
                                            <p>{item.goodSpec}</p>
                                        </div>
                                        <div className="ml-col3">
                                            <div className="ml-price">￥{item.storePrice}</div>
                                            <div className="ml-num">X{item.count}</div>
                                        </div>
                                    </Link>
                                </li> 
                            )
                        })
                    }
                    </ul>
                    <div className="mm-total">共{productList.length}件商品 合计：{actualCost}(含运费￥{freight})</div>
                    <div className="mm-total clearfix" style={{display:osDispaly}}>
                        <span className="mm-but but-org" onClick={this.payment.bind(null,{id})} style={{display:orderStatus == 10 ?"block":"none"}}>付款</span>
                        <span className="mm-but but-def" onClick={this.cancelOrder.bind(null,{id})} style={{display:orderStatus == 10 ?"block":"none"}}>取消订单</span>
                        <span className="mm-but but-org" onClick={this.goShopping.bind(null,{productList})} style={{display:orderStatus == 40 ?"block":"none"}}>再次购买</span>
                        <span className="mm-but but-def" onClick={this.delOrder.bind(null,{id})} style={{display:orderStatus == 70 ?"block":"none"}}>删除订单</span>
                        <span className="mm-but but-org" onClick={this.receipt.bind(null,{id})} style={{display:orderStatus == 30 ?"block":"none"}}>确认收货</span>
                        <span className="mm-but but-def" onClick={this.logistics.bind(null,{orderId})} style={{display:orderStatus == 30 ?"block":"none"}}>查看物流</span>
                    </div>
                </div>
        );
     }
});
var NoList = React.createClass({
  render: function() {
    return (
        <div style={{ display: this.props.display }} className="no-list">
            <img src={require("../images/appointment/icon-appoint.png")} />
            <p>订单还是空的，去逛逛吧~ <br/></p>
            <a href="http://m.jyall.com"><button>去逛逛</button></a>
        </div>
    );
  }
});
// export default MyOrder;

function mapStateToProps(state,ownProps) {
  return {
    order: state.order
  };
}
//物流详情传参
function mapDispatchToProps(dispatch) {  
  return {
    saveOrderId: (action) => dispatch(order(action))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MyOrder);
