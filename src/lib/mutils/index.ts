import DepthHandler from './depthHandler'
import ScrollHandler from './scrollHandler'
import request from './request'
import search from './search'
import theme from './theme'
import uh from './uh'

const dispatch = (event: string, data: any) => window.dispatchEvent(new CustomEvent(event, { detail: data }))
const listen = (event: string, cb: any) => window.addEventListener(event, cb)

const delay = (n: number) => new Promise(resolve => setTimeout(resolve, n))

const plural = (value = 0, suffix = '') => `${value} ${suffix}${value === 1 ? '' : 's'}`

const round = (value = 0, decimal = 2) => parseFloat(parseFloat(value.toString()).toFixed(decimal))

const IS = ({ visible = true, children }: { visible: any; children: any }) => (visible ? children : null)

const NEW = (obj = {}) => JSON.parse(JSON.stringify(obj))

const ONCE =
  (fn: any) =>
  (...args: any) => {
    if (fn) {
      fn(...args)
      fn = null
      return true
    } else return false
  }

const sortObjects = (objs = [], key = 'name') =>
  objs.sort((a: any, b: any) => {
    const _a = typeof a[key] === 'string' ? (a[key] || '').toLowerCase() : a[key] || 0
    const _b = typeof b[key] === 'string' ? (b[key] || '').toLowerCase() : a[key] || 0
    return _a > _b ? 1 : _b > _a ? -1 : 0
  })

const uniqueArrayOfObjects = (array = [], key = 'id') => {
  const keyObjectMap = {}
  for (const x of array) keyObjectMap[x[key]] = x
  return Object.values(keyObjectMap)
}

const copyText = async (text: string) => {
  const el = document.createElement('input')
  el.value = text
  el.select()
  el.setSelectionRange(0, 99999) /* For mobile devices */
  navigator.clipboard.writeText(el.value)
}

export default {
  DepthHandler,
  IS,
  NEW,
  ONCE,
  ScrollHandler,
  copyText,
  delay,
  dispatch,
  listen,
  plural,
  request,
  round,
  search,
  sortObjects,
  theme,
  uh,
  uniqueArrayOfObjects
}
