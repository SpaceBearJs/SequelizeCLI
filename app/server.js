const express = require('express')
const app = express()
const { sequelize } = require('./models/index')

const port = process.env.PORT || 3000

app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use(require('./routes'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

  sequelize.sync({force:false})
  .then(rs =>{
    console.log('Conectado')
  }).catch(e=>{
    console.log(e)
  })
})