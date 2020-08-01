const BACKEND_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://tibiaflix-react.herokuapp.com';

export default { BACKEND_URL };
