import keys from 'config/icons'

const main = { ...keys }

Object.keys(keys).forEach(x => (main[x] = <span className='icon'>{main[x]}</span>))

export default main
