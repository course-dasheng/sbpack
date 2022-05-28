import fs from 'fs'
import path from 'path'

let templates = {}
const ignores = ['.DS_Store']
let templateDir = path.resolve(__dirname,'../src/templates')
fs.readdirSync(templateDir).forEach(dir=>{
  // var filePath = p.join(path, file)
  let ret = fs.statSync(path.resolve(templateDir,dir))
  if(ret.isDirectory()){
    console.log(dir)
    templates[dir] = readdir(path.resolve(templateDir,dir))
  }
  console.log(templates)
})
function readdir(dirname){
  fs.readdirSync(dirname).filter(d=>!ignores.includes(d)).forEach(dir=>{
    console.log(123,dir)
    // var filePath = p.join(path, file)
    // let ret = fs.statSync(path.resolve(templateDir,dir))
    // if(ret.isDirectory()){
    //   console.log(dir)
    //   templates[dir] = readdir(path.resolve(templateDir,dir))
    // }
    // console.log(templates)
  })
  return {dirname}
}


// files.forEach(dir=>{
//   console.log(dir)
// })
// function readDir(path){

// }