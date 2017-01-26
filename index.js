const theEditData = require('./src/the-edit-data')

theEditData.get('desc', 1, 86, false, 0)
  .then((data)=> {
    console.log(data);
  })
  .catch((err)=> {
    console.log(err);
  })
