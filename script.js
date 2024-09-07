const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(__dirname));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const pages = ["hello", "meow", "world"]

pages.forEach((e) => {
  app.get(`/${e}`, function (req, res) {
    res.send("Hello World")
  })
})

app.get('/remove', function (req, res) {
  let temp = pages.pop()
  res.send("Removed page : " + temp)
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
})


app.post('/request', function (req, res) {
  let log = `<p>Username : ${req.body.username} 
             <br>Password : ${req.body.password}</p>`
  res.send(log)
  console.log(req.rawHeaders)
})

app.listen(3000)