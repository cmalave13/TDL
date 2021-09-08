const path = require('path')
const express = require('express')
const app = express()
const env = require('dotenv').config()
const session = require('express-session')
const PORT = process.env.PORT || 3000

//call API Router when needed (for middleware) --> // const apiRouter = require('./routes/api')
// Route Handlers
//app.use('/api', apiRouter)
app.use(express.json())

// Parses incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }))

//Default Error Handler

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign({}, defaultErr, err)
  console.log(errorObj.log)
  return res.status(errorObj.status).json(errorObj.message)
})

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')))
// serve index.html on the route '/'
app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../index.html'))
})

// Catch-all to unknown routes (404)
app.use((req, res) => res.status(404).send('not found'))
//Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})

module.exports = app
