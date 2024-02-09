import { Docs } from 'components'
import { Field, Fields, Input } from 'lib'
import { useState } from 'react'
import * as snippets from './snippets'

export default function Main() {
  const [input, setInput] = useState('')
  const [inputType, setInputType] = useState('password')

  return (
    <Docs name='input'>
      <Docs.Showcase code={snippets.s1}>
        <div>
          <Input
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Type something..'
            parentStyle={{ maxWidth: '15rem', margin: 'auto' }}
          />
        </div>
      </Docs.Showcase>

      <Docs.Showcase code={snippets.s2}>
        <div>
          <Input
            value={input}
            onValue={value => setInput(value)}
            maxLength={50}
            placeholder='Type something..'
            parentStyle={{ maxWidth: '15rem', margin: 'auto' }}
          />
        </div>
      </Docs.Showcase>

      <Docs.Showcase title={<span>Different input type fields</span>} code={snippets.s3}>
        <Fields>
          <Field label='Text'>
            <Input type='text' placeholder='Enter mobile..' />
          </Field>

          <Field label='Mobile'>
            <Input type='tel' placeholder='Enter mobile..' />
          </Field>
        </Fields>

        <Fields>
          <Field label='Email'>
            <Input type='email' placeholder='Enter email..' />
          </Field>

          <Field label='URL'>
            <Input type='url' placeholder='Enter url..' />
          </Field>
        </Fields>

        <Fields>
          <Field label='Number'>
            <Input type='number' placeholder='Enter number..' />
          </Field>

          <Field label='Password'>
            <Input type='password' placeholder='Enter password..' />
          </Field>
        </Fields>
      </Docs.Showcase>

      <Docs.Info>
        Setting the input field &ldquo;type&rdquo; auto-selects the suitable keyboard in mobile devices, improving user
        experience.
      </Docs.Info>

      <Docs.Showcase title='Prefix & suffix' code={snippets.s4}>
        <Fields>
          <Input placeholder='Enter number..' prefix={'91'} />

          <Input
            type={inputType}
            placeholder='Enter password..'
            suffix={<span className='icon'>{inputType === 'password' ? 'visibility' : 'visibility_off'}</span>}
            onSuffixClick={() => setInputType(inputType === 'password' ? 'text' : 'password')}
          />
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Input'
        type='component'
        fields={[
          { name: '..', usage: 'All input element props' },
          { name: 'prefix', type: 'string', usage: '' },
          { name: 'onPrefixClick', type: 'function', usage: '' },
          { name: 'suffix', type: 'string' },
          { name: 'onSuffixClick', type: 'function', usage: '' },
          {
            name: 'onValue',
            type: 'function',
            usage: (
              <span>
                Better alternative of <code>onChange</code> listener <code>{`(value) => void`}</code>. No need to do{' '}
                <code>e.target.value</code>
              </span>
            )
          },
          { name: 'maxLength', type: 'number', usage: 'Maximum characters allowed' },
          { name: 'parentClassName', type: 'string', usage: 'To add class on wrapper div' },
          { name: 'parentStyle', type: 'object', usage: 'To add styling on wrapper div' }
        ]}
      />
    </Docs>
  )
}
