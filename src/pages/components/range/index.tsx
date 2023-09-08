import { Docs } from 'components'
import { Field, Range } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState('0')

  return (
    <Docs name='Range'>
      <Docs.Showcase
        title={<span></span>}
        code={`
const [value, setValue] = useState('0')

..

<Field label={'Range (' + value + ')'}>
  <Range type='range' value={value} onChange={e => setValue(e.target.value)} step={5} />
</Field>
`}
      >
        <Field label={'Range (' + value + ')'}>
          <Range type='range' value={value} onChange={e => setValue(e.target.value)} step={5} />
        </Field>
      </Docs.Showcase>

      <Docs.Props title='Button' fields={[{ name: '..', usage: 'All input element props' }]} />
    </Docs>
  )
}
