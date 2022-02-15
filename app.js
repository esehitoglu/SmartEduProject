const express = require('express')
const app = express()

// Template Engine
app.set('view engine', "ejs")

//Middlewares
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.status(200).send('index sayfası')
})

const port = 3000
app.listen(port,()=>{
    console.log(`run ${port}`)
})