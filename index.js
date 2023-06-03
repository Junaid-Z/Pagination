let express = require('express')
let dotenv = require('dotenv')
let mongoose = require('./connection')
let testModel = require('./testModel')
dotenv.config()
let server = express()
server.use(express.json())
server.post('/', async (req, res) => {
    let { query = {}, page = 0, pageSize = 20 } = req.body;
    res.json(await testModel.find(query).skip(page * pageSize).limit(pageSize))
})
mongoose.then(() => {
    server.listen(process.env.PORT, () => {
        console.log('Server listening on ' + process.env.PORT)
    })
}).catch((err) => {
    console.log('Connection failed')
    console.log(err)
})