let router = require('../apiRouter')

router.post('/companies', function *(next) {
  this.response.status = 201
  this.response.body = { name: this.request.body.name }
  yield next
})
