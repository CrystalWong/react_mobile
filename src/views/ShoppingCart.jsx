import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookie';
import {Header} from '../Component/common/index';
import '../Style/shoppingcart';
import {ShoppingItem} from '../Component/ShoppingItem';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';
import {COMMON_HEADERS} from '../constants/headers';
import {shoppingCartCount} from '../Action/ShoppingCart';
import {Toast} from '../Component/common/Tip';

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
            display: ''
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
                self.setState({ 
                	list: json.cartItems,
                	title: "购物车("+ json.totalGoodsCount +")",
                	allMoney: self.allMoney,
                	allNum: self.allNum
                });
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
        if(selectAll.className.match("selectall")){
            selectAll.className = "no-select-all";
            selectControl = false;
        }else {
            selectAll.className = "no-select-all selectall";
            selectControl = true;
        }
        list.map(item => {
            if(item.state==1&&item.status==1&&item.salesState==2){
                item.select = selectControl;
                if(selectControl){
                    self.allMoney += item.count*item.sellPrice;
                    self.allNum += item.count;
                }
            }
        })
        this.setState({list: list,allMoney: self.allMoney,allNum: self.allNum});
    }

    statement(e){ //结算
        e.stopPropagation(); 
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <Header title={this.state.title} leftIcon="fanhui" />
                <div className="shoppingc-art">
                	<ul>
                	    {this.state.list.map((item,index) =>
					      <ShoppingItem key={item.skuId} index={index} callback={this.shoppingCartCount.bind(this)} callback2={this.selectStatement.bind(this)} {...item} />
					    )}
                	</ul>
                	<footer onClick={this.selectAll.bind(this)}>
                		<span className="no-select-all" ref="selectAll">全选</span>
                		<div className="fr">合计:<span style={{color: "#cc0000",marginRight: ".2rem"}}>￥{this.state.allMoney}</span><b className="statement" onClick={this.statement.bind(this)}>结算(<span>{this.state.allNum}</span>)</b></div>
                	</footer>
                </div>
                <Toast content={this.state.tipContent} display={this.state.display} callback={this.toastDisplay.bind(this)} parent={this} />
            </div>
        );
    }
}

export default ShoppingCart;  


//全局state替换本地组件之间state
// function mapStateToProps(state,ownProps) {
//   console.log(state);  
//   return {
//     shoppingcart: state.shoppingCart
//   };
// }
// function mapDispatchToProps(dispatch) {  
//   return {
//     shoppingCartCount: (user) => dispatch(shoppingCartCount(count))
//   };
// }
// export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);