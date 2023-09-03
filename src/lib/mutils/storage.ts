const main = {
  get: (key: string, defaultValue = undefined) =>
    JSON.parse(window.localStorage.getItem(key) || 'null') || defaultValue,
  set: (key: string, value: any) => window.localStorage.setItem(key, JSON.stringify(value)),
  clear: (key?: string) => (key ? window.localStorage.removeItem(key) : window.localStorage.clear())
}

export default main
