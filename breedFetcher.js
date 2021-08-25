const request = require('request');
const params = process.argv.slice(2);
console.log('Breed: ', params);

request('https://api.thecatapi.com/v1/breeds/search/?name=' + params[0], (error, response, body) => {
  //console.log('error:', error); 
  //console.log('statusCode:', response && response.statusCode); 
  
  
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed not found');
    return;
  }
  const breed = data[0];
  console.log(breed.description);
  
  
});
