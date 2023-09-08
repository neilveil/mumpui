import { Docs } from 'components'
import { Note } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Note'>
      <Docs.Showcase
        title={<span></span>}
        code={`
<Note type='default'>Default note!</Note>
<Note type='red'>Red note!</Note>
<Note type='blue'>Blue note!</Note>
<Note type='green'>Green note!</Note>
<Note type='yellow'>Yellow note!</Note>
<Note type='quote'>Quote note!</Note>
`}
      >
        <Note type='default'>Default note!</Note>
        <Note type='red'>Red note!</Note>
        <Note type='blue'>Blue note!</Note>
        <Note type='green'>Green note!</Note>
        <Note type='yellow'>Yellow note!</Note>
        <Note type='quote'>Quote note!</Note>
      </Docs.Showcase>

      <Docs.Props
        title='Button'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'note', type: 'string', usage: 'default | red | blue | green | yellow | quote' }
        ]}
      />
    </Docs>
  )
}
