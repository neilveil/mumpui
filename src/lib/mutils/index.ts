import compress from './compress'
import DepthHandler from './depthHandler'
import ScrollHandler from './scrollHandler'
import request from './request'
import search from './search'
import theme from './theme'
import uh from './uh'

var _URL = window.URL || window.webkitURL

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

const blobToObjectURL = (blob: Blob) => URL.createObjectURL(blob)
const revokeObjectURL = (url: string) => URL.revokeObjectURL(url)

const blobToDataURL = (file: Blob) =>
  new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => resolve((reader.result || '').toString())
    reader.onerror = error => reject(error)
    reader.readAsDataURL(file)
  })

const dataURLToBlob = (uri: string) =>
  new Promise<Blob>(async (resolve, reject) => {
    try {
      const res = await fetch(uri)
      const blob = await res.blob()
      resolve(blob)
    } catch (error) {
      reject(error)
    }
  })

const getImageWidthHeight = (file: Blob) =>
  new Promise<{ width: number; height: number }>((resolve, reject) => {
    const img = new Image()
    var objectUrl = _URL.createObjectURL(file)
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      })
      _URL.revokeObjectURL(objectUrl)
    }
    img.onerror = error => reject(error)
    img.src = objectUrl
  })

export default {
  DepthHandler,
  IS,
  NEW,
  ONCE,
  ScrollHandler,
  blobToDataURL,
  blobToObjectURL,
  compress,
  copyText,
  dataURLToBlob,
  delay,
  dispatch,
  getImageWidthHeight,
  listen,
  plural,
  request,
  revokeObjectURL,
  round,
  search,
  sortObjects,
  theme,
  uh,
  uniqueArrayOfObjects
}
