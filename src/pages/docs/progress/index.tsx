import { Docs } from 'components'
import { Field, Progress, Range } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [percent, setPercent] = useState(40)

  return (
    <Docs name='progress'>
      <Docs.Showcase code={snippets.s1}>
        <Progress percent={percent} />

        <Field label={'Range (' + percent + ')'}>
          <Range value={percent} onValue={value => setPercent(value)} step={1} />
        </Field>
      </Docs.Showcase>

      <Docs.Props
        title='Progress'
        type='component'
        fields={[
          { name: '..', usage: 'All div element props' },
          { name: 'percent', type: 'number', usage: 'Completion percentage', defaultValue: '0' }
        ]}
      />
    </Docs>
  )
}
