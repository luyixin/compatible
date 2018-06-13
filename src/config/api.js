import request from './request'

const baseUrlApi = 'https://xxx.xxx.xxx/'

const api = {
  postTest: r => request.post('xxx', null, {
    baseURL: baseUrlApi
  })
}

export default api
