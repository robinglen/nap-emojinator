const theEditData = require('./src/the-edit-data')
const facialRecognition = require('./src/facial-recognition')
const emojinator = require('./src/emojinator')

emojinator.vision()

// theEditData.getLocal('desc', 1, 86, false, 0)
//   .then((data)=> {
//     const normalisedIssues = theEditData.normaliseIssues(data.slice)
//     normalisedIssues.forEach((issue) => {
//       facialRecognition.requestImage(issue.cover.large, (results) => {
//         console.log(results);
//       })
//     })
//   })
//   .catch((err)=> {
//     console.log(err);
//   })
