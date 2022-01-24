const fs = require('fs')

const data = []
for (let i = 0; i < 1000; i++) {
  let mockObj = {
    name: 'ww' + i,
    age: '25' + 'num' + i,
    sex: '男',
  }
  data.push(mockObj)
}
// prettier-ignore
let p = fs.readFileSync(new URL('file:///D:\/self_codes\/electron-webpack5-vue\/data.json'))

console.log('json.data path:', p.toString())

let buf1 = Buffer.alloc(10)
console.log('buf1:', buf1)

let buf2 = Buffer.from([257, 2, 3])
console.log('buf2:', buf2)

fs.open('data.json', (err, fd) => {
  if (err) {
    console.log('err:', err)
  }
  console.log('fd:', fd)
})

fs.writeFile('./data.json', JSON.stringify(data), (e) => {
  if (e) {
    console.log('error:', e)
  }
})
