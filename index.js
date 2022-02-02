//引入epxress
const express = require('express')
const app = express()
//設定連接埠號及本機名稱(express defalt localname)
const port = 3000

//template engine
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//server set up
app.get('/', (req, res) => {
  res.render('homepage')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})



app.listen(port, () => {
  console.log(`express is listening on localhost:${port}`)
})

