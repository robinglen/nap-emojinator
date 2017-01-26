const rp = require('request-promise')
const DOMAIN = 'https://www.net-a-porter.com'

const theEditData = {
  get: (sort, limit, total, bundle, offset) => {
    const API_TEMPLATE = `${DOMAIN}/intl/magazineArchive.nap?sort=${sort}&limit=${limit}&total=${total}getBundle=${bundle}&offset=${offset}`
    console.log(API_TEMPLATE)
    return new Promise((resolve, reject) => {
      rp(API_TEMPLATE)
                .then((data) => {
                  resolve(JSON.parse(data))
                })
                .catch((err) => {
                  reject(Error(err))
                })
    })
  },

  getLocal: () => {
    return new Promise((resolve, reject) => {
      resolve(require('./stubs/edit-api.json'))
    })
  },

  normaliseIssues: (issues) => {
    var normalisedIssues = []
    issues.forEach((issue) => {
      normalisedIssues.push({
        number: issue.number,
        cover: {
          small: `${DOMAIN}${issue.cover}`,
          large: theEditData._getLargeCoverUrl(issue.date.iso)
        },
        shop: issue.shop,
        label: issue.label,
        date: issue.date.iso
      })
    })

    return normalisedIssues
  },

  _getLargeCoverUrl: (date) => {
    const formatedDate = new Date(date)
    const year = formatedDate.getFullYear()
    const month = ('0' + (formatedDate.getMonth() + 1)).slice(-2)
    const day = ('0' + formatedDate.getDate()).slice(-2)
    const largeImage = `https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/${year}/${month}/${day}/cover/en/retina_EditCover.jpg`
    return largeImage
  }
}

module.exports = theEditData
