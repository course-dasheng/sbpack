import fs from 'fs'
import path from 'path'

let templates = {}
const ignores = ['.DS_Store','package-lock.json','node_modules']
let templateDir = path.resolve(__dirname,'../src/templates')
fs.readdirSync(templateDir).forEach(dir=>{
  // var filePath = p.join(path, file)
  let ret = fs.statSync(path.resolve(templateDir,dir))
  if(ret.isDirectory()){
    console.log(dir)
    templates[dir] = readdir(path.resolve(templateDir,dir),'',{})
  }
  console.log(templates)
  fs.writeFileSync(path.resolve(__dirname,'../src/templates.json'),JSON.stringify(templates,null,2))
})
function readdir(dirname,prefix,obj){
  let target = path.resolve(dirname,prefix)
  fs.readdirSync(target).filter(d=>!ignores.includes(d)).forEach(dir=>{
    let ret = fs.statSync(path.resolve(target,dir))
    if(ret.isDirectory()){
      obj[dir] = {}
      readdir(target,dir,obj[dir])
    }else{
      obj[dir] = fs.readFileSync(path.resolve(target,dir),'utf-8')
    }
    // var filePath = p.join(path, file)
    // let ret = fs.statSync(path.resolve(templateDir,dir))
    // if(ret.isDirectory()){
    //   console.log(dir)
    //   templates[dir] = readdir(path.resolve(templateDir,dir))
    // }
    // console.log(templates)
  })
  return obj
}


// files.forEach(dir=>{
//   console.log(dir)
// })
// function readDir(path){

// }