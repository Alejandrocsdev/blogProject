const Model = require('../model')
const articleModel = new Model('articles')

class ArticleService {
  constructor() {
    this.articles = []
    this.findAll()
      .then((data) => this.articles.push(...data.articles))
      .catch((err) => console.log(err))
  }

  findAll() {
    return articleModel.read()
  }

  findById(id) {
    id = parseInt(id)
    const article = this.articles.find((article) => article.id === id)
    return article ? article : null
  }
}

const articleService = new ArticleService()

module.exports = articleService
