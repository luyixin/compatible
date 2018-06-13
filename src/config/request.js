/*
* created by lu.yixin on 2018/06/12
*/

import wx from 'wx'
import Fly from 'flyio'
const request = new Fly()

if (wx) {
  request.interceptors.request.use((request) => {
    wx.showNavigationBarLoading()
    return request
  })

  request.interceptors.response.use((response, promise) => {
    wx.hideNavigationBarLoading()
    return promise.resolve(response.data)
  }, (err, promise) => {
    wx.hideNavigationBarLoading()
    wx.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  })
} else {
  request.interceptors.request.use((request) => {
    return request
  })

  request.interceptors.response.use((response, promise) => {
    return promise.resolve(response.data)
  }, (err, promise) => {
    console.log(err)
    return promise.resolve()
  })
}

export default request
