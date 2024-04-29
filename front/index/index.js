const API_URL = `${BASE_URL}/articles`

const container = document.getElementById('container')

const articles = []

;(function init() {
  // set theme base on local storage
  setTheme()

  axios
    .get(API_URL)
    .then((response) => {
      const data = response.data
      articles.push(...data.articles)
      console.log(articles)
      renderArticles(articles)
    })
    .catch((error) => {
      console.error(`Fail to fetch data from ${API_URL}`)
    })
})()

function renderArticles(articles) {
  let htmlContent = ''
  articles.forEach((e) => {
    const id = e.id
    const avatar = e.avatar
    const username = e.username
    const title = e.title.length <= 20 ? e.title : e.title.substring(0, 20) + '...'
    const picture = e.picture
    const preview = e.content.length <= 80 ? e.content : e.content.substring(0, 80) + '...'
    htmlContent += createArticle({ id, avatar, username, title, picture, preview })
  })
  container.innerHTML = htmlContent
}

function createArticle(content) {
  return `<div class="article">
    <div class="main">
      <div class="info">
        <div class="avatar">
          <img src="${content.avatar}">
        </div>
        <div class="username">${content.username}</div>
      </div>
      <a href="../article/article.html?id=${content.id}" class="title">${content.title}</a>
      <div class="preview">${content.preview}</div>
    </div>
    <a href="../article/article.html?id=${content.id}" class="picture">
      <img src="${content.picture}">
    </a>
  </div>`
}
