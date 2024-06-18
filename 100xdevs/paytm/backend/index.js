const express = require("express");
const cors = require("cors");

const app= express();

app.use(cors())
app.use(express.json())  

const mainRoute = require('./routes/index.js')

app.use('/api/v1',mainRoute)

const PORT = 3000;

app.listen(PORT)