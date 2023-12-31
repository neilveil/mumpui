import React, { useEffect, useState } from 'react'
import Button from '../button'
import Input from '../input'
import Loader from '../loader'
import Placeholder from '../placeholder'

declare global {
  interface Window {
    toggleSidebar: any
  }
}

interface props {
  className?: string
  style?: React.CSSProperties
  // sidebar
  sidebar?: any
  // header
  header?: any
  title?: any
  icon?: any
  info?: any
  onAdd?: () => void
  headerSuffix?: any
  headerClassName?: string
  headerStyle?: React.CSSProperties
  // body
  children?: any
  loading?: boolean
  empty?: boolean
  search?: string
  onSearch?: (search: string) => void
  filter?: any
  bodyClassName?: string
  bodyStyle?: React.CSSProperties
  // footer
  footer?: any
  onDelete?: () => void
  onCreate?: () => void
  onUpdate?: () => void
  onCancel?: () => void
  footerClassName?: string
  footerStyle?: React.CSSProperties
  // Backward navigation arrow
  minBackNavWidth?: number
}

const _sidebar: any = null
Main.sidebar = _sidebar
Main.minBackNavWidth = 0
Main.width = '1366px'

export default function Main(props: props) {
  const minBackNavWidth = props.minBackNavWidth || Main.minBackNavWidth

  const [expandable, setExpandable] = useState(false)

  const toggleSidebar = () => setExpandable(!expandable)
  window.toggleSidebar = toggleSidebar

  const focusSearch = (e: any) => {
    const isSearchFocused = window.document.activeElement?.id === 'mp-dashboard-search'

    const searchEl: any = document.querySelector('#mp-dashboard-search')
    if (!searchEl) return

    if (e.key === '/' && !isSearchFocused) searchEl.focus()
    else if (e.key === 'Escape' && isSearchFocused) searchEl.blur()
  }

  useEffect(() => {
    window.addEventListener('keyup', focusSearch)
    return () => window.removeEventListener('keyup', focusSearch)
  }, [])

  const sidebar = props.sidebar !== undefined ? props.sidebar : Main.sidebar

  return (
    <div
      className={'mumpui mp-dashboard ' + (props.className || '')}
      style={Object.assign({ maxWidth: Main.width }, props.style || {})}
    >
      {!!minBackNavWidth && window.innerWidth >= minBackNavWidth && (
        <div className='mp-dashboard-back' onClick={() => window.history.back()}>
          🡐
        </div>
      )}

      {!!sidebar && (
        <>
          <div className='mp-dashboard-sidebar'>{sidebar}</div>

          {!!expandable && (
            <div className='mp-dashboard-expandable' onClick={() => toggleSidebar()}>
              <div onClick={e => e.stopPropagation()}>{sidebar}</div>
            </div>
          )}
        </>
      )}

      <div className='mp-dashboard-content'>
        {!!(props.header || props.title) && (
          <div className={'mp-dashboard-header ' + (props.headerClassName || '')} style={props.headerStyle || {}}>
            {!!props.header && props.header}

            <div className='mp-dashboard-header-row'>
              <div className='mp-dashboard-header-left'>
                {!!props.icon && <div className='mp-dashboard-icon'>{props.icon}</div>}

                {!!sidebar && (
                  <div className='mp-dashboard-expandable-icon' onClick={toggleSidebar}>
                    {menuIcon}
                  </div>
                )}

                <div className='mp-dashboard-title'>
                  {props.title}
                  {!!props.info && <span className='mp-dashboard-info'>{props.info}</span>}
                </div>
              </div>

              {!!props.onAdd && (
                <Button primary onClick={props.onAdd}>
                  +&nbsp;&nbsp;Add
                </Button>
              )}
            </div>

            {!!props.headerSuffix && props.headerSuffix}
          </div>
        )}

        <div className='mp-dashboard-body'>
          {props.loading ? (
            <Loader />
          ) : props.empty ? (
            <Placeholder />
          ) : (
            <div className={props.bodyClassName || ''} style={props.bodyStyle || {}}>
              {!!(props.onSearch || props.filter) && (
                <div className='mp-dashboard-body-search-and-filter'>
                  <div>
                    {!!props.onSearch && (
                      <Input
                        id='mp-dashboard-search'
                        value={props.search}
                        onChange={e => props.onSearch && props.onSearch(e.target.value)}
                        placeholder='Search..'
                      />
                    )}
                  </div>

                  <div>{props.filter}</div>
                </div>
              )}
              {!!props.children && props.children}
            </div>
          )}
        </div>

        {(!!props.footer || !!props.onDelete || !!props.onCreate || !!props.onUpdate) && (
          <div className={'mp-dashboard-footer ' + (props.footerClassName || '')} style={props.footerStyle || {}}>
            {!!props.footer && props.footer}

            <div className='mp-dashboard-footer-buttons'>
              <div>
                {!!props.onDelete && (
                  <Button className='d-red c-red' onClick={props.onDelete}>
                    Delete
                  </Button>
                )}
              </div>

              <div>
                {(!!props.onCreate || !!props.onUpdate) && (
                  <>
                    <Button
                      style={{ marginRight: '1rem' }}
                      onClick={() => (props.onCancel ? props.onCancel() : window.history.back())}
                    >
                      Cancel
                    </Button>
                    {props.onCreate ? (
                      <Button primary onClick={props.onCreate}>
                        Create
                      </Button>
                    ) : (
                      <Button className='b-blue c-blue' onClick={props.onUpdate}>
                        Update
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const menuIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='var(--mp-c-font)'>
    <path d='M0,0h24v24H0V0z' fill='none' />
    <path d='M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z' />
  </svg>
)
