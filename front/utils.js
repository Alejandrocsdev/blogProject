const BASE_URL = 'http://localhost:4000/v1'

class Cookie {
  constructor() {
    this.name = 'data'
    this.obj = {}
  }

  set(key, value) {
    this.obj[key] = value
    document.cookie = `${this.name}=${JSON.stringify(this.obj)}; secure=true; samesite=none`
  }

  get(key) {
    const data = document.cookie
    const value = JSON.parse(data.split('=')[1])
    return value[key]
  }
}

const cookie = new Cookie()

class Storage {
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key) {
    const value = JSON.parse(localStorage.getItem(key))
    return value
  }
}

const storage = new Storage()
