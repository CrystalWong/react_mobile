import {ONLINE} from '../constants/common';
const domain = ONLINE?'http://m.jyall.com':'http://localhost:3000';

/**
 * URL常量.
 * @type {Object}
 */
export default {
	//登录
	LOGIN: `${domain}/user-api/v1/authcenter/app/userLogin`,
	LOGINRANDOMIMAGE: `${domain}/user-api/v1/authcenter/app/randomImage`,
	//注册
	Vcode: `${domain}/user-api/v1/authcenter/app/vcode/`,
	Register: `${domain}/user-api/v1/authcenter/app/addUser`,
	//找回密码
	FINDPWDBYMOBILE: `${domain}/user-api/v1/authcenter/app/resetPswByMobile/`,//{mobile}/{password}
	CHECKMOBILE: `${domain}/user-api/v1/authcenter/user/checkMobile/`,
	//购物车列表
	QUERYCART: `${domain}/jygoods-api/v1/jycart/queryCart`,
	//购物车物品数量加1
	ADDITEM: `${domain}/jygoods-api/v1/jycart/addItem/`,
	//购物车物品数量减1
	MINUSITEM: `${domain}/jygoods-api/v1/jycart/minusItem/`,
	//选择购物项
	SELECTITEM: `${domain}/jygoods-api/v1/jycart/selectItem/`,
	//取消选择购物项
	CONCELITEM: `${domain}/jygoods-api/v1/jycart/cancelItem/`,
	//收货地址
	Address : `${domain}/user-manage/v1/address`,
	//家园豆
	bean : `${domain}/jysales-api/v1/coupon/getUserCouponAndBeanInfo`,
	//订单结算
	OrderClosed:`${domain}/jyorder-center/v1/order/app/appSettlement`,
	//提交订单
	SubmitOrder:`${domain}/jyorder-center/v1/order/app/submitOrder`,
	//订单详情
	OrderDetail:`${domain}/jyorder-center/v1/order/app/queryOrderById`,
	//订单详情-删除订单-post
	DeleateOrder:`${domain}/v1/order/app/deleteOrderById/`,
	//订单详情-确认收货-post
	ConfirmGetDoods:`${domain}/v1/order/app/batchReceipt/`,
	//订单详情-取消订单-post
	CancelOrder:`${domain}/v1/order/app/cancleOrderById/`,
	//预约单
	APPOINTMENTLIST:`${domain}/jyall-workflowV2/v1/orderquery/pageorder/user`,
	//四级地址  http://10.10.32.46/swagger/index.html#!
	PROVINCE: `${domain}/common-city/v1/province/queryAllProvinces`,  //?containChilds=false
	CITY: `${domain}/common-city/v1/city/queryCitys/`, //130000000
	COUNTRY: `${domain}/common-city/v1/country/queryCountrysByCityId/`,
	XZ: `${domain}/common-city/v1/xz/getXzsByCountyId/`,
	//预约
	YUYUE: `${domain}/jyall-workflowV2/v1/order/yuyue/stateless`,
	YUYUECODE: `${domain}/jyall-workflowV2/v1/order/yuyue/sendIdentifyCode/`,
	//商品推荐
	RECOMMENDGOODS: `${domain}/jygoods-api/v1/goods/recommend/goods/`
};