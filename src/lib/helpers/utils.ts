import Fuse from 'fuse.js'
import wrapper from './wrapper'

// pixel-to-rem

export const copyText = async text => {
  if (wrapper.IS_WRAPPER) await wrapper.async(wrapper.COPY_TO_CLIPBOARD, text)
  else {
    const el = document.createElement('input')
    el.value = text
    el.select()
    el.setSelectionRange(0, 99999) /* For mobile devices */
    navigator.clipboard.writeText(el.value)
  }
}

export const sortObjects = (objects = [], key = 'name') => {
  const data = structuredClone(objects)

  data.sort((a, b) => {
    if (typeof a[key] === 'string' && typeof b[key] === 'string') {
      return a[key].localeCompare(b[key])
    } else return a[key] - b[key]
  })

  return data
}

export const search = (objects = [], keys = [], search = '') =>
  search ? new Fuse(objects, { keys }).search(search).map(({ item }) => item) : objects

export const delay = n => new Promise(resolve => setTimeout(resolve, n * 1000))

export const plural = (value = '', suffix = '') => `${value} ${suffix}${value === 1 ? '' : 's'}`
