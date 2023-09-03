import React from 'react'

type props = {
  source: string
  platform: 'youtube'
  aspectRatio?: number
  className?: string
  style?: React.CSSProperties
}

const Youtube = ({ source, className, style }: Partial<props>) => (
  <iframe
    width='100%'
    style={style}
    className={className}
    src={'https://www.youtube.com/embed/' + source}
    title='Why does E=MC²?'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    frameBorder={0}
    allowFullScreen
  />
)

export default function Main({ source, platform, aspectRatio, className, style = {} }: props) {
  className = 'mp-embed ' + (className || '')
  if (aspectRatio) style = Object.assign({ aspectRatio }, style)

  if (platform === 'youtube') return <Youtube {...{ source, className, style }} />

  return null
}
