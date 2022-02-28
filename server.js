const express = require("express");
const http = require("http");
const app = express();
const cors = require('cors');
app.use(cors());
app.options('*', cors());
const server = http.createServer(app);
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()


const router = require('./routes')
app.use(jsonParser)
router(app)


server.listen(3000, () => {
    console.log("listening to port 3000")
});
module.exports = server



