const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()
const port = 4000

app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})
