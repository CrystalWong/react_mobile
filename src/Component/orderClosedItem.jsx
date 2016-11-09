import React, {Component, PropTypes} from 'react';
import {OrderClosedListItemSun} from '../Component/orderClosedItemSun';
/**
 * @export
 * @class AddReduce
 * @extends {Component}
 */
export class OrderClosedListItem extends Component {
    render() {
        //let {address,couponUserList,goodsTotalFee,orderTotalFee,storeVOList,totalShipFee} = this.props;
        let {goodsVOList,payType,storeId}=this.props;
        return (
                            <a className="tanm">
                                {
                                    this.props.goodsVOList.map((item,index)=>
                                        <OrderClosedListItemSun key={index} {...item}/>
                                    )
                                }
                                <div className="liu"><label>留言:</label><input type="text" maxLength="200"/></div>
                                
                            </a>
        );
    }
}