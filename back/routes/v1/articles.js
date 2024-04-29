const { Router } = require('express')
const router = Router()
const articleService = require('../../services')

router.get('/', async (req, res) => {
  const articles = await articleService.findAll()
  res.send(articles)
})

router.get('/:id', async (req, res) => {
  const id = req.params.id
  const article = await articleService.findById(id)
  res.send(article)
})

module.exports = router
