import request from '@/utils/request'

export function getGoodsList(queryType, queryList) {
  return request({
    url: '/goods/goods-list',
    method: 'post',
    data: { queryType, queryList }
  })
}

export function getGoodsWithComment(queryList) {
  return request({
    url: '/goods/goods-with-comment',
    methods: 'get',
    params: {
      queryList: queryList
    }
  })
}

export function getGoodsCategory(queryType, queryList) {
  return request({
    url: '/goods/goods-category',
    method: 'get',
    params: { queryType, queryList }
  })
}

export function getCategoryList() { // 获取所有的分类列表
  return request({
    url: '/goods/category-list',
    method: 'get'
  })
}

export function addProduct(product) {
  return request({
    url: '/goods/create-product',
    method: 'post',
    data: product
  })
}

export function addSkuDefinition(sku) {
  return request({
    url: '/goods/create-sku-definition',
    method: 'post',
    data: sku
  })
}

export function addSkuValue(sku) {
  return request({
    url: '/goods/create-sku',
    method: 'post',
    data: sku
  })
}

