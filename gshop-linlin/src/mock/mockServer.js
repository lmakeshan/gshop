/*
使用mockjs提供mock数据接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 返回goods的接口
Mock.mock('/goods', {code: 0, data: data.goods})
// 返回ratings的接口
Mock.mock('/ratings', {code: 0, data: data.ratings})
// 返回info的接口
Mock.mock('/seller', {code: 0, data: data.seller})
Mock.mock('/goods', {code: 0, data: data.goods})
Mock.mock('/ratings', {code: 0, data: data.ratings})
Mock.mock('/info', {code: 0, data: data.info})
Mock.mock('/api/shops', {code: 0, data: data.shops})

Mock.mock('/api/index_category/', {code: 0,
  data: [
    {
      'title': '王者荣耀'
    },
    {
      'title': 'lol'
    }
  ]}
)

Mock.mock('/api/position/', {code: 0, data: {}})

// export default ???  不需要向外暴露任何数据, 只需要保存能执行即可
