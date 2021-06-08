const express = require('express');
const router = express.Router();
import {getUsers} from './queries'
//get

router.get('/secret', (req, res) => {
    res.json({ info: 'server is up!' })
})

//post

router.post('/login', (req, res) => {
    
})


module.exports = router;