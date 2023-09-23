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
