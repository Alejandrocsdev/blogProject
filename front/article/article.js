const ARTICLE_URL = `${BASE_URL}/article`

const avatar = document.querySelector('#avatar img')
const picture = document.querySelector('#picture img')
const username = document.getElementById('username')
const title = document.getElementById('title')
const content = document.getElementById('content')

;(function init() {
    // set theme base on local storage
    setTheme()

  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  axios
    .get(`${ARTICLE_URL}/${id}`)
    .then((response) => {
      const data = response.data
      console.log(data)
      avatar.src = data.avatar
      picture.src = data.picture
      username.textContent = data.username
      title.textContent = data.title
      content.textContent = data.content

    })
    .catch((error) => {
      console.error(`Fail to fetch data from ${ARTICLE_URL}`)
    })
})()
