import { Docs } from 'components'
import { Note } from 'lib'
import * as snippets from './snippets'

export default function Main() {
  return (
    <Docs name='Note'>
      <Docs.Showcase code={snippets.s1}>
        <Note>Default note!</Note>
        <Note type='red'>Red note!</Note>
        <Note type='blue'>Blue note!</Note>
        <Note type='green'>Green note!</Note>
        <Note type='yellow'>Yellow note!</Note>
        <Note type='quote'>Quote!</Note>
      </Docs.Showcase>

      <Docs.Props
        title='Note'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          {
            name: 'type',
            type: 'string',
            usage: (
              <span>
                <code>red</code>
                <code>blue</code>
                <code>green</code>
                <code>yellow</code>
                <code>quote</code>
              </span>
            )
          }
        ]}
      />
    </Docs>
  )
}
