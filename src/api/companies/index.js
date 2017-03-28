let router = require('../apiRouter')
const db = require('../../db')

router.get('/companies', function *(next) {
  this.response.status = 200
  this.response.body = db.companies
  yield next
})
