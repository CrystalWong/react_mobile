import React, {Component, PropTypes} from 'react';
/**
 * @export
 * @class AddReduce
 * @extends {Component}
 */
export class OrderClosedListItemSun extends Component {
    render() {
        //let {address,couponUserList,goodsTotalFee,orderTotalFee,storeVOList,totalShipFee} = this.props;
        console.log('订单结二孙子页面...');
        console.log(this.props);
        let {goodsName,goodsMainPhoto,goodsPrice,count,spec}=this.props;
        return (
                            <dl className="clearfix">
                                    <dt>
                                        <img src={goodsMainPhoto}/>
                                    </dt>
                                    <dd>
                                        <p>{goodsName}<br/><span>{spec}</span></p>
                                        <p className="price">¥ {goodsPrice}<br/><span>x{count}</span></p>
                                    </dd>
                            </dl>
        );
    }
}