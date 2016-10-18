import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/myorder';

/**
 * 模块入口
 * 
 * @class MyOrder
 * @extends {Component}
 */
class MyOrder extends Component {
    render() {
        return (
            <div className="my-order">
                <Header title="全部订单" leftIcon="fanhui" hadeScreen="true"/>
                <div className="mo-nav">
                    <ul className="clearfix">
                        <li className="active">全部</li>
                        <li>待付款</li>
                        <li className="active">待发货</li>
                        <li>待收货</li>
                    </ul>
                </div>
                <div className="mo-main">
                    <div className="mom-head">
                        <div className="fl">
                            <i className="mh-ico mh-icoJd"></i><span className="">家电</span>
                        </div>
                        <div className="fr">
                            未付款
                        </div>
                    </div>
                    <ul className="mom-list">
                        <li className="">
                            <a href="">
                                <div className="ml-col1">
                                    <img src="../images/myorder/momh-icoJd.png" />
                                </div>
                                <div className="ml-col2">
                                    <h2>得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得</h2>
                                    <p>颜色分类:银白色银白色银白色银白色银白色银白色银白色银白色银白色银白色银白色银白色</p>
                                </div>
                                <div className="ml-col3">
                                    <div className="ml-price">￥21222.00</div>
                                    <div className="ml-num">X1</div>
                                </div>
                            </a>
                        </li>
                        <li className="">
                            <a href="">
                                <div className="ml-col1">
                                    <img src="../images/myorder/momh-icoJd.png" />
                                </div>
                                <div className="ml-col2">
                                    <h2>得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得得</h2>
                                    <p>颜色分类:银白色银白色银白色银白色银白色银白色银白色银白色银白色银白色银白色银白色</p>
                                </div>
                                <div className="ml-col3">
                                    <div className="ml-price">￥21222.00</div>
                                    <div className="ml-num">X1</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div className="mm-total">共几件商品</div>
                    <div className="mm-total">
                        <a href="javascript:;" className="mm-but but-def">取消订单</a>
                        <a href="javascript:;" className="mm-but but-org">付款</a>
                    </div>
                </div>
            </div>

        );
    }
}

export default MyOrder;
