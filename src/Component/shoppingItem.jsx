import React, {Component, PropTypes} from 'react';
import cookie from 'react-cookie';
import {AddReduce} from '../Component/AddReduce';
import {Tool, merged} from '../Tool';
import URLS from '../constants/urls';
import {COMMON_HEADERS_POST,COMMON_HEADERS} from '../constants/headers';
/**
 * @export
 * @class ShoppingItem
 * @extends {Component}
 */
export class ShoppingItem extends Component {
    constructor(props) {
        super(props);
        this.sx = 0;
        this.ex = 0;
    }

    select(){
        if(this.refs.icon.src.match("invalid")){
            return;
        }

        let isLogin = 0,
            uKey = cookie.load('tokenid')?cookie.load('tokenid'):cookie.load('jycart_uKey'),
            groupSkuId = this.props.groupId+"_"+this.props.skuId,
            suitIds = "",
            self = this; 
        if(cookie.load('tokenid') != "undefined")isLogin = 1;

        if(this.itemSelect == "no_select"){
            Tool.fetch(this.props.obj,{
                url: `${URLS.SELECTITEM}${isLogin}/${uKey}?groupSkuIds=${groupSkuId}&selectAll=0&source=2`,
                type: "put",
                headers: COMMON_HEADERS,
                successMethod: function(json){
                    console.log(json);
                    if(json.flag == true){
                        self.refs.icon.src = require('../images/shopping/select.png');
                        self.props.obj.selectItem++;
                        self.props.callback2(true,self.props.index);
                    }
                }
            });
        }else if(this.itemSelect == "select"){
            Tool.fetch(this.props.obj,{
                url: `${URLS.CONCELITEM}${isLogin}/${uKey}?groupSkuIds=${groupSkuId}&selectAll=0&source=2`,
                type: "put",
                headers: COMMON_HEADERS,
                successMethod: function(json){
                    if(json.flag == true){
                        self.refs.icon.src = require('../images/shopping/no_select.png');
                        self.props.obj.selectItem--;
                        self.props.callback2(false,self.props.index);
                    }
                }
            });
        }
    }

    toDeail(e){
        e.stopPropagation(); 
        e.preventDefault();
        location.href = `http://m.jyall.com/goods/${this.props.groupId}/${this.props.skuId}.html`;
    }

    touch(event){
        var event = event || window.event; 
   
        switch(event.type){  
            case "touchstart":  
                this.sx = event.touches[0].clientX;  
                break;  
            case "touchend":  
                this.ex = event.changedTouches[0].clientX;  
                console.log(this.refs);
                console.log(this.sx);
                console.log(this.ex);
                if(this.sx - this.ex > 20){
                    this.refs.del.className = "delete delete-out";
                }else if(this.sx - this.ex < -20){
                    this.refs.del.className = "delete";
                }
                break;  
            case "touchmove":  
                event.preventDefault();  
                // x = event.touches[0].clientX;  
                break;  
        }          
    }

    delete(e){
        e.stopPropagation(); 
        e.preventDefault();  
        let isLogin = 0,
            uKey = cookie.load('tokenid')?cookie.load('tokenid'):cookie.load('jycart_uKey'),
            groupSkuId = this.props.groupId+"_"+this.props.skuId,
            self = this;      
        if(cookie.load('tokenid') != "undefined")isLogin = 1;   
        Tool.fetch(this.props.obj,{
            url: `${URLS.REMOVEITEM}${isLogin}/${uKey}/${groupSkuId}?source=2`,
            type: "delete",
            headers: COMMON_HEADERS,
            successMethod: function(json,status){
                if(json.flag == true){
                    location.reload();
                }
            }
        });              
    }

    componentDidMount(){
        this.refs.li.addEventListener('touchstart',this.touch.bind(this), false);  
        // this.refs.li.addEventListener('touchmove',this.touch.bind(this), false);  
        this.refs.li.addEventListener('touchend',this.touch.bind(this), false);  
    }
    render() {
        console.log(this.props);
        let {skuName,mainImg,speczs,sellPrice,state,count,select,status,salesState ,stock } = this.props;
        let icon = (state==1&&status==1&&salesState==2)?(select?require("../images/shopping/select.png"):require("../images/shopping/no_select.png")):require("../images/shopping/invalid.png"),
            width = state==1?".4rem":".6rem",
            width2 = state==1?"2.6rem":"2.8rem";

        this.itemSelect = "invalid";    
        if(state==1&&status==1&&salesState==2&&select){
            this.itemSelect = "select";
            // this.props.obj.selectItem++; 
        }else if(state==1&&status==1&&salesState==2&&!select){
            this.itemSelect = "no_select";

        }
        if(stock==0||salesState==3){//库存为0 或下架
            this.itemSelect = "invalid";
        }          

        return (
            <li ref="li">
    			<span style={{ width: width2 }}>
    			    <img src={icon} className="fl" ref = "icon" style={{ width: width }} onClick={this.select.bind(this)} />
    			    <img src={mainImg?mainImg:""} className="fl" onClick={this.toDeail.bind(this)} />
    			</span>
    			<div className = "shopping-content" onClick={this.toDeail.bind(this)}>
    				<p className="item-title">{skuName}</p>
                    <p>{speczs&&speczs.map((item) =>item.specName+":"+item.specValueName+" ")}</p>
    				<p>￥{sellPrice}</p>
    			</div>
    			<AddReduce num={count} callback={this.props.callback} index={this.props.index} groupSkuId={this.props.groupId+"_"+this.props.skuId} stock={stock} parent={this.props.obj} />
    		    <div ref="del" className="delete" onClick={this.delete.bind(this)}>删除</div>
            </li>
        );
    }
}

// ShoppingItem.propTypes = {//德意（DE&E）269E+170G抽油烟机 环保包邮
//   num: PropTypes.string.isRequired
// }