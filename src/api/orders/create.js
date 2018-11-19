let router = require('../apiRouter')

router.post('/orders', function *(next) {
  this.response.status = 201
  this.response.body = {
    "email": this.request.body.email,
    "product_ids" : [
      this.request.body.ids
    ],
    "info": this.request.body.info,
    "status": "pending"
  }
  yield next
})
