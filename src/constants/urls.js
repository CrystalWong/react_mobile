const domain = 'http://localhost:3000';//本地调试
//const domain = 'http://app.jyall.com';//线上、测试

/**
 * URL常量.
 * @type {Object}
 */
export default {
	//登录
	LOGIN: `${domain}/user-api/v1/authcenter/app/userLogin`,
	//登出
	LOGOUT: `${domain}/v1_0/supplier/account/logout`,
	// 获取商家发货地址列表 取第一个使用
	GET_ADDRESS_ID: `${domain}/v1_0/shop/supplier_address/list/`
};