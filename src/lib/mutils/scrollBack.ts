const scrollPositions: { [page: string]: number } = {}

// Use id

export default {
  init: () => {
    setTimeout(() => {
      const page = window.location.pathname
      if (page in scrollPositions) {
        window.scrollTo(0, scrollPositions[page])
        delete scrollPositions[page]
      }
    })
  },
  save: () => (scrollPositions[window.location.pathname] = window.scrollY)
}
