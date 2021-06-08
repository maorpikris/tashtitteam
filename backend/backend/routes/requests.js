var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/all', function(req, res) {
  //return all request rows only with name, phone_num, department, state
})

module.exports = router;
