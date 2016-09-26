const domain = 'http://localhost:3000';//本地调试
//const domain = 'http://app.jyall.com';//线上、测试

/**
 * URL常量.
 * @type {Object}
 */
export default {
	//登录
	LOGIN: `${domain}/user-api/v1/authcenter/app/userLogin`,
	//注册
	Vcode: `${domain}/user-api/v1/authcenter/app/vcode/`,
	Register: `${domain}/user-api/v1/authcenter/app/addUser`,
	//下载地址
	Download : 'https://itunes.apple.com/cn/app/jin-se-jia-yuan-wang/id1033724221?mt=8'
};