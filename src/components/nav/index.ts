;<nav className={s.nav} onClick={() => this.forceUpdate()}>
  {['Typography', 'Components', 'Helpers', 'Stories'].map(x => (
    <Link key={x} to={'/' + x.toLowerCase()}>
      <div
        className={
          window.location.pathname === '/' + x.toLocaleLowerCase() ||
          (window.location.pathname === '/' && x === 'Showcase')
            ? s.selected
            : ''
        }
      >
        {x}
      </div>
    </Link>
  ))}
</nav>
