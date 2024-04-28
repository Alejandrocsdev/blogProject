const home = document.getElementById('home')
const darkMode = document.getElementById('dark-mode')
const theme = document.querySelectorAll('.theme')

home.addEventListener('click', () => {
  const path = window.location.href
  const fileName = path.split('/').slice(-1)[0]
  if (fileName === 'index.html') {
    window.location.href = window.location.href
  } else {
    window.location.href = '../index/index.html'
  }
})

darkMode.addEventListener('click', (e) => {
  // light
  e.target.classList.toggle('fa-sun');
  // dark
  e.target.classList.toggle('fa-moon');
  // toggle theme
  theme.forEach((e) => {
    e.classList.toggle('dark')
  })
})

