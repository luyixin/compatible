/*
* created by lu.yixin on 2018/06/12
*/

import Fly from 'flyio'
const request = new Fly()

request.interceptors.request.use((request) => {
  return request
})

request.interceptors.response.use((response, promise) => {
  return promise.resolve(response.data)
}, (err, promise) => {
  console.log(err)
  return promise.resolve()
})

export default request
