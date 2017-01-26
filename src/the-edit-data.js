const rp = require('request-promise')

const theEditData = {
  get: (sort, limit, total, bundle, offset) => {
    const DOMAIN = 'https://www.net-a-porter.com'
    const API_TEMPLATE = `${DOMAIN}/intl/magazineArchive.nap?sort=${sort}&limit=${limit}&total=${total}getBundle=${bundle}&offset=${offset}`
    return new Promise((resolve, reject) => {
      rp(API_TEMPLATE)
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(Error(err))
      })
    })
  }
}

module.exports = theEditData
