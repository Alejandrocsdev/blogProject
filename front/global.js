const home = document.getElementById('home')
const darkMode = document.querySelector('#dark-mode i')
const theme = document.querySelectorAll('.theme')
const signIn = document.getElementById('sign-in')
const signUp = document.getElementById('sign-up')

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
    document.body.appendChild(createModal('登入'))
  })

  // sign up
  signUp.addEventListener('click', () => {
    document.body.appendChild(createModal('註冊'))
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
  const modalBg = document.createElement('div')
  modalBg.id = 'modal-bg'

  const modal = document.createElement('table')
  modal.id = 'modal'
  modalBg.appendChild(modal)

  const tbody = document.createElement('tbody')
  modal.appendChild(tbody)

  // modal name
  const modalNameTr = document.createElement('tr')
  tbody.appendChild(modalNameTr)

  const modalNameTd = document.createElement('td')
  modalNameTd.colSpan = 3
  modalNameTr.appendChild(modalNameTd)

  const modalName = document.createElement('h1')
  modalName.id = 'modal-name'
  modalName.textContent = name
  modalNameTd.appendChild(modalName)

  const username = createLabeledInput('username', '帳號')
  name === '註冊' ? tbody.appendChild(username) : null
  const email = createLabeledInput('email', '信箱')
  tbody.appendChild(email)
  const password = createLabeledInput('password', '密碼')
  tbody.appendChild(password)
  const rePassword = createLabeledInput('re-password', '確認密碼')
  name === '註冊' ? tbody.appendChild(rePassword) : null

  // submit button
  const submitTr = document.createElement('tr')
  tbody.appendChild(submitTr)

  const submitTd = document.createElement('td')
  submitTd.colSpan = 3
  submitTr.appendChild(submitTd)

  const submit = document.createElement('button')
  submit.id = 'submit'
  submit.textContent = '提交'
  submitTd.appendChild(submit)

  return modalBg
}

function createLabeledInput(id, text) {
  const tr = document.createElement('tr')

  // label
  const td1 = document.createElement('td')
  tr.appendChild(td1)

  const label = document.createElement('label')
  label.setAttribute('for', id)
  label.textContent = text
  td1.appendChild(label)

  // colon
  const td2 = document.createElement('td')
  td2.textContent = '：'
  tr.appendChild(td2)

  // input
  const td3 = document.createElement('td')
  tr.appendChild(td3)

  const input = document.createElement('input')
  input.id = id
  input.name = id
  td3.appendChild(input)

  return tr
}
