'use strict'

require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.use(express.static('public'))

app.get('/', async (req, res) => {
	res.sendFile('index.html')
})

app.listen(port, console.log(`listening on *:${ port }`))
