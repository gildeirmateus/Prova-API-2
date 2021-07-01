const express = require('express')
const customerRouter = require('./routes/x.router')
const app = express()

app.get('/', (req, res) => {
  res.send('Estou aqui!!!')
})

app.use(express.json())
app.use('/customers', customerRouter)

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})