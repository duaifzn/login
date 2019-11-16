//include module
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const checkData = require('./checkdata')
//set template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//set static file
app.use(express.static('public'))
//set post method have body 
app.use(bodyParser.urlencoded({extended: true}))

//set localhost:3000 routing
app.get('/',(req,res) =>{

    res.render('index')
    //console.log(userdata.userdata[0])
})
//post routing
app.post('/',(req,res) =>{
    let data = checkData(req.body)
    let error = true
    if(data.length === 0)
      res.render('index',{error: error})
    else
      res.render('pass',{name: data[0].firstName})
})

//start and listen server
app.listen(port,() =>{
    console.log(`Express server is running on http://localhost${port}`)
})