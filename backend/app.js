const express = require('express')
var request = require('request')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/getToronto', (req, res) => {
  request('http://api.weatherstack.com/current?access_key=9a4a3ed2c55274319222aaa76dc41e9f&query=Toronto', function (error,response,body){
      if(!error && response.statusCode == 200){
          var parsedBody = JSON.parse(body)
          var temp= parsedBody['current']['temperature']
          res.send({ temp })
      }
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})