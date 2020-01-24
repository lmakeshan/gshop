/* 与后台交互模块 */

/* get, post, put, delete */
/* 查，增，改，删 */

import ajax from './ajax'
/**
  *  获取地址信息（根据经纬度串）
  */
export const reqAddress = geohash => ajax('/api/position/')

/**
  *  获取msite页面食品分类列表
  */
export const reqCategorys = () => ajax('/api/index_category/')

/**
  * 获取msite商铺列表（根据经纬度）
  */
export const reqShops = ({latitude, longitude}) => ajax('/api/shops')

/**
  * 账户密码登录
  */
export const reqPwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name, // 名字
  pwd, // 密码
  captcha // 验证码
}, 'POST')

/**
 * 获取短信验证码
 */
export const reqSendCode = phone => ajax('/api/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const reqSmsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/**
 * 获取用户信息（根据会话）
 */
export const reqUserInfo = () => ajax('/api/userinfo')

/**
 * 请求登出
 */
export const reqLogout = () => ajax('/api/logout')

/**
 * 获取商家信息
 */
export const reqShopInfo = () => ajax('/shop_info')

/**
 * 获取商家评价数组
 */
export const reqShopRatings = () => ajax('/shop_ratings')

/**
 * 获取商家商品数组
 */
export const reqShopGoods = () => ajax('/shop_goods')
