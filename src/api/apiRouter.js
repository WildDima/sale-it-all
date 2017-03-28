const router = require('koa-router')()
const koaBody = require('koa-body')()

router.prefix('/api')
router.use(koaBody)

module.exports = router
