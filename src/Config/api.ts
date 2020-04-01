import axios from 'axios';

let baseURL;

if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://stg-api.hvcdeploy.com';
} else {
  baseURL = 'http://localhost:3000';
}

const instance = axios.create({
  baseURL,
});

export default instance;
