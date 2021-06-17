// 合并src中package.json 和外面的package.json
const fs = require('fs')
const targetpkgJson = require('./package.json')
let sourcepkgJSON
try {
	sourcepkgJSON = require('./src/package.json')
} catch (error) {
	sourcepkgJSON = { dependencies: {}, devDependencies: {} }
}

Object.assign(targetpkgJson.dependencies, sourcepkgJSON.dependencies)
Object.assign(targetpkgJson.devDependencies, sourcepkgJSON.devDependencies)

fs.writeFileSync('./package.json', JSON.stringify(targetpkgJson, null ,2), 'utf-8')