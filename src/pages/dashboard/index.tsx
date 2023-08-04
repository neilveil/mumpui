import React, { useState } from 'react'
import s from './styles.module.scss'
import { Dashboard, Menu } from 'lib'
import { useNavigate } from 'react-router-dom'

export default function Main() {
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  return (
    <div className={s.main}>
      <Dashboard
        icon={<Icon icon='search' />}
        title='Dashboard'
        info='10 items'
        onAdd={() => {}}
        //
        search={search}
        onSearch={search => setSearch(search)}
        filter={
          <div
            style={{
              display: 'flex',
              fontSize: '.8rem',
              gap: '1rem',
              color: 'var(--c-font-light)',
              cursor: 'pointer',
              userSelect: 'none'
            }}
          >
            <div>Last 100</div>
            <div
              style={{
                color: 'var(--c-font-dark)'
              }}
            >
              All
            </div>
          </div>
        }
        //
        // onCreate={() => {}}
        // onDelete={() => {}}
        //
        paginationPageSize={10}
        paginationTotal={956}
        paginationOffset={0}
        paginationOnChange={() => {}}
        //
        sidebarIcon='/logo.png'
        sidebarItems={[
          { name: 'Dashboard', icon: <Icon icon='search' />, path: '/dashboard' },
          { name: 'Home', icon: <Icon icon='home' />, path: '/dashboard-1' },
          { name: 'Settings', icon: <Icon icon='settings' />, path: '/dashboard-2' },
          { name: 'Delete', icon: <Icon icon='delete' />, path: '/dashboard-3' },
          {
            name: 'Visibility',
            icon: <Icon icon='visibility' />,
            path: '/dashboard-4',
            next: [
              { name: 'Language', icon: <Icon icon='language' />, path: '/dashboard-6' },
              { name: 'Done', icon: <Icon icon='done' />, path: '/dashboard-7' },
              { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' }
            ]
          },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' },
          { name: 'Favorite', icon: <Icon icon='favorite' />, path: '/dashboard-5' }
        ]}
        onSidebarClick={key => navigate(key, { replace: true })}
      >
        This is my dashboard.
      </Dashboard>
    </div>
  )
}

const Icon = ({ icon = '' }) => <span className='icon'>{icon}</span>
