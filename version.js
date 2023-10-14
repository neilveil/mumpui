const fs = require('fs')
const packageJSON = require('./package.json')

fs.writeFileSync('src/version.ts', `export default '${packageJSON.version}'`)
