import { useEffect, useState } from 'react';
import { ContainerSearch, StyledInput } from './styled';

const Search = () => {
	// const [urlToFetch, setUrlToFetch] = useState('');
	// const [data, setData] = useState([]);
	// const [search, setSearch] = useState('');
	// const [change, setChange] = useState(false);

	// useEffect(() => {
	// 	fetchData(
	// 		`https://restcountries.com/v3.1/name/${search}?fullText=true`,
	// 		setData
	// 	);
	// }, [change]);

	return (
		<ContainerSearch>
			<img src='images/icon-search.svg' alt='lupa' />
			<StyledInput
				// onChange={e => {
				// 	setSearch(e.target.value, data), setChange(!change);
				// }}
				type='text'
				placeholder='Search for a country…'
			/>
		</ContainerSearch>
	);
};

// const SearchCountry = (search, data) => {
// 	const normalizeSearch = search.toLowerCase();
// 	// if (search) {
// 	// 	return data.filter(country =>
// 	// 		country.name.common.toLowerCase().includes(normalizeSearch)
// 	// 	);
// 	// }
// 	console.log(normalizeSearch);
// 	return setSearch(normalizeSearch);
// };

// const fetchData = async (url, setData) => {
// 	const request = await fetch(url);
// 	const data = await request.json();
// 	setData(data);
// };
export default Search;
