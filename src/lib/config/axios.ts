import axios from 'axios';

const BASE_URL = "http://50.6.206.23/~trlembongan/cms/api/v1";

const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: {
		'cache-control': 'public, max-age=3600',
		'Access-Control-Allow-Origin': '*',
		'Accept-Encoding': 'gzip, compress, br'
	}
});

export default apiClient;
