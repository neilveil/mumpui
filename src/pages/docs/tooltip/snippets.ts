export const s1 = `
<div style={{ display: 'flex', gap: '1rem' }}>
  <Tooltip label='Left tooltip' position='left'>
    <div style={{ background: 'var(--mp-c-light)', padding: '1rem' }}>Left</div>
  </Tooltip>

  <Tooltip label='Top tooltip' position='top'>
    <div style={{ background: 'var(--mp-c-light)', padding: '1rem' }}>Top</div>
  </Tooltip>

  <Tooltip label='Bottom tooltip' position='bottom'>
    <div style={{ background: 'var(--mp-c-light)', padding: '1rem' }}>Bottom</div>
  </Tooltip>

  <Tooltip label='Right tooltip' position='right'>
    <div style={{ background: 'var(--mp-c-light)', padding: '1rem' }}>Right</div>
  </Tooltip>
</div>
`

export const s2 = `
<div style={{ display: 'flex', gap: '1rem' }}>
  <Tooltip label='No delay tooltip' delay={0}>
    <div style={{ background: 'var(--mp-c-light)', padding: '1rem' }}>0</div>
  </Tooltip>

  <Tooltip label='2 seconds wait tooltip' position='top' delay={2000}>
    <div style={{ background: 'var(--mp-c-light)', padding: '1rem' }}>2000</div>
  </Tooltip>
</div>
`

export const s3 = `
// Default 300
<MumpUI message={{ delay: 500 }} />
`
