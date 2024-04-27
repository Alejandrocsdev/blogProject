const BASE_URL = 'http://localhost:4000'

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