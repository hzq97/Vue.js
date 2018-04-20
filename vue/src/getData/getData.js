/*
* @Author: anchen
* @Date:   2018-03-06 14:14:59
* @Last Modified by:   anchen
* @Last Modified time: 2018-03-12 10:22:51
*/
// 引入axios
import axios from 'axios'
import $ from 'jquery'

let $http = axios.create({
  baseURL: 'http://route.showapi.com/255-1'
})
// 请求的东西
function getDataList (params) {
  let newParams = Object.assign({
    showapi_appid: '58833',
    showapi_sign: 'cde313d35333467a8c44dd9f7bbc099b',
    page: '3'
  }, params)
  // console.log(newParams)
  return $http.get('', {
    // 配置项--参数项
    method: 'get',
    // get方法对应的传参
    params: newParams
  })
}

// 百思不得其姐game
function getGameList (index, type, pagesize) {
  return $.ajax({
    url: 'http://jiejiegame.spriteapp.cn/Services/GameData.ashx?action=gamelist&index=' + index + '&pagesize=' + pagesize + '&type=' + type + '&width=1000&height=1000',
    data: JSON,
    dataType: 'json',
    async: false,
    success: function (data) {
      data = data.list
      return data
    }
  })
}

// 奇闻异事
function getgslist (page) {
  return $.ajax({
    // type: 'post',
    url: 'http://route.showapi.com/955-1',
    dataType: 'json',
    async: false,
    data: {
      'showapi_appid': '57908',
      'showapi_sign': 'b8a102b8287f4989b32bfc4ee24685dd',
      'type': 'dp',
      'page': page
    },

    error: function (XmlHttpRequest, textStatus, errorThrown) {
      alert('操作失败!')
    },
    success: function (result) {
      console.log(result)
      result = result.showapi_res_body.pagebean.contentlist
      return result
    }
  })
}
// 请求的东西
function getDesc (params, id) {
  let newParams = Object.assign({
    'showapi_appid': '57908',
    'showapi_sign': 'b8a102b8287f4989b32bfc4ee24685dd',
    page: 1
  }, params)
  return $.ajax({
    // type: 'post',
    url: 'http://route.showapi.com/955-2?id=' + id,
    dataType: 'json',
    async: false,
    data: newParams,

    error: function (XmlHttpRequest, textStatus, errorThrown) {
      alert('操作失败!')
    },
    success: function (result) {
      console.log(result)
      return result
    }
  })
}
export { getDataList, getGameList, getgslist, getDesc }
