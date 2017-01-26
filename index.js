const theEditData = require('./src/the-edit-data')
const facialRecognition = require('./src/facial-recognition')
const emojinator = require('./src/emojinator')

theEditData.get('desc', 40, 86, false, 0)
  .then((data)=> {
    const normalisedIssues = theEditData.normaliseIssues(data.slice)
    normalisedIssues.forEach((issue) => {
      facialRecognition.requestImage(issue.cover.large, (results) => {
        issue.emoji = emojinator.init(results[0])
        console.log(issue);
      })
    })
  })
  .catch((err)=> {
    console.log(err);
  })
