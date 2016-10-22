import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import { Link } from 'react-router';
import {Header} from '../Component/common/index';
import '../Style/shoppingcart';
import {ShoppingItem} from '../Component/ShoppingItem';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';
import {COMMON_HEADERS} from '../constants/headers';
import {shoppingCartCount} from '../Action/ShoppingCart';
import {Toast,Confirm} from '../Component/common/Tip';

/**
 * 模块入口
 * 
 * @class ShoppingCart
 * @extends {Component}
 */
class ShoppingCart extends Component {
	constructor(props) {
        
        super(props);
        console.log(this.props);
        this.state = {
            title: "购物车()",
            list: [],
            allMoney: 0,
            allNum: 0,
            tipContent: '',
            display: '',
            nolist: 'none',
            recommentList: [],
            confirm: {
                title: "以下商品不足或已下架，无法被购买您可以继续结算其他商品",
                content: "<img src='http://image1.jyall.com/v1/tfs/T1QyWTBjWg1RXrhCrK.jpg' /><img src='http://image1.jyall.com/v1/tfs/T1QyWTBjWg1RXrhCrK.jpg' />", 
                leftText: "取消",
                leftMethod: function(){
                    alert("取消");
                },
                rightText: "确定",
                rightMethod: function(){
                    alert("确定");
                },
                display: "none"
            }
        };

        let headers = COMMON_HEADERS();
        let self = this;
        this.count = 0;
        Tool.fetch(this,{
            url: `${URLS.QUERYCART}?tokenId=${cookie.load('tokenid')}`,
            type: "get",
            body: "",
            headers: headers,
            successMethod: function(json){
            	if(json.code == 400001012){
            		//用户未登录
            		return;
            	}
            	self.allMoney = 0;
            	self.allNum = 0;
            	json.cartItems.map(item => {
                    if(item.state==1&&item.status==1&&item.salesState==2&&item.select){
                        self.allMoney += item.count*item.sellPrice;
                        self.allNum += item.count;
                    }
            	})

            	if(json.totalItemCount > 999){json.totalItemCount = "999+";}
                // json.cartItems = [];
                self.setState({ 
                	list: json.cartItems,
                	title: "购物车("+ json.totalGoodsCount +")",
                	allMoney: self.allMoney,
                	allNum: self.allNum,
                    nolist: json.cartItems.length==0?"block":"none"
                });
            }
        });

        Tool.fetch(this,{
            url: `${URLS.RECOMMENDGOODS}1?userId=${cookie.load("userId")}&num=4`,
            type: "get",
            headers: COMMON_HEADERS,
            successMethod: function(json,status){
                if(status == 200){
                    self.setState({recommentList:json});
                }
            }
        });
    }

    toastDisplay(state){
        this.setState({
          display: state
        });
    }

    //给子组件回调 数量加减
    shoppingCartCount(data){ 
        if(data.more){
            self.setState({ tipContent: "已达库存上限",display: 'toasts' });
        }
        let list = this.state.list,
            self = this,
            allItem = 0;
        this.allMoney = 0;
        this.allNum = 0;
        list[data.index].count = data.num;

        list.map(item => {
            if(item.state==1&&item.status==1&&item.salesState==2&&item.select){
                self.allMoney += item.count*item.sellPrice;
                self.allNum += item.count;
            }
            allItem += item.count;
        })

        this.setState({
            list: list,
            title: "购物车("+ allItem +")",
            allMoney: self.allMoney,
            allNum: self.allNum
        });
    }

    //给子组件回调 每项选择结算
    selectStatement(select,index){
        let list = this.state.list;
        list[index].select = select;
        let self = this;
        self.allMoney = 0;
        self.allNum = 0;
        list.map(item => {
            if(item.state==1&&item.status==1&&item.salesState==2&&item.select){
                self.allMoney += item.count*item.sellPrice;
                self.allNum += item.count;
            }
        })
        this.setState({list: list,allMoney: self.allMoney,allNum: self.allNum});
    }

    selectAll(){//全选
        let list = this.state.list,
            selectAll = this.refs.selectAll,
            selectControl = false,
            self = this;
        self.allMoney = 0;
        self.allNum = 0;

        let isLogin = 0,
            uKey = cookie.load('tokenid');
        if(cookie.load('tokenid'))isLogin = 1;


        if(selectAll.className.match("selectall")){
            Tool.fetch(this.props.parent,{
                url: `${URLS.CONCELITEM}${isLogin}/${uKey}?selectAll=1`,
                type: "put",
                headers: COMMON_HEADERS,
                successMethod: function(json){
                    if(json.flag == true){
                        selectAll.className = "no-select-all";
                        selectControl = false;
                        result();
                    }
                }
            });
        }else {
            Tool.fetch(this,{
                url: `${URLS.SELECTITEM}${isLogin}/${uKey}?selectAll=1`,
                type: "put",
                headers: COMMON_HEADERS,
                successMethod: function(json){
                    if(json.flag == true){
                        selectAll.className = "no-select-all selectall";
                        selectControl = true;
                        result();
                    }
                }
            });
        }

        let result = function(){
            list.map(item => {
                if(item.state==1&&item.status==1&&item.salesState==2){
                    item.select = selectControl;
                    if(selectControl){
                        self.allMoney += item.count*item.sellPrice;
                        self.allNum += item.count;
                    }
                }
            })
            self.setState({list: list,allMoney: self.allMoney,allNum: self.allNum});
        }

    }

    statement(e){ //结算
        e.stopPropagation(); 
        // e.preventDefault();
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} leftIcon="fanhui" />
                <div className="shoppingc-art">
                	<ul>
                	    {
                            this.state.list.map((item,index) =>
					            <ShoppingItem key={item.skuId} index={index} callback={this.shoppingCartCount.bind(this)} callback2={this.selectStatement.bind(this)} {...item} />
					        )
                        }
                	</ul>
                	<footer onClick={this.selectAll.bind(this)}>
                		<span className="no-select-all" ref="selectAll">全选</span>
                		<div className="fr">合计:<span style={{color: "#cc0000",marginRight: ".2rem"}}>￥{this.state.allMoney}</span><Link to="/orderclosed"><b className="statement" onClick={this.statement.bind(this)}>结算(<span>{this.state.allNum}</span>)</b></Link></div>
                	</footer>
                </div>
                <NoList display={this.state.nolist} recommentList={this.state.recommentList} />
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} parent={this} />
                <Confirm  {...this.state.confirm}/>
                <div className="mask" style={{display: this.state.confirm.display}}></div>
            </div>
        );
    }
}


//没有数据时的显示
var NoList = React.createClass({

  render: function() {
    return (
        <div style={{ display: this.props.display }} className="no-list">
            <div style={{ background: "#fff",padding: ".8rem 0 1.2rem" }}>
                <img src="src/images/shopping/empty_shopping.png" />
                <p>购物车里还什么都没有<br/>赶快去逛逛吧~ <br/></p>
                <a href="http://m.jyall.com"><button>去看看</button></a>
            </div>
            <div className="like-floor">
                <h3><span>为您推荐</span></h3>
                <ul className="lf-list">
                    {
                        this.props.recommentList.map((item,index) =>(
                            <li key={index}>
                                <a className="clearfix" href={item.URL}>
                                    <div className="lf-thumb">
                                        <img src={item.image} title="" />
                                    </div>
                                    <div className="lf-tit">
                                        <h6>{item.name}</h6>
                                        <p>¥ {item.price}</p>
                                    </div>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
  }
});

export default ShoppingCart;  