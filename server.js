const dotenv = require('dotenv');
require("dotenv").config();
const connectDb = require('./config/db')

// Load config
dotenv.config({ path: './config/config.env' })

// Database connection 
// connectDb();


const app =require('./app');

// Port 
const PORT = process.env.ENV_PORT || 5000

const server = app.listen(PORT, () => {
    console.log("server running in "+process.env.NODE_ENV+" mode, listening on port "+PORT);
})