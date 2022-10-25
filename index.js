const express = require('express')
const app = express()

const cors = require('cors');
require("dotenv").config();
const mongoose = require('mongoose')
const port = process.env.PORT||5000

//middlewares

app.use(express.json())
app.use(cors())






// database connection

// mongoose.connect(`mongodb+srv://${process.env.DB_EMON_AHMED}:${process.env.DB_PASS}@cluster0.1uacied.mongodb.net/?retryWrites=true&w=majority`)
// .then(() => {
//   console.log(`database coonction is successfull`)
// })

mongoose.connect( 'mongodb://localhost:27017/job-portal').then(() => {
    console.log(`Database connection is successful 🛢`);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})