const express = require('express')
const cors = require('cors')
const articleService = require('./services')

const app = express()
const port = 4000

app.use(cors())

app.get('/index', async (req, res) => {
  const articles = await articleService.findAll()
  res.send(articles)
})

app.get('/article/:id', async (req, res) => {
  const id = req.params.id
  const article = await articleService.findById(id)
  res.send(article)
})

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`)
})