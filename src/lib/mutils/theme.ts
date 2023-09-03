const key = 'MP_THEME'

const get = () => (document.body.getAttribute('data-theme') === 'light' ? 'light' : 'dark')

const set = (_theme: 'light' | 'dark', save = false) => {
  document.body.setAttribute('data-theme', _theme)
  if (save) window.localStorage.setItem(key, _theme)
}

const toggle = (save = false) => {
  const _theme = get() === 'light' ? 'dark' : 'light'
  set(_theme)
  if (save) window.localStorage.setItem(key, _theme)
}

const init = () => {
  const savedTheme: any = window.localStorage.getItem(key) || 'light'
  if (['light', 'dark'].includes(savedTheme)) set(savedTheme)
}

export default { get, set, toggle, init }
