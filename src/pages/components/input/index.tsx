import { Docs } from 'components'
import s from './styles.module.scss'
import { Input } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Input'>
      <Docs.Showcase
        info={<>This is a input component.</>}
        code={`
<Input placeholder='Type something..' />
<Input placeholder='Type something..' />
`}
      >
        <Input placeholder='Type something..' />
        <Input placeholder='Type something..' />
      </Docs.Showcase>

      <Docs.Showcase
        info={<>This is a input component.</>}
        code={`
<Input placeholder='Type something..' />
<Input placeholder='Type something..' />
`}
      >
        <Input placeholder='Type something..' />
        <Input placeholder='Type something..' />
      </Docs.Showcase>

      <Docs.Props
        fields={[
          { name: 'placeholder', type: 'string', usage: 'Input field placeholder' },
          { name: 'placeholder', type: 'string', usage: 'Input field placeholder' },
          { name: 'placeholder', type: 'string', usage: 'Input field placeholder' }
        ]}
      />

      <Docs.Props
        fields={[
          { name: 'placeholder', type: 'string', usage: 'Input field placeholder' },
          { name: 'placeholder', type: 'string', usage: 'Input field placeholder' },
          { name: 'placeholder', type: 'string', usage: 'Input field placeholder' }
        ]}
      />
    </Docs>
  )
}

const snippet1 = ``
