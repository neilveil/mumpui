declare global {
  interface Window {
    Fuse: any
  }
}

export default (array: object[], keys: string[], search: string, options = {}) => {
  if (!search) return array

  const fuse = new window.Fuse(array, { keys, ...options })

  return fuse.search(search).map(({ item }: any) => item)
}
