import React, {Component, PropTypes} from 'react';
//路由跳转
import {Link } from 'react-router';
import { connect } from 'react-redux';
import {order} from '../Action/Order';

//iscroll
import ReactIScroll from 'react-iscroll';
import iScroll from 'iscroll';
//cookie
import cookie from 'react-cookie';
//urls
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST} from '../constants/headers';
//header公用头部引入
import {Header} from '../Component/common/index';
//Tool工具引入
import {Tool, merged} from '../Tool';
import {Toast} from '../Component/common/Tip';

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
        Tool.loginChecked(this);
        this.state = {
            pageNo : 1,
            pageSize : 10,
            more:'上拉加载更多',
            nextPage: false, //下一页控制器
            scrollNoData: false, //分页没有数据
            y:'',
            displayMark: true,
            display: '',
            nolist : 'none',
            list: [],
            industry: "",
            statusPar:""
        };
        document.cookie="userId=HYS009738";
        this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":this.state.statusPar,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize});

    }

    fetch(data){
        let headers = COMMON_HEADERS_POST();    
        let _this = this;
        console.log(URLS.myOrder);
        Tool.fetch(this,{
            url: `${URLS.myOrder}`,
            type: "post",
            body:JSON.stringify(data),
            headers: headers,
            successMethod: function(json){
              console.log('------------'+json.data.length);
                if(json.data.length>0&&json.data.length==_this.state.pageSize){
                       _this.state.scrollNoData = false;
                       _this.state.more="上拉加载更多";
                       _this.setState({
                            list : _this.state.list.concat(json.data),
                            nolist : json.data.length > 0 ? 'none' : 'block'
                       });

                  }else if(json.data.length>0&&json.data.length<_this.state.pageSize){
                       _this.state.scrollNoData = true;
                       _this.state.more="";
                       _this.setState({
                            list : _this.state.list.concat(json.data),
                            
                            nolist : json.data.length > 0 ? 'none' : 'block'
                       });
                  }else{
                       _this.state.more="";
                       _this.state.scrollNoData = true;
                       _this.setState({
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
    /*
    componentDidUpdate(){
        console.log('this.state.statusPar==============='+this.state.statusPar);
    }*/
    onScrollEnd(iScrollInstance){

          if(this.state.scrollNoData){return;}

          if((iScrollInstance.maxScrollY < 0 && Math.abs(iScrollInstance.startY) - Math.abs(iScrollInstance.maxScrollY) > 20) || (iScrollInstance.maxScrollY > 0 && iScrollInstance.directionY == 1 && iScrollInstance.distY > 20)){
              //if(this.state.noPage)return;
              this.state.more = "正在加载";
              this.setState({
               display: this.state
             });
              this.state.nextPage = true;
          }else {
              this.state.more="上拉加载更多";
              this.state.nextPage = false;
          }
          this.setState({
               display: this.state
             });
          if(this.state.nextPage){
              this.state.pageNo = this.state.pageNo;
              
              // this.state.collection.fetch({url: this.state.currentListUrl,data: this.state.currentUrlCondition,reset: true,success:function(){
               // this.state.more = "松开刷新";
               this.state.pageNo++;
               this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":this.state.statusPar,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize});
              // }});
          }
    }
    
    
     //渲染完成之后再执行
     //componentDidMount(){
     /*componentWillMount(){
          this.fetch({"userId":cookie.load('userId'),"industry":this.state.industry,"status":this.state.statusPar,"pageNo":this.state.pageNo,"pageSize":this.state.pageSize});
     }*/
    render() {
        this.props = {
            options: {
                mouseWheel: true,//是否监听鼠标滚轮事件
                scrollbars: true,//是否显示默认滚动条
                //解决 iscroll onClick 失效
                preventDefault:false,
                preventDefaultException: { tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/ },
                click:true,
                interactiveScrollbars: true,//用户是否可以拖动滚动条
                shrinkScrollbars: 'clip',//滚动超出滚动边界时，是否收缩滚动条 clip’：裁剪超出的滚动条 scale’:按比例的收缩滚动条（占用CPU资源）false:不收缩
                fadeScrollbars: true //是否渐隐滚动条，关掉可以加速
            }
        } 
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
                    <ReactIScroll iScroll={iScroll} options={this.props.options} onScrollEnd={this.onScrollEnd.bind(this)}>
                    <div ref="OrderCon">
                        {
                            this.state.list.map((item,index) => <OrderList key={index} {...item} />)
                        }
                        <div id="pullUp" className="pull-up" display={this.state.display}><span id="pull_up_label">{this.state.more}</span></div>
                    </div>
                    </ReactIScroll>
                </div>
                <NoList display={this.state.nolist} />
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} />
                <div className="mask" style={{display:this.state.displayMark?"none":"block"}}></div>
            </div>

        );
    }
}

var OrderList = React.createClass({
    /*删除订单*/
    delOrder:function(id,e){
        let headers = COMMON_HEADERS_POST();    
        let _this = this;
        let dId = id.id;
        let thisNode=document.getElementById(dId);
        e.preventDefault();
        Tool.fetch(this,{
            url: `${URLS.DelOrder}`+dId,
            type: "post",
            headers: headers,
            successMethod: function(json){
                //if(json.flag == true){
                console.log("thisNode===="+thisNode);
                thisNode.parentNode.removeChild(thisNode);
                    
                //}                
            }
        })
    },
    //查看物流
    logistics:function(orderId){
        this.props.saveOrderId({orderId: ""});
    },
    render: function() {
          let {productList,orderIndustryName,actualCost,freight,orderStatus,osText,osDispaly,id} = this.props;
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
            osDispaly = "none";
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
                        <span className="mm-but but-org" style={{display:orderStatus == 10 ?"block":"none"}}>付款</span>
                        <span className="mm-but but-def" style={{display:orderStatus == 10 ?"block":"none"}}>取消订单</span>
                        <span className="mm-but but-org" style={{display:orderStatus == 40 ?"block":"none"}}>再次购买</span>
                        <span className="mm-but but-def" onClick={this.delOrder.bind(null,{id})} style={{display:orderStatus == 70 ?"block":"none"}}>删除订单</span>
                        <span className="mm-but but-org" style={{display:orderStatus == 30 ?"block":"none"}}>确认收货</span>
                        <span className="mm-but but-def" onClick={this.logistics.bind(null,{id})} style={{display:orderStatus == 30 ?"block":"none"}}>查看物流</span>
                    </div>
                </div>
        );
     }
});
var NoList = React.createClass({
  render: function() {
    return (
        <div style={{ display: this.props.display }} className="no-list">
            <img src="src/images/appointment/icon-appoint.png" />
            <p>订单还是空的，去逛逛吧~ <br/></p>
            <a href="http://m.jyall.com"><button>继续逛逛</button></a>
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
function mapDispatchToProps(dispatch) {  
  return {
    saveOrderId: (action) => dispatch(order(action))
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(MyOrder);
