const theEditData = require('./src/the-edit-data')
const facialRecognition = require('./src/facial-recognition')
const emojinator = require('./src/emojinator')

theEditData.getLocal('desc', 1, 86, false, 0)
  .then((data)=> {
    const normalisedIssues = theEditData.normaliseIssues(data.slice)
    normalisedIssues.forEach((issue) => {
      facialRecognition.requestImage(issue.cover.large, (results) => {
        const emoji = emojinator.init(results[0])
        console.log(emoji);
      })
    })
  })
  .catch((err)=> {
    console.log(err);
  })
