import React, {Component, PropTypes} from 'react';
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
        this.state = {
            pageNo : 1,
            pageSize : 3,
            more:'上拉加载更多',
            nextPage: false, //下一页控制器
            scrollNoData: false, //分页没有数据
            y:'',
            display: true,
            nolist : 'none',
            list: [],
            industry: "",
            statusPar:""
        };
        this.fetch({"userId":cookie.load('userId'),"industry":"0","status":"1"});

    }

    fetch(data){
        let headers = COMMON_HEADERS_POST();/*cookie.load('userId')*/      
        let self = this;
        console.log(URLS.myOrder);
        Tool.fetch(this,{
            url: `${URLS.myOrder}`,
            type: "post",
            body:JSON.stringify(data),
            headers: headers,
            successMethod: function(json){
                self.setState({list:json.data});
            }
        });
    };
    //切换 mark
    markDisplay(hPar){
        this.setState({display:hPar});
    };
    //切换业态分类
    subScreen(id){
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
            this.fetch({"userId":cookie.load('userId'),"industry":id,"status":e.target.id});
       }
    }
    componentDidUpdate(){
        console.log('this.state.statusPar==============='+this.state.statusPar);
    }
    render() {

        return (
            <div className="my-order">
                <Header title="全部订单" leftIcon="fanhui" hadeScreen="true" callback={this.subScreen.bind(this)} callbackParent={this.markDisplay.bind(this)} />
                <div className="mo-nav">
                    <ul className="clearfix" onClick={this.orderStatusFun.bind(this)} ref="orderStatus">
                        <li id="1" className="active">全部</li>
                        <li id="10">待付款</li>
                        <li id="20">待发货</li>
                        <li id="30">待收货</li>
                    </ul>
                </div>
                <div>
                    {
                        this.state.list.map((item,index) => <OrderList key={index} {...item} />)
                    }
                </div>
                
                <div className="mask" style={{display:this.state.display?"none":"block"}}></div>
            </div>

        );
    }
}

var OrderList = React.createClass({
     render: function() {
          let {productList,orderIndustryName,status,actualCost,freight} = this.props;
          return (
                <div className="mo-main">
                    <div className="mom-head">
                        <div className="fl">
                            <i className="mh-ico mh-icoJd"></i><span className="">{orderIndustryName}</span>
                        </div>
                        <div className="fr">
                            {status}
                        </div>
                    </div>
                    <ul className="mom-list">
                    {
                        productList.map((item,index) => {
                            return(
                                <li className="" key={index}>
                                    <a href="">
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
                                    </a>
                                </li> 
                            )
                        })
                    }
                    </ul>
                    <div className="mm-total">共{}件商品 合计：{actualCost}(含运费￥{freight})</div>
                    <div className="mm-total">
                        <a href="javascript:;" className="mm-but but-def">取消订单</a>
                        <a href="javascript:;" className="mm-but but-org">付款</a>
                    </div>
                </div>
        );
     }
});
export default MyOrder;
