var express = require('express');
var router = express.Router();
const queries = require('../public/javascripts/queries')

/* GET home page. */
router.get('/', function(req, res, next) {
  await queries.client.end((err) => console.log(err))
  await queries.client.connect((err) => console.log(err))
  res.send('connected to client');
});

router.get('/all', function(req, res) {
   const result = queries.getAllRequests()
   res.send(result)
})

module.exports = router;
