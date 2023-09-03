export default class Main {
  depth = 0
  constructor(path = '/') {
    this.depth = path.split('/').length
  }
  back = (delta = 1) => {
    const backCount = window.location.pathname.split('/').length + delta - this.depth
    if (backCount > 0) window.history.go(-backCount)
  }
}
