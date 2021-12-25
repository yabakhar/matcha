const express = require('express')
const app = express()
const port = 1337
const cors = require('cors')
const bodyParser = require('body-parser')

const allRoutes = require("./routers/")

const dotenv = require('dotenv');
dotenv.config();
app.use(cors({
    origin: "*"
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
allRoutes(app)
app.listen(port, () => {
  console.log(`yabakhar app listening at http://localhost:${port}`)
});
