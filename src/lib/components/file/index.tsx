import { useRef } from 'react'

type props = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  children?: any
  className?: string
  style?: React.CSSProperties
}

export default function Main({ children, className = '', style = {}, ...props }: props) {
  className = 'mumpui mp-file ' + (className || '')

  const ref: React.Ref<any> = useRef()

  return (
    <div className={className} style={style} onClick={() => ref.current.click()}>
      <input {...props} ref={ref} type='file' />
      {children}
    </div>
  )
}
