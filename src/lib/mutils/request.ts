// import axios from 'axios'
// window.axios = axios

declare global {
  interface Window {
    axios: any
  }
}

const main = ({ baseURL = '', url = '', args = {}, method = 'get', headers = {}, params = {}, data = {} }) =>
  window
    .axios({
      baseURL,
      url,
      method,
      headers,
      ...(method === 'get' ? { params: Object.assign(args, params) } : { data: Object.assign(args, data) })
    })
    .then((res: any) => res.data || {})
    .catch((error: any) => error?.response?.data || {})

export default main
