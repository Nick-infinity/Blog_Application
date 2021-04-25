import axios from 'axios';

export default axios.create({
	baseURL: 'http://75e0e53d933a.ngrok.io', // this wil change & only works when ngrok is up
});
