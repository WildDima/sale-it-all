const router = require('koa-router')()
const koaBody = require('koa-body')()
const fs = require('fs')
const Path = require('path')

router.use(koaBody)

router.get('/*', function* (next) {
  const path = Path.resolve('public', 'index.html')
  // let body = yield fs.readFile(path, (err, data) => {
  //   if (err) throw(err)
  //   return data
  // })
  let body = fs.readFileSync(path, 'utf8')
  this.response.body = body
  yield next
})

module.exports = router
