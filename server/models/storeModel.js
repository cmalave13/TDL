const  {Pool} = require('pg');
const env = require('dotenv').config();

const connectionString = process.env.POSTGRES_URI;

// const connectionString = process.env.CONNECTION_URL; //PG_URI

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: connectionString,
});

module.exports = pool;
