export const s1 = `
const [visible, setVisible] = useState(false)

..

<Modal
  title='Demo Modal'
  buttons={<Button onClick={() => setVisible(false)}>Close</Button>}
  visible={visible}
  onClose={() => setVisible(false)}
>
  <div style={{ fontSize: '.8rem', marginTop: '.5rem' }}>
    This is dummy modal. You can render anything inside.
  </div>
</Modal>
`
