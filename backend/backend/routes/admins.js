const generateAccessToken = require('../public/javascripts/jwt')
const queries = require('../public/javascripts/queries')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) =>{
  await queries.client.connect((err) => console.log(err))
  res.send('respond with a resource');
});

router.post('/login', (req, res) => {
  
    const token = generateAccessToken.generateAccessToken({ username: req.body.username });
    res.json(token);

  });
module.exports = router;

router.get('/count',async (req, res) => {
    const result = await queries.getAdminCount()
    console.log(result)
    res.send(result)

})