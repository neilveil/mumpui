import { Docs } from 'components'
import { Button, Fields } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Button'>
      <Docs.Showcase
        info={<span></span>}
        code={`
<Fields>
  <Button>Default</Button>
  <Button type='primary'>Primary</Button>
  <Button type='danger'>Danger</Button>
  <Button type='dashed'>Dashed</Button>
  <Button type='stroke'>Stroke</Button>
  <Button type='text'>Text</Button>
</Fields>
`}
      >
        <Fields>
          <Button>Default</Button>
          <Button type='primary'>Primary</Button>
          <Button type='danger'>Danger</Button>
          <Button type='dashed'>Dashed</Button>
          <Button type='stroke'>Stroke</Button>
          <Button type='text'>Text</Button>
        </Fields>
      </Docs.Showcase>

      <Docs.Props
        title='Button'
        fields={[
          { name: '..', usage: 'All button element props' },
          { name: 'children', type: 'string', usage: 'Button label' }
        ]}
      />
    </Docs>
  )
}
