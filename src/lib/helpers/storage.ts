import md5 from 'md5'
import keys from 'config/storage'

if (process.env.NODE_ENV === 'production') Object.keys(keys).forEach(key => (keys[key] = md5(key)))

const main = {
  _: Object.keys(keys),
  __: Object.values(keys),

  ...keys,

  get: (key, defaultValue = undefined) => JSON.parse(window.localStorage.getItem(key)) || defaultValue,
  set: (key, value) => window.localStorage.setItem(key, JSON.stringify(value)),
  clear: key => (key ? window.localStorage.removeItem(key) : window.localStorage.clear())
}

export default main

if (process.env.NODE_ENV === 'development') window.storage = main
