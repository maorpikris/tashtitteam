const generateAccessToken = require('../public/javascripts/jwt')
const queries = require('../public/javascripts/queries')

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) =>{
  await queries.client.connect((err) => console.log(err))
  res.send('connected to client');
});

router.post('/login',async (req, res) => {
    console.log(`username: ${req.body.username}, password: ${req.body.password}`)
    const result =  await queries.getAdminByCount(req.body.username, req.body.password)
    let dataToSend = undefined;

    console.log(result[0].count)
    if (result[0].count == 0 ){
      console.log(dataToSend)
      res.status(304).send(dataToSend)
    } 
    else {
      const token = generateAccessToken.generateAccessToken({ username: req.body.username });
      dataToSend = token
      console.log(dataToSend)
      res.status(200).send(dataToSend)

    }

  });
module.exports = router;

router.get('/count',async (req, res) => {
    const result = await queries.getAdminCount()
    console.log(result)
    res.send(result)
})

