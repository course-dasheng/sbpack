import fs from 'fs'
import path from 'path'

const templates = {}
const ignores = ['.DS_Store', 'package-lock.json', 'node_modules']
const templateDir = path.resolve(__dirname, '../src/templates')
fs.readdirSync(templateDir).forEach((dir) => {
  // var filePath = p.join(path, file)
  const ret = fs.statSync(path.resolve(templateDir, dir))
  if (ret.isDirectory())
    templates[dir] = readdir(path.resolve(templateDir, dir), '', {})

  fs.writeFileSync(path.resolve(__dirname, '../src/templates-config.ts'), `export const templatesConfig = ${JSON.stringify(templates, null, 2)}`)
})
function readdir(dirname, prefix, obj) {
  const target = dirname + prefix
  fs.readdirSync(target).filter(d => !ignores.includes(d)).forEach((dir) => {
    const ret = fs.statSync(path.resolve(target, dir))
    if (ret.isDirectory()) {
      readdir(dirname, `${prefix}/${dir}`, obj)
    }
    else {
      const fullpath = [prefix.slice(1), dir].filter(v => v).join('/')
      console.log(fullpath)
      obj[fullpath] = fs.readFileSync(path.resolve(target, dir), 'utf-8')
    }
  })
  return obj
}
