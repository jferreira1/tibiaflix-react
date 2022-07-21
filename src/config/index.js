const BACKEND_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://kurt-tibiaflix.herokuapp.com';

// Old url = https://tibiaflix-react.herokuapp.com

export default { BACKEND_URL };
