const theEditData = require('./src/the-edit-data')

theEditData.getLocal('desc', 1, 86, false, 0)
  .then((data)=> {
    const normalisedIssues = theEditData.normaliseIssues(data.slice)
    console.log(normalisedIssues);
  })
  .catch((err)=> {
    console.log(err);
  })
