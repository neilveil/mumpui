import { Docs } from 'components'
import { Field, Range } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [value, setValue] = useState(10)

  return (
    <Docs name='range'>
      <Docs.Showcase code={snippets.s1}>
        <Field label={'Range (' + value + ')'}>
          <Range value={value} onValue={value => setValue(value)} step={5} />
        </Field>
      </Docs.Showcase>

      <Docs.Props title='Range' type='component' fields={[{ name: '..', usage: 'All input element props' }]} />
    </Docs>
  )
}
