const express = require('express')
const path = require('path');
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('<h3>Hello World!</h3>')
})

app.get('/home', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public/html/home.html'));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})