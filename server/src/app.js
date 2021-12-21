const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/users', (req, res) => {
  res.sendStatus(200);
  console.log( req.body());
})
app.listen(port, () => {
  console.log(`yabakhar app listening at http://localhost:${port}`)
})
