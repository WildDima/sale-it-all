let router = require('../apiRouter')
let db = require('../../db')

router.post('/products', function *(next) {
  this.response.status = 201
  this.response.body = { name: this.request.body.name }
  yield next
})
