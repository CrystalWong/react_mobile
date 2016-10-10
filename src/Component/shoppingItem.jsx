import React, {Component, PropTypes} from 'react';
import {AddReduce} from '../Component/AddReduce';
/**
 * @export
 * @class AddReduce
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
        if(this.refs.icon.src.match("no_select")){
            this.refs.icon.src = "src/images/shopping/select.png";
            this.props.callback2(true,this.props.index);
        }else{
            this.refs.icon.src = "src/images/shopping/no_select.png";
            this.props.callback2(false,this.props.index);
        }
    }

    render() {
        console.log(this.props);
        let {skuName,mainImg,speczs,sellPrice,state,count,select,status,salesState  } = this.props;
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
    			<AddReduce num={count} callback={this.props.callback} index={this.props.index} />
    		</li>
        );
    }
}

// ShoppingItem.propTypes = {//德意（DE&E）269E+170G抽油烟机 环保包邮
//   num: PropTypes.string.isRequired
// }