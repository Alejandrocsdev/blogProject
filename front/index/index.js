const INDEX_URL = `${BASE_URL}/index`

const container = document.getElementById('container')

const articles = []

;(function init() {
  axios
    .get(INDEX_URL)
    .then((response) => {
      const data = response.data
      articles.push(...data.articles)
      console.log(articles)
      renderArticles(articles)
    })
    .catch((error) => {
      console.error(`Fail to fetch data from ${INDEX_URL}`)
    })
})()

function renderArticles(articles) {
  articles.forEach((e) => {
    const id = e.id
    const avatar = e.avatar
    const username = e.username
    const title = e.title.length <= 20 ? e.title : e.title.substring(0, 20) + '...'
    const picture = e.picture
    const preview = e.content.length <= 80 ? e.content : e.content.substring(0, 80) + '...'
    const article = createArticle({ id, avatar, username, title, picture, preview })
    container.appendChild(article)
  })
}

function createArticle(content) {
  // article container
  const articleDiv = document.createElement('div')
  articleDiv.id = 'article'

  // main container
  const mainDiv = document.createElement('div')
  mainDiv.id = 'main'
  articleDiv.appendChild(mainDiv)

  const infoDiv = document.createElement('div')
  infoDiv.id = 'info'
  mainDiv.appendChild(infoDiv)

  const avatarDiv = document.createElement('div')
  avatarDiv.id = 'avatar'
  infoDiv.appendChild(avatarDiv)

  const avatarImg = document.createElement('img')
  avatarImg.src = content.avatar
  avatarDiv.appendChild(avatarImg)

  const usernameDiv = document.createElement('div')
  usernameDiv.id = 'username'
  usernameDiv.textContent = content.username
  infoDiv.appendChild(usernameDiv)

  const titleDiv = document.createElement('div')
  titleDiv.id = 'title'
  titleDiv.textContent = content.title
  titleDiv.dataset.id = content.id
  mainDiv.appendChild(titleDiv)

  const previewDiv = document.createElement('div')
  previewDiv.id = 'preview'
  previewDiv.textContent = content.preview
  mainDiv.appendChild(previewDiv)

  // picture container
  const pictureDiv = document.createElement('div')
  pictureDiv.id = 'picture'
  articleDiv.appendChild(pictureDiv)

  const pictureImg = document.createElement('img')
  pictureImg.src = content.picture
  pictureImg.dataset.id = content.id
  pictureDiv.appendChild(pictureImg)

  // redirect event listeners
  titleDiv.addEventListener('click', onClickDetailBtn)
  pictureImg.addEventListener('click', onClickDetailBtn)

  return articleDiv
}

function onClickDetailBtn(e) {
  const id = e.target.dataset.id
  window.location.href = `../article/article.html?id=${id}`
}
