const express = require('express');
const colors = require('colors');
const cors = require('cors');
const https = require("https");
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const connectDB = require('./config/db');
const fs = require('fs');
const port = 0000;

const app = express();

// Connect to database
connectDB();

https
  .createServer(
    {
      key: fs.readFileSync(
        "...",
        "utf8"
      ),
      cert: fs.readFileSync(
        "...",
        "utf8"
      ),
    },
    app
  )
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  app.use(cors());

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: process.env.NODE_ENV === 'development',
    })
  );

// app.listen(port, console.log(`Server running on port ${port}`));
