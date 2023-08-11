export const theme = {
  key: 'MP_THEME',
  get: () => (document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark'),
  set: (_theme: 'light' | 'dark', save = false) => {
    document.body.setAttribute('data-theme', _theme)
    if (save) window.localStorage.setItem(theme.key, _theme)
  },
  toggle: (save = false) => {
    const _theme = theme.get() === 'light' ? 'dark' : 'light'
    theme.set(_theme)
    if (save) window.localStorage.setItem(theme.key, _theme)
  },
  init: () => {
    const savedTheme: any = window.localStorage.getItem(theme.key) || 'light'
    if (['light', 'dark'].includes(savedTheme)) theme.set(savedTheme)
  }
}

// setMeta
// pixel-to-rem
// copyText
// sortObject
// search
// delay
// plural
// round
// download
// csv
// arrayToggle
// unique

// import Fuse from 'fuse.js'
// import wrapper from './wrapper'

// export const copyText = async text => {
//   if (wrapper.IS_WRAPPER) await wrapper.async(wrapper.COPY_TO_CLIPBOARD, text)
//   else {
//     const el = document.createElement('input')
//     el.value = text
//     el.select()
//     el.setSelectionRange(0, 99999) /* For mobile devices */
//     navigator.clipboard.writeText(el.value)
//   }
// }

// export const sortObjects = (objects = [], key = 'name') => {
//   const data = structuredClone(objects)

//   data.sort((a, b) => {
//     if (typeof a[key] === 'string' && typeof b[key] === 'string') {
//       return a[key].localeCompare(b[key])
//     } else return a[key] - b[key]
//   })

//   return data
// }

// export const search = (objects = [], keys = [], search = '') =>
//   search ? new Fuse(objects, { keys }).search(search).map(({ item }) => item) : objects

// export const delay = n => new Promise(resolve => setTimeout(resolve, n * 1000))

// export const plural = (value = '', suffix = '') => `${value} ${suffix}${value === 1 ? '' : 's'}`
