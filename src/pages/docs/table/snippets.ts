import data from 'data'

export const s1 = `
<Table
  data={${JSON.stringify(data.table.data, null, 2)}}
  cols={
    [
      {
        name: '#', // Col title
        align: 'center',
        width: '1rem',
        // Custom renderer example using row/col index
        render: (value: any, x: any, [row, col]: any) => row + 1
      },
      {
        key: 'id', // Value to be rendered from data object
        name: 'ID',
        align: 'center',
        width: '1rem'
      },
      {
        name: 'Name',
        align: 'left',
        width: '100%',
        // Custom renderer example using data object
        render: (value: any, x: any) => x.firstName + ' ' + x.lastName
      },
      {
        key: 'salary',
        name: 'Salary',
        align: 'right',
        // Custom renderer example to modify value
        render: (value: any) => <span style={{ color: 'var(--mp-c-green)' }}>\${value}</span>
      }
    ]
  }
/>
`
