const theEditData = require('./src/the-edit-data')
const facialRecognition = require('./src/facial-recognition')

facialRecognition.requestImage('https://www.net-a-porter.com/alfresco/nap/webAssets/webPage/homepage-rebuild/desktop/editorial/2017/01/19/cover/en/retina_EditCover.jpg')

// theEditData.getLocal('desc', 1, 86, false, 0)
//   .then((data)=> {
//     const normalisedIssues = theEditData.normaliseIssues(data.slice)
//
//   })
//   .catch((err)=> {
//     console.log(err);
//   })
