import React, {Component, PropTypes} from 'react';
import {Tool, merged} from '../Tool';
/**
 * @export
 * @class AddReduce
 * @extends {Component}
 */
export class OrderClosedListItemSun extends Component {
    render() {
        //let {address,couponUserList,goodsTotalFee,orderTotalFee,storeVOList,totalShipFee} = this.props;
        let {goodsName,goodsMainPhoto,goodsPrice,storePrice,count,spec,goodSpec}=this.props;
        console.log(spec);console.log(goodSpec);
        return (
                            <dl className="clearfix">
                                    <dt>
                                        <img src={goodsMainPhoto}/>
                                    </dt>
                                    <dd>
                                    <p><span className="biaoName">{goodsName}</span><br/><span>{spec==undefined?goodSpec:spec}</span></p>
                                        <p className="price">¥ {Tool.toDecimal2(storePrice)}<br/><span>x{count}</span></p>
                                    </dd>
                            </dl>
        );
    }
}