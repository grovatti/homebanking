const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()


 
/*
app.get('/clients', (req, res) => {
  res.send('Hello World En clientes!')
})*/

app.use('/api/v1', require('./src/routers/routers'));

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true,useUnifiedTopology:true} )
.then(console.log('Cnx a MongoDB OK'))
.catch(err => console.log(err))

  
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})