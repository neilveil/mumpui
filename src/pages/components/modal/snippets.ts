export const s1 = `
const [visible, setVisible] = useState(false)

..

<Modal visible={visible} onClose={() => setVisible(false)}>
  <div style={{ fontSize: '1.25rem' }}>Demo Modal</div>

  <div style={{ fontSize: '.8rem', marginTop: '.5rem' }}>
    This is dummy modal. You can render anything inside.
  </div>

  <div className='flex-end' style={{ marginTop: '2rem' }}>
    <Button onClick={() => setVisible(false)}>Close</Button>
  </div>
</Modal>
`
