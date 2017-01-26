const theEditData = require('./src/the-edit-data')
const facialRecognition = require('./src/facial-recognition')
facialRecognition.init()

facialRecognition.requestImage('image')

// theEditData.getLocal('desc', 1, 86, false, 0)
//   .then((data)=> {
//     const normalisedIssues = theEditData.normaliseIssues(data.slice)
//
//   })
//   .catch((err)=> {
//     console.log(err);
//   })
