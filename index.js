const theEditData = require('./src/the-edit-data')
const facialRecognition = require('./src/facial-recognition')
const emojinator = require('./src/emojinator')
const trendinator = require('./src/trendinator')

theEditData.get('desc', 2, 86, false, 0)
  .then((data)=> {
    const normalisedIssues = theEditData.normaliseIssues(data.slice)
    normalisedIssues.forEach((issue, index) => {
      facialRecognition.requestImage(issue.cover.large, (results) => {
        issue.emoji = emojinator.init(results[0])
        trendinator.send(issue)
      })
    })
  })
  .catch((err)=> {
    console.log(err);
  })
