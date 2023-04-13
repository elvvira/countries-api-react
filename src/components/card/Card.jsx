import { useEffect, useState } from 'react';

const Card = () => {
	const [data, setData] = useState();
	useEffect(() => {
		fetchData('https://restcountries.com/v3.1/all?fields=name,flags', setData);
	}, []);
	return (
		<div>
			<div>
				<img src='' alt='' />
				<h2></h2>
			</div>
		</div>
	);
};
const fetchData = async (url, setData) => {
	const request = await fetch(url);
	const data = await request.json();
	console.log(data[0]);
	setData(data[0]);
};
export default Card;
