import React, {Component, PropTypes} from 'react';
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
                                        <p>{goodsName}<br/><span>{spec==undefined?goodSpec:spec}</span></p>
                                        <p className="price">¥ {storePrice}<br/><span>x{count}</span></p>
                                    </dd>
                            </dl>
        );
    }
}