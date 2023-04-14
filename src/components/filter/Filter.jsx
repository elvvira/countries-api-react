import { useState } from 'react';
import { ContainerFilter, StyledSelect } from './styled';
import useFetch from '../../hooks/useFetch';
import { URLS } from '../../constants/urls';

const Filter = () => {
	const { setUrlToFetch, data } = useFetch();
	// const [filterName, setFilterName] = useState();

	if (!data) return <h1>cargando...</h1>;
	return (
		<ContainerFilter>
			<StyledSelect onClick={e => setUrlToFetch(e.target.value)} name='' id=''>
				<option value=''>Filter by Region</option>
				<option value={URLS.AFRICA}>Africa</option>
				<option value={URLS.AMERICA}>America</option>
				<option value={URLS.ASIA}>Asia</option>
				<option value={URLS.EUROPA}>Europe</option>
				<option value={URLS.OCEANIA}>Oceania</option>
			</StyledSelect>
		</ContainerFilter>
	);
};
// const filterRegion = (value, setUrlToFetch) => {
// 	console.log(value);
// 	setUrlToFetch(value);
// };
export default Filter;
