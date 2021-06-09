var express = require('express');
var router = express.Router();
const queries = require('../public/javascripts/queries')

/* GET home page. */
router.get('/',async function(req, res, next) {
  await queries.client.connect((err) => console.log(err))
  res.send('connected to client');
});

router.get('/all', async function(req, res) {
   const result = await queries.getAllRequests()
   console.log(result)
   res.send(result)
})

router.post('/updatestate', async(req, res) => {
  const newState = req.body.newState
  const requestId = req.body.requestId

  const result = await queries.updateRequestState(newState, requestId)
  if(result == 1){
    res.send("state updated")

  }
  else {
    res.send("error")
  }
})

router.post('/add', async(req, res) => {
  const result = await queries.addRequest(req.body)
  res.send(result)
})
module.exports = router;
