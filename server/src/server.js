const express = require('express')
const app = express()
const port = 1337
const cors = require('cors')
const bodyParser = require('body-parser')

const allRoutes = require("./routers")

const dotenv = require('dotenv');
dotenv.config();
app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
allRoutes(app)

app.listen(port, () => {
  console.log(`yabakhar app listening at http://192.168.99.104:${port}`)
});
