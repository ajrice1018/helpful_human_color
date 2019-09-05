require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;

const db = require('./models');


// Init Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));


//Define Routes
require("./routes/color-api.js")(app)



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
