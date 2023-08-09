import React, { useState } from 'react'
import Menu from '../menu'
import Button from '../button'
import Input from '../input'
import Pagination from '../pagination'
import './styles.scss'

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
}

interface props {
  // sidebar
  sidebar?: any
  sidebarIcon?: string
  sidebarItems: sidebarItem[]
  onSidebarClick?: (key: string) => void
  // header
  header?: any
  title?: any
  icon?: any
  info?: any
  onAdd?: () => void
  headerSuffix?: any
  // body
  children?: any
  loading?: boolean
  empty?: boolean
  placeholder?: any
  search?: string
  onSearch?: (search: string) => void
  filter?: any
  // footer
  footer?: any
  onDelete?: () => void
  onCreate?: () => void
  onUpdate?: () => void
  onCancel?: () => void
  // pagination
  paginationPageSize?: number
  paginationTotal?: number
  paginationOffset?: number
  paginationOnChange?: (offset: number) => void
}

export default function Main(props: props) {
  const [menuItemSelected, setMenuItemSelected] = useState(window.location.pathname)
  const [expandable, setExpandable] = useState(false)

  const toggleSidebar = () => setExpandable(!expandable)
  window.toggleSidebar = toggleSidebar

  const sidebarItems = sidebarItemsGenerator(props.sidebarItems)

  const sidebar = (
    <>
      {!!props.sidebar && props.sidebar}

      {!!props.sidebarIcon && (
        <div className='mp-dashboard-sidebar-icon'>
          <img src={props.sidebarIcon} alt='' />
        </div>
      )}

      <Menu
        selected={menuItemSelected}
        onSelect={selected => {
          if (props.onSidebarClick) props.onSidebarClick(selected.toString())
          setMenuItemSelected(selected.toString())
        }}
        items={sidebarItems}
      />
    </>
  )

  return (
    <div className='mp-dashboard'>
      <div className='mp-dashboard-sidebar'>{sidebar}</div>

      {!!expandable && (
        <div className='mp-dashboard-expandable' onClick={() => toggleSidebar()}>
          <div onClick={e => e.stopPropagation()}>{sidebar}</div>
        </div>
      )}

      <div className='mp-dashboard-content'>
        {!!(props.header || props.title) && (
          <div className='mp-dashboard-header'>
            {!!props.header && props.header}

            <div className='mp-dashboard-header-row'>
              <div className='mp-dashboard-header-left'>
                <div className='mp-dashboard-icon'>{props.icon}</div>
                <div className='mp-dashboard-expandable-icon' onClick={toggleSidebar}>
                  {menuIcon}
                </div>

                <div className='mp-dashboard-title'>
                  {props.title}
                  {!!props.info && <span className='mp-dashboard-info'>{props.info}</span>}
                </div>
              </div>

              {!!props.onAdd && (
                <Button type='primary' onClick={props.onAdd}>
                  +&nbsp;&nbsp;Add
                </Button>
              )}
            </div>
            {!!props.headerSuffix && props.headerSuffix}
          </div>
        )}

        <div className='mp-dashboard-body'>
          {props.loading ? (
            'Loading..'
          ) : props.empty ? (
            'Empty'
          ) : (
            <>
              {!!(props.onSearch || props.filter) && (
                <div className='mp-dashboard-body-search-and-filter'>
                  <div>
                    {!!props.onSearch && (
                      <Input
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
            </>
          )}
        </div>

        {(!!props.footer || !!props.paginationTotal || !!props.onDelete || !!props.onCreate || !!props.onUpdate) && (
          <div className='mp-dashboard-footer'>
            {!!props.footer && props.footer}

            <div className='mp-dashboard-pagination'>
              {!!props.paginationTotal && (
                <Pagination
                  pageSize={props.paginationPageSize || 0}
                  total={props.paginationTotal}
                  offset={props.paginationOffset || 0}
                  onChange={props.paginationOnChange || (() => {})}
                />
              )}
            </div>

            <div className='mp-dashboard-footer-buttons'>
              <div>
                {!!props.onDelete && (
                  <Button type='dashed' onClick={props.onDelete}>
                    Delete
                  </Button>
                )}
              </div>

              <div>
                {(!!props.onCreate || !!props.onUpdate) && (
                  <>
                    <Button
                      type='dashed'
                      style={{ marginRight: '1rem' }}
                      onClick={() => (props.onCancel ? props.onCancel() : window.history.back())}
                    >
                      Cancel
                    </Button>
                    {props.onCreate ? (
                      <Button type='primary' onClick={props.onCreate}>
                        Create
                      </Button>
                    ) : (
                      <Button type='primary' onClick={props.onUpdate}>
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
  sidebar.map(({ name, icon, path, next }: sidebarItem) => ({
    key: path || Math.random(),
    name,
    icon,
    next: next ? sidebarItemsGenerator(next) : []
  }))

const menuIcon = (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='var(--mp-c-font)'>
    <path d='M0,0h24v24H0V0z' fill='none' />
    <path d='M3,18h13v-2H3V18z M3,13h10v-2H3V13z M3,6v2h13V6H3z M21,15.59L17.42,12L21,8.41L19.59,7l-5,5l5,5L21,15.59z' />
  </svg>
)
