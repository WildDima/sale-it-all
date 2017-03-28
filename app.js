const Koa = require('koa')
const mount = require('koa-mount')
const static = require('koa-static')
const send = require('koa-send')
const Path = require('path')
const combineRouters = require('koa-combine-routers')

const logger = require('./src/middlewares/logger')
const apiRouter = require('./src/api/apiRouter')
const router = require('./src/middlewares/router')
const notFound = require('./src/middlewares/notFound')

require('./src/api/products/index')
require('./src/api/products/show')
require('./src/api/products/create')
require('./src/api/products/destroy')
require('./src/api/products/update')

require('./src/api/companies/index')
require('./src/api/companies/show')
require('./src/api/companies/create')
require('./src/api/companies/destroy')
require('./src/api/companies/update')

require('./src/api/orders/index')
require('./src/api/orders/show')
require('./src/api/orders/create')
require('./src/api/orders/destroy')
require('./src/api/orders/update')

const app = new Koa()

app.use(logger)

app.use(router.routes())
app.use(apiRouter.routes())

app.use(mount('/public', static(Path.resolve("public"))))

// app.use(router.get('/*',function* (next) {
//   yield send(this, Path.resolve("public", "index.html"))
// }).routes())
// console.log(apiRouter.stack.map(i => i.path));
// app.use(notFound)

app.listen(3000);

module.exports = app
