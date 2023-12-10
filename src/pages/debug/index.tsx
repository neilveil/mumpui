import { Button, Modal } from 'lib'

export default function Main() {
  return (
    <div>
      <Modal title='My modal' buttons={[<Button key={0}>Submit</Button>, <Button key={1}>Submit</Button>]} noScrollbar>
        <div style={{ height: 2000 }}>Hello there!</div>
      </Modal>
    </div>
  )
}
