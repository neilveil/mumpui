import { Link } from 'react-router-dom'
import s from './styles.module.scss'
import { Input } from 'lib'
import { Children, useEffect, useRef, useState } from 'react'

interface main {
  children?: any
  type: 'Component' | 'Helper' | 'Style'
  name: string
  test?: any
}

export default function Main(props: main) {
  return (
    <div className={s.main}>
      <div className={s.header}>
        <Link to='/'>
          <div className={s.back}>
            <span className='icon'>west</span> Back
          </div>
        </Link>

        <div className={s.title}>{['MumpUI', props.type, props.name].join(' / ')}</div>

        {props.children}
      </div>
    </div>
  )
}

Main.Info = ({ children }: { children?: any }) => <div className={s.info}>{children}</div>

Main.Showcase = ({ children, info, code }: { children?: any; info?: any; code?: string }) => {
  const [viewCode, setViewCode] = useState(false)
  const ref: any = useRef()

  useEffect(() => {
    if (ref.current) ref.current.innerHTML = window.Prism?.highlight(code, window.Prism.languages.jsx, 'jsx')
  }, [viewCode])

  code = (code || '').trim()

  return (
    <div className={s.showcase}>
      {!!info && <Main.Info>{info}</Main.Info>}

      {!!code && (
        <div className={s.switch}>
          <div>
            <div>
              <span className='icon' onClick={() => navigator.clipboard.writeText(code || '')}>
                copy
              </span>
            </div>

            {viewCode ? (
              <div onClick={() => setViewCode(!viewCode)}>
                <span className='icon'>code_off</span> Hide code
              </div>
            ) : (
              <div onClick={() => setViewCode(!viewCode)}>
                <span className='icon'>code</span>Show code
              </div>
            )}
          </div>
        </div>
      )}

      <div className={s.element}>{children}</div>

      {!!viewCode && (
        <div className={s.code}>
          <pre ref={ref}></pre>
        </div>
      )}
    </div>
  )
}

type field = {
  name?: string
  type?: 'string' | 'number' | 'boolean'
  usage?: string
  required?: boolean
}

interface props {
  title?: string
  fields?: field[]
}

Main.Props = (props: props) => (
  <div>
    <div className={s.props}>{props.title || 'Props'}</div>

    <div className={s.table}>
      <table>
        <thead>
          <tr>
            <td className={s.name}>*</td>
            <td className={s.name}>Name</td>
            <td className={s.type}>Type</td>
            <td className={s.usage}>Usage</td>
          </tr>
        </thead>

        <tbody>
          {props.fields?.map((x, i) => (
            <tr key={i}>
              <td className={s.required}>{x.required ? '*' : ''}</td>
              <td className={s.name}>
                <code>{x.name}</code>
              </td>
              <td className={s.type}>{x.type}</td>
              <td className={s.usage}>{x.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)
