const theEditData = require('./src/emojinator/the-edit-data')
const facialRecognition = require('./src/emojinator/facial-recognition')
const emojinator = require('./src/emojinator/emojinator')
const trendinator = require('./src/emojinator/trendinator')

console.log('Getting Edit issues');
theEditData.get('desc', 86, 86, false, 0)
  .then((data) => {
    const normalisedIssues = theEditData.normaliseIssues(data.slice)
    normalisedIssues.forEach((issue, index) => {
      facialRecognition.requestImage(issue.cover.large, (results) => {
        issue.emoji = emojinator.init(results[0])
        console.log(issue.emoji);
        trendinator.send(issue)
      })
    })
  })
  .catch((err) => {
    console.log(err)
  })
