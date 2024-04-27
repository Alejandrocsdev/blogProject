const fs = require('fs')

class Model {
  constructor(fileName) {
    this.filePath = `${__dirname}/../public/data/${fileName}.json`
  }

  read() {
    const path = this.filePath
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf-8', (error, data) => {
        if (error) {
          return reject(error)
        }
        try {
          const jsonData = JSON.parse(data)
          resolve(jsonData)
        } catch (error) {
          reject('Fail to parse JSON data:', error)
        }
      })
    })
  }
}

module.exports = Model
