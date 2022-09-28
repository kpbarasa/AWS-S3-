const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Error handlers
const errorHandlers = require("./handlers/errorHandler")
app.use(errorHandlers.notFound);
app.use(errorHandlers.mongooseErrors);


if (process.env.NODE_ENV === "DEVELOPMENT") {

  app.use(morgan('dev'))

  app.use(errorHandlers.developmentErrors);

} else {

  app.use(errorHandlers.productionErrors);

}


// Routes 
const routes = require('./routes/main.routes');
app.use('/api/aws',(routes))

module.exports = app;