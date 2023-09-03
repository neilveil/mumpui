export default class Main {
  constructor(id = 'scrollable') {
    const el = document.getElementById(id)
    if (!el) return
    Main.scrollPositions[Main._genKey(id)] = el.scrollTop
  }
  static scrollPositions: any = {
    // '$path#id': 0
  }
  static set = (id = 'scrollable', clear = true) => {
    const el = document.getElementById(id)

    if (!el) return
    const scrollTop = Main.scrollPositions[Main._genKey(id)] || 0

    setTimeout(() => (el.scrollTop = scrollTop))

    if (clear) Main.clear()
  }
  static clear = (id = 'scrollable') => {
    delete Main.scrollPositions[Main._genKey(id)]
  }
  static _genKey = (id: string) => window.location.pathname + '#' + id
}
