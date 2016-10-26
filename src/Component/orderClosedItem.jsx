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
        console.log('订单结算孙子页面...');
        console.log(this.props.goodsVOList);
        let {goodsVOList,payType,storeId}=this.props;
        return (
                            <a className="tanm">
                                {
                                    this.props.goodsVOList.map((item,index)=>
                                        <OrderClosedListItemSun key={index} {...item}/>
                                    )
                                }
                                <div className="liu"><label>留言:</label><input type="text"/></div>
                                
                            </a>
        );
    }
}