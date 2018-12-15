const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./api/items')

const app = express()

app.use(bodyParser.json())

const port = 5000

mongoose
  .connect("mongodb://kepamuk:qqq777erqqq@ds143734.mlab.com:43734/mern", { useNewUrlParser: true })
  .then(() => console.log('Connected db...'))
  .catch(err => console.log(err));

app.use('/api/items', items)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))