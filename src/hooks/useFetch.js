import { useEffect, useState } from 'react';
import { URLS } from '../constants/urls';

const useFetch = () => {
	const [data, setData] = useState([]);
	const [urlToFetch, setUrlToFetch] = useState(URLS.ALL);

	useEffect(() => {
		fetchData(urlToFetch, setData);
	}, [urlToFetch]);

	return { setUrlToFetch, data };
};

const fetchData = async (url, setData) => {
	const request = await fetch(url);
	const data = await request.json();
	setData(data);
};

export default useFetch;
