//var API_URL = 'https://appapi.100run.com/';
var API_URL = 'http://0.0.0.0:8000/';
if (__DEV__)
  API_URL = 'http://0.0.0.0:8000/';

const api = require('promise-ajax')(API_URL);
export default api;

