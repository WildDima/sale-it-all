const router = require('koa-router')()
const koaBody = require('koa-body')
const fs = require('fs')
const Path = require('path')

router.use(koaBody({strict: false}))

router.get('/*', function* (next) {
  const path = Path.resolve('public', 'index.html')
  const body = fs.readFileSync(path, 'utf8')
  this.response.body = body
  yield next
})

module.exports = router
