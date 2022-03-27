const express = require('express')
const app = express()
const port = 3000
const consign = require('consign')
const database = require("./config/database")
app.use(express.json());
app.database = database;
consign().then('./api').then('./routes/routes.js').into(app)
app.get('/', (req, res) => res.send('Hello World! (Ola mundo!)'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))