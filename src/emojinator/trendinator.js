const Keen = require('keen-js')
const PROJECT = process.env.PROJECT_ID
const KEY = process.env.WRITE_KEY

var client = new Keen({
  projectId: PROJECT,
  writeKey: KEY
})

const trendinator = {
  send: (result) => {
    client.addEvent('EMOJI', result, function (err, res) {
      if (err) {
        console.log('Error sending data to keen')
      }
    })
  }
}

module.exports = trendinator
