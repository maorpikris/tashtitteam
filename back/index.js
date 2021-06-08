const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router.js')
const cors = require('cors')
const app = express();


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(cors())

const port = 3000

app.use(express.json())
app.use('', router)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})