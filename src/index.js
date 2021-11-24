const express = require('express')
const dotenv = require('dotenv')
const debug = require('debug')('index')

const db_connect = require('./db/db_connect')

dotenv.config()
db_connect()

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000
app.listen(port, () => {
  debug(`Listening on port ${port}`)
})
