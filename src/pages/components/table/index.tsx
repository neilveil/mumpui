import { Docs } from 'components'
import { Table } from 'lib'

export default function Main() {
  return (
    <Docs type='Component' name='Table'>
      <Docs.Showcase
        info={<span></span>}
        code={`
`}
      >
        <Table
          cols={[
            { name: '#', align: 'center', width: '1rem', render: (value, x, [row]) => row + 1 },
            { key: 'id', name: 'ID', align: 'center', width: '1rem' },
            { name: 'Name', align: 'left', width: '100%', render: (value, x: any) => x.firstName + ' ' + x.lastName },
            { key: 'salary', name: 'Salary', align: 'right' }
          ]}
          data={[
            { id: 24, firstName: 'Saige', lastName: 'Fuentes', salary: 1000 },
            { id: 25, firstName: 'Bowen', lastName: 'Higgins', salary: 2000 },
            { id: 31, firstName: 'Leighton', lastName: 'Kramer', salary: 3000 },
            { id: 46, firstName: 'Kylan', lastName: 'Gentry', salary: 4000 },
            { id: 57, firstName: 'Amelie', lastName: 'Griffith', salary: 2000 }
          ]}
        />
      </Docs.Showcase>

      <Docs.Props
        title='Table'
        fields={[
          { name: '..', usage: 'All table element props' },
          { name: 'cols', type: 'array', usage: 'Table columns setup data' },
          { name: 'data', type: 'array', usage: 'Table data' }
        ]}
      />

      <Docs.Props
        title='Col'
        type='object'
        fields={[
          { name: 'name', type: 'string', usage: 'Column name' },
          { name: 'key', type: 'string', usage: "Table data object's key to be rendered" },
          { name: 'width', customType: 'number|string', usage: 'Colument width' },
          { name: 'align', type: 'string', usage: 'left | center | right' },
          { name: 'render', type: 'function', usage: 'Customer renderer' }
        ]}
      />

      <Docs.Props
        title='Col render'
        fields={[
          { name: 'value', usage: 'Key value' },
          { name: 'data', type: 'object', usage: "Table data object's key to be rendered" },
          { name: 'index', customType: 'array', usage: '[$row, $col]' }
        ]}
      />
    </Docs>
  )
}
