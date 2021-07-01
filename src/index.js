const express = require('express')
const app = express()
const customerRouter = require('../src/routes/x.router')
const bp = require('body-parser')
app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())


app.get('/', (req, res) => {
  res.send('Estou aqui!!!')
})

app.use('/', customerRouter)

const port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})