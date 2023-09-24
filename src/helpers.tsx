interface meta {
  title?: string
  description?: string
  img?: string
  keywords?: string[]
}

export const SetMeta = ({ title = '', description = '', img = '/logo.png', keywords = [] }: meta) => {
  const titleEl = document.querySelector('title')
  const ogTitleEl = document.querySelector('meta[property="og:title"]')
  if (titleEl) titleEl.innerHTML = title
  if (ogTitleEl) ogTitleEl.setAttribute('content', title)

  const descriptionEl = document.querySelector('meta[name="description"]')
  const ogDescriptionEl = document.querySelector('meta[property="og:description"]')
  if (descriptionEl) descriptionEl.setAttribute('content', description)
  if (ogDescriptionEl) ogDescriptionEl.setAttribute('content', description)

  const ogImgEl = document.querySelector('meta[property="og:image"]')
  if (ogImgEl) ogImgEl.setAttribute('content', 'https://neilveil.github.io/mumpui' + img)

  const canonicalEl = document.querySelector('link[rel="canonical"]')
  if (canonicalEl) canonicalEl.setAttribute('href', 'https://neilveil.github.io/mumpui' + window.location.pathname)

  const keywordsEl = document.querySelector('meta[name="keywords"]')
  if (keywordsEl) keywordsEl.setAttribute('content', keywords.join(','))
}

export const iconCleaner = (data: any) => {
  const _data = JSON.parse(JSON.stringify(data))

  const updateIcon = (x: any) => {
    if (x.length) {
      x.forEach(updateIcon)
      return
    }

    if (x.icon) x.icon = `--<span className='icon'>${x.icon.props.children}</span>--`

    if (x?.next?.length) updateIcon(x.next)
  }

  updateIcon(_data)

  return JSON.stringify(_data, null, 2).replaceAll('"--', '').replaceAll('--"', '')
}
