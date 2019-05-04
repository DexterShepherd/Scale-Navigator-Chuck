const fs = require('fs')
const { promisify } = require('util')
const templateResolvers = require("./templateResolvers")

const readFile = promisify(fs.readFile)

async function loadFile(path) {
  const buffer = await readFile(path)
  return buffer.toString();
}

async function render(file, output) {
  let contents = await loadFile(file)

  contents = contents.split('\n').map((line) => {
    if ( line.includes('//js') ) {
      return templateResolvers[line.split('-')[1]]()
    }
    return line
  }).join('\n')

  fs.writeFile(output, contents, (err) => {
    if ( err ) {
      return console.log(err)
    }
    return console.log("success")
  })
}


render("./scale-template.ck", "./ScaleData.ck")
