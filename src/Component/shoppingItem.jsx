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
    }

    select(){
        if(this.refs.icon.src.match("invalid")){
            return;
        }

        let isLogin = 0,
            uKey = cookie.load('tokenid'),
            groupSkuId = this.props.groupId+"_"+this.props.skuId,
            suitIds = 
            count=1,
            self = this; 
        if(cookie.load('tokenid'))isLogin = 1;

        if(this.refs.icon.src.match("no_select")){
            this.refs.icon.src = "src/images/shopping/select.png";
            this.props.callback2(true,this.props.index);
            Tool.fetch(this.props.parent,{
                url: `${URLS.MINUSITEM}${isLogin}/${uKey}/${groupSkuId}/${count}`,
                type: "put",
                headers: COMMON_HEADERS,
                successMethod: function(json){
                    if(json.flag == true){
                        self.setState({num: --self.state.num});
                        if(self.state.num == 1){self.setState({color: "#999999"});}
                        self.props.callback({num: self.state.num,index: self.props.index});
                    }
                }
            });
        }else{
            this.refs.icon.src = "src/images/shopping/no_select.png";
            this.props.callback2(false,this.props.index);
            Tool.fetch(this.props.parent,{
                url: `${URLS.CONCELITEM}${isLogin}/${uKey}/${groupSkuId}/${count}`,
                type: "put",
                headers: COMMON_HEADERS,
                successMethod: function(json){
                    if(json.flag == true){
                        self.setState({num: --self.state.num});
                        if(self.state.num == 1){self.setState({color: "#999999"});}
                        self.props.callback({num: self.state.num,index: self.props.index});
                    }
                }
            });
        }
    }

    render() {
        console.log(this.props);
        let {skuName,mainImg,speczs,sellPrice,state,count,select,status,salesState ,stock } = this.props;
        let icon = (state==1&&status==1&&salesState==2)?(select?"src/images/shopping/select.png":"src/images/shopping/no_select.png"):"src/images/shopping/invalid.png",
            width = state==1?".4rem":".6rem",
            width2 = state==1?"2.6rem":"2.8rem";

        return (
            <li onClick={this.select.bind(this)}>
    			<span style={{ width: width2 }}>
    			    <img src={icon} className="fl" ref = "icon" style={{ width: width }} />
    			    <img src={mainImg} className="fl" />
    			</span>
    			<div className = "shopping-content">
    				<p className="item-title">{skuName}</p>
    				<p>{speczs}</p>
    				<p>￥{sellPrice}</p>
    			</div>
    			<AddReduce num={count} callback={this.props.callback} index={this.props.index} groupSkuId={this.props.groupId+"_"+this.props.skuId} stock={stock} parent={this.props.parent} />
    		</li>
        );
    }
}

// ShoppingItem.propTypes = {//德意（DE&E）269E+170G抽油烟机 环保包邮
//   num: PropTypes.string.isRequired
// }