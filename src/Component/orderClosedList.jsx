import React, {Component, PropTypes} from 'react';
import {OrderClosedListItem} from '../Component/orderClosedItem';
/**
 * @export
 * @class AddReduce
 * @extends {Component}
 */
export class OrderClosedList extends Component {
    render() {
        let {address,couponUserList,goodsTotalFee,orderTotalFee,storeVOList,totalShipFee} = this.props;
        return (
            <div>
                            {
                                storeVOList.map((item,index)=>
                                    <OrderClosedListItem key={index} {...item}/>
                                )
                            }
                            
            </div>
        );
    }
}