const radioURL = require('./radiourl');
radioURL('903')
  .then((url) => {
    console.log(url);
  });
