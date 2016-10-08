import React, {Component, PropTypes} from 'react';
import {Header} from '../Component/common/index';
import '../Style/shoppingcart';

/**
 * 模块入口
 * 
 * @class ShoppingCart
 * @extends {Component}
 */
class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <Header title="购物车()" leftIcon="fanhui" />
                <div className="shoppingc-art">
                	<ul>
                		<li>
                			<img src="src/images/shopping/no_select.png" />
                			<img src="src/images/shopping/item.png" />
                			<div>
                				<p>德意（DE&E）269E+170G抽油烟机 环保包邮</p>
                				<p>颜色分类：银白色</p>
                				<p>￥2180.00</p>
                			</div>
                		</li>
                	</ul>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;