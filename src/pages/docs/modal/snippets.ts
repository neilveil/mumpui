export const s1 = `
const [visible, setVisible] = useState(false)

..

<Modal
  title='Demo Modal'
  leftButtons={[
    <Button key='close' onClick={() => setVisible(false)}>
      Close
    </Button>
  ]}
  buttons={[
    <Button key='done' className='f-green c-bg' onClick={() => setVisible(false)}>
      Done
    </Button>
  ]}
  visible={visible}
  onClose={() => setVisible(false)}
>
  <div style={{ fontSize: '.8rem', marginTop: '.5rem' }}>
    This is dummy modal. You can render anything inside.
  </div>
</Modal>
`
