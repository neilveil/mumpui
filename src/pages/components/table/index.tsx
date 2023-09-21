import { Docs } from 'components'
import { Table } from 'lib'
import * as snippets from './snippets'
import data from 'data'

export default function Main() {
  return (
    <Docs name='Table'>
      <Docs.Showcase code={snippets.s1}>
        <Table cols={data.table.cols} data={data.table.data} />
      </Docs.Showcase>

      <Docs.Props
        title='Table'
        type='component'
        fields={[
          { name: '..', usage: 'All table element props' },
          { name: 'cols', type: 'array', usage: 'Columns config' },
          { name: 'data', type: 'array', usage: 'Table data' }
        ]}
      />

      <Docs.Props
        title='Col'
        type='object'
        fields={[
          { name: 'name', type: 'string', usage: 'Column name' },
          { name: 'key', type: 'string', usage: "Table data object's key to be rendered" },
          { name: 'width', type: 'number', usage: 'Colument width' },
          {
            name: 'align',
            type: 'string',
            usage: (
              <span>
                <code>left</code> | <code>center</code> | <code>right</code>
              </span>
            )
          },
          { name: 'render', type: 'function', usage: 'Customer renderer' }
        ]}
      />

      <Docs.Props
        title='Col.render'
        type='function'
        fields={[
          { name: 'value', usage: "Row data object's key value" },
          { name: 'data', type: 'object', usage: 'Row data object' },
          { name: 'index', customType: 'array', usage: <code>[$row, $col]</code> }
        ]}
      />
    </Docs>
  )
}
