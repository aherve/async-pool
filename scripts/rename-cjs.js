import fs from 'fs'
import path from 'path'

const cjsDir = path.resolve('dist/cjs')
for (const file of fs.readdirSync(cjsDir)) {
  if (file.endsWith('.js')) {
    fs.renameSync(
      path.join(cjsDir, file),
      path.join(cjsDir, file.replace(/\.js$/, '.cjs'))
    )
  }
}
