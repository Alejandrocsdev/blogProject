const home = document.getElementById('home')
const darkMode = document.querySelector('#dark-mode i')
const theme = document.querySelectorAll('.theme')
const signIn = document.getElementById('sign-in')
const signUp = document.getElementById('sign-up')
const modalBg = document.createElement('div')

;(function init() {
  // home logo redirection
  home.addEventListener('click', () => {
    const path = window.location.href
    const fileName = path.split('/').slice(-1)[0]
    if (fileName === 'index.html') {
      window.location.href = window.location.href
    } else {
      window.location.href = '../index/index.html'
    }
  })

  // toggle dark mode
  darkMode.addEventListener('click', () => {
    toggleDarkMode()

    if (storage.get('theme') === 'light') {
      storage.set('theme', 'dark')
    } else if (storage.get('theme') === 'dark') {
      storage.set('theme', 'light')
    }
  })

  // sign in
  signIn.addEventListener('click', () => {
    modalBg.innerHTML = createModal('登入')
    modalBg.id = 'modal-bg'
    document.body.appendChild(modalBg)
    const modalClose = document.getElementById('modal-close')
    modalClose.addEventListener('click', () => {
      modalBg.remove()
    })
  })

  // sign up
  signUp.addEventListener('click', () => {
    modalBg.innerHTML = createModal('註冊')
    modalBg.id = 'modal-bg'
    document.body.appendChild(modalBg)
    const modalClose = document.getElementById('modal-close')
    modalClose.addEventListener('click', () => {
      modalBg.remove()
    })
  })
})()

function toggleDarkMode() {
  // toggle icon
  darkMode.classList.toggle('fa-sun')
  darkMode.classList.toggle('fa-moon')
  // toggle theme
  theme.forEach((e) => {
    e.classList.toggle('dark')
  })
}

function setTheme() {
  if (!storage.get('theme')) {
    storage.set('theme', 'light')
  } else if (storage.get('theme') === 'dark') {
    toggleDarkMode()
  }
}

function createModal(name) {
  return `<table id="modal">
    <tr>
      <td id="modal-close">
        <button>X</button>
      </td>
    </tr>
    <tbody>
      <tr>
        <td colspan="3">
          <h1 id="modal-name">${name}</h1>
        </td>
      </tr>
      ${createLabeledInput('username', '帳號')}
      ${name === '註冊' ? createLabeledInput('email', '信箱') : ''}
      ${createLabeledInput('password', '密碼')}
      ${name === '註冊' ? createLabeledInput('re-password', '確認密碼') : ''}
      <tr>
        <td colspan="3"><button id="submit">提交</button></td>
      </tr>
    </tbody>
    <tr><td></td></tr>
  </table>`
}

function createLabeledInput(id, text) {
  return `<tr>
    <td><label for="${id}">${text}</label></td>
    <td>：</td>
    <td><input id="${id}" name="${id}"></input></td>
  </tr>`
}
