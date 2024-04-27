const ARTICLE_URL = `${BASE_URL}/article`

;(function init() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  axios
    .get(`${ARTICLE_URL}/${id}`)
    .then((response) => {
      const data = response.data
      console.log(data)
    })
    .catch((error) => {
      console.error(`Fail to fetch data from ${ARTICLE_URL}`)
    })
})()
