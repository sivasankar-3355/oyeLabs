const express = require('express')
const app = express()
const connectDb = require('./db/connect')
require('dotenv').config()
const router = require('./routes/customers')
const errorHandler = require('./errors/errorHandler')
app.use(express.json());

app.use('/oyelabs', router)
app.use(errorHandler)

const start = async () => {
    try {
      await connectDb(process.env.MONGO_URI);
      app.listen(5000, () =>
        console.log(`Server is listening on port 5000...`)
        
      );
    } catch (error) {
      console.log(error);
    }
  };

  start()


// app.listen(5000)


