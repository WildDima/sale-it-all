let router = require('../apiRouter')
const db = require('../../db')

router.get('/companies/:id', function *(next) {
  this.response.status = 302
  this.response.body = db.companies[this.params.id] || { error: 404 }
  yield next
})
