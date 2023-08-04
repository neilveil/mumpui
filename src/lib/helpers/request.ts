import axios from 'axios'

const main = ({ baseURL = '', url = '', args = {}, method = 'get', headers = {} }) =>
  axios({ baseURL, url, method, headers, ...(method === 'get' ? { params: args } : { data: args }) })
    .then(res => res.data || {})
    .catch(error => error?.response?.data || {})

export default main
