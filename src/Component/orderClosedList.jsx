import React, {Component, PropTypes} from 'react';
/**
 * @export
 * @class AddReduce
 * @extends {Component}
 */
export class OrderClosedList extends Component {
    render() {
        let {address,couponUserList,goodsTotalFee,orderTotalFee,storeVOList,totalShipFee} = this.props;
        console.log(".....订单结算子组件");
        //console.log(storeVOList);
        // storeVOList.map((item,index) =>
        //                             console.log(item)
        //                         )
        return (
                        <a className="tanm">
                            {
                                if(storeVOList.length!=undefined&&storeVOList.length!=0){
                                    console.log(storeVOList)
                                }
                            }
                            <dl className="clearfix">
                                <dt>
                                    <img src="http://image1.jyall.com/v1/tfs/T1TqJ_BTWv1RXrhCrK.jpg"/>
                                </dt>
                                <dd>
                                    <p>艾理思 美式实木真皮配布沙发 Y630-19<br/><span>颜色分类:<span>红色</span></span></p>
                                    <p className="price">¥ 9250.00<br/><span>x1</span></p>
                                </dd>
                            </dl>
                            <div className="liu"><label>留言:</label><input type="text"/></div>
                        </a>
        );
    }
}