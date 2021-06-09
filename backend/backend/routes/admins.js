const generateAccessToken = require('../public/javascripts/jwt')
const queries = require('../public/javascripts/queries')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) =>{
  await queries.client.end((err) => console.log(err))
  await queries.client.connect((err) => console.log(err))
  res.send('connected to client');
});

router.get('/login',async (req, res) => {
    const result =  await queries.getAdminByCount()
    let dataToSend = undefined;

    console.log(result[0].count)
    if (result[0].count == 0 ){
      console.log(dataToSend)
      res.send(dataToSend)
    } 
    else {
      const token = generateAccessToken.generateAccessToken({ username: req.body.username });
      dataToSend = token
      console.log(dataToSend)
      res.send(dataToSend)

    }

  });
module.exports = router;

router.get('/count',async (req, res) => {
    const result = await queries.getAdminCount()
    console.log(result)
    res.send(result)
})

