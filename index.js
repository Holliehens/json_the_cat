const request = require('request');
const params = process.argv.slice(2);
const breedName = params[0];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log('Description:', description);
  }
  
});