let router = require('../apiRouter')
let db = require('../../db')
let crypto = require('crypto')

router.post('/products', function *(next) {
  let x = Math.random()
  let id = crypto.createHash('md5').update(x.toString()).digest('hex')
  db.products[id] = Object.assign(
    this.request.body.product,
    {
      image: {
        "thumb": "http://lorempixel.com/100/100/nature/",
        "full": "http://lorempixel.com/512/307/nature/"
      }
    })
  this.response.status = 201
  this.response.body = { name: this.request.body.name }
  yield next
})
