const request = require('request');
const params = process.argv.slice(2);
const url = 'https://api.thecatapi.com/v1/breeds/search/?name=';

const fetchBreedDescription = function(breedName, callback) {
  request(url + breedName, (error, response, body) => { 
    if (error) {
      callback(error, null);
      return;
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback(null, 'Breed not found');
        return;
      }
      const breed = data[0];
      callback(null, breed.description);
      return;
    }
  
  });

};

module.exports = { fetchBreedDescription };
