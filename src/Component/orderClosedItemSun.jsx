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
        let {goodsName,goodsMainPhoto,goodsPrice,count,spec,goodSpec}=this.props;
        console.log(spec);console.log(goodSpec);
        return (
                            <dl className="clearfix">
                                    <dt>
                                        <img src={goodsMainPhoto}/>
                                    </dt>
                                    <dd>
                                        <p>{goodsName}<br/><span>{spec==undefined?goodSpec:"没有返回规格"}</span></p>
                                        <p className="price">¥ {goodsPrice}<br/><span>x{count}</span></p>
                                    </dd>
                            </dl>
        );
    }
}