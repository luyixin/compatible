import request from './request'

const baseUrlApi = 'https://pre.91xiangke.com/'

const api = {
  postTest: r => request.post('support/clientVersion/findNewVersionWeChatMini', null, {
    baseURL: baseUrlApi
  })
}

export default api
