import React, { useEffect, useState } from 'react'
import Menu from '../menu'
import Button from '../button'
import Input from '../input'
import Pagination from '../pagination'
import { Loader, Placeholder } from 'lib'

declare global {
  interface Window {
    toggleSidebar: any
  }
}

interface sidebarItem {
  icon?: any
  name: any
  path?: string
  next?: sidebarItem[]
  access?: string | string[]
}

interface props {
  className?: string
  style?: React.CSSProperties
  // sidebar
  sidebarImg?: string
  sidebarItems?: sidebarItem[]
  sidebarAccess?: string[]
  onSidebarClick?: (path: string) => void
  sidebarClassName?: string
  sidebarStyle?: React.CSSProperties
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
  // pagination
  paginationPageSize?: number
  paginationTotalItems?: number
  paginationOffset?: number
  paginationOnChange?: (offset: number) => void
}

export default function Main(props: props) {
  const [menuItemActive, setMenuItemSelected] = useState(window.location.pathname)
  const [expandable, setExpandable] = useState(false)

  const toggleSidebar = () => setExpandable(!expandable)
  window.toggleSidebar = toggleSidebar

  const sidebarItems = sidebarItemsGenerator(props.sidebarItems)

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

  const sidebar = (
    <div className={props.sidebarClassName || ''} style={props.sidebarStyle || {}}>
      {!!props.sidebarImg && (
        <div className='mp-dashboard-sidebar-icon'>
          <img src={props.sidebarImg} alt='' />
        </div>
      )}

      <Menu
        active={menuItemActive}
        onClick={selected => {
          if (props.onSidebarClick) props.onSidebarClick(selected.toString())
          setMenuItemSelected(selected.toString())
        }}
        items={sidebarItems}
        access={props.sidebarAccess}
      />
    </div>
  )

  return (
    <div className={'mumpui mp-dashboard ' + (props.className || '')} style={props.style || {}}>
      <div className='mp-dashboard-sidebar'>{sidebar}</div>

      {!!expandable && (
        <div className='mp-dashboard-expandable' onClick={() => toggleSidebar()}>
          <div onClick={e => e.stopPropagation()}>{sidebar}</div>
        </div>
      )}

      <div className='mp-dashboard-content'>
        {!!(props.header || props.title) && (
          <div className={'mp-dashboard-header ' + (props.headerClassName || '')} style={props.headerStyle || {}}>
            {!!props.header && props.header}

            <div className='mp-dashboard-header-row'>
              <div className='mp-dashboard-header-left'>
                {!!props.icon && <div className='mp-dashboard-icon'>{props.icon}</div>}
                <div className='mp-dashboard-expandable-icon' onClick={toggleSidebar}>
                  {menuIcon}
                </div>

                <div className='mp-dashboard-title'>
                  {props.title}
                  {!!props.info && <span className='mp-dashboard-info'>{props.info}</span>}
                </div>
              </div>

              {!!props.onAdd && (
                <Button className='mp-dashboard-button-add' onClick={props.onAdd}>
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

        {(!!props.footer ||
          !!props.paginationTotalItems ||
          !!props.onDelete ||
          !!props.onCreate ||
          !!props.onUpdate) && (
          <div className={'mp-dashboard-footer ' + (props.footerClassName || '')} style={props.footerStyle || {}}>
            {!!props.footer && props.footer}

            <div className='mp-dashboard-pagination'>
              {!!props.paginationTotalItems && (
                <Pagination
                  pageSize={props.paginationPageSize || 0}
                  totalItems={props.paginationTotalItems}
                  offset={props.paginationOffset || 0}
                  onChange={props.paginationOnChange || (() => {})}
                />
              )}
            </div>

            <div className='mp-dashboard-footer-buttons'>
              <div>
                {!!props.onDelete && (
                  <Button className='mp-dashboard-button-delete' onClick={props.onDelete}>
                    Delete
                  </Button>
                )}
              </div>

              <div>
                {(!!props.onCreate || !!props.onUpdate) && (
                  <>
                    <Button
                      className='mp-dashboard-button-cancel'
                      style={{ marginRight: '1rem' }}
                      onClick={() => (props.onCancel ? props.onCancel() : window.history.back())}
                    >
                      Cancel
                    </Button>
                    {props.onCreate ? (
                      <Button className='mp-dashboard-button-create' onClick={props.onCreate}>
                        Create
                      </Button>
                    ) : (
                      <Button className='mp-dashboard-button-update' onClick={props.onUpdate}>
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

const sidebarItemsGenerator: any = (sidebar: sidebarItem[] = []) =>
  sidebar.map(({ name, icon, path, next, access }: sidebarItem) => ({
    key: path || Math.random(),
    label: name,
    icon,
    next: next ? sidebarItemsGenerator(next) : [],
    access
  }))

const menuIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='var(--mp-c-font)'>
    <path d='M0,0h24v24H0V0z' fill='none' />
    <path d='M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z' />
  </svg>
)
