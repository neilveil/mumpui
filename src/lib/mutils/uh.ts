// URL handler

const main = {
  // Parse query object from path
  // Assume window.location.search = '?eyJhIjoxLCJiIjoyfQ==', then
  // () -> {a: 1, b: 2}
  // ('a') -> 1
  // (null, '?eyJhIjoxLCJiIjoyfQ==') -> {a: 1, b: 2}
  get: (key: string, from = window.location.search) => {
    try {
      const obj = JSON.parse(window.atob(from.slice('?'.length)))

      if (key) return obj[key] !== undefined ? obj[key] : null
      else return obj
    } catch (error) {
      return null
    }
  },

  // Generate query string from object
  // ({a: 1, b: 2}, '/a/b') -> '/a/b?eyJhIjoxLCJiIjoyfQ=='
  gen: (content = {}, prefix = '') => prefix + '?' + window.btoa(JSON.stringify(content))
}

export default main
