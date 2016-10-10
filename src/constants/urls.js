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
	//购物车列表
	QUERYCART: `${domain}/jygoods-api/v1/jycart/queryCart`,
	//下载地址
	Download : 'https://itunes.apple.com/cn/app/jin-se-jia-yuan-wang/id1033724221?mt=8',
	//家园豆
	bean : `${domain}/jysales-api/v1/coupon/getUserCouponAndBeanInfo`
};