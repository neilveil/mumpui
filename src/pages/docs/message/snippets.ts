export const s1 = `
<Button onClick={() => Message.success('Success message!')}>Success</Button>

<Button onClick={() => Message.error('Error message!')}>Error</Button>

<Button onClick={() => Message.warn('Warn message!')}>Warn</Button>

<Button onClick={() => Message.info('Info message')}>Info</Button>
`

export const s2 = `
<Button onClick={() => Message.loading('Loading..', 1000)}>Loader</Button>

<Button onClick={() => Message.loading('Wait..', 0)}>Loading till clear</Button>

<Button onClick={() => Message.clear()} style={{ border: 'none' }}>Clear</Button>
`

export const s3 = `
<Button onClick={() => Message.info('Message 1', 0)}>Message 1</Button>

<Button
  onClick={() => {
    message = Message.info('Message 2', 0)
  }}
>
  Message 2
</Button>

<Button onClick={() => Message.clear(message)}>Clear message 2</Button>

<Button onClick={() => Message.clear()}>Clear all</Button>
`

export const s4 = `
// Default duration: 3000ms
// Default max count: 3
<MumpUI message={{ duration: 2000, max: 1 }} />
`
