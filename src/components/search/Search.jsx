import { ContainerSearch, StyledInput } from './styled';

const Search = () => {
	return (
		<ContainerSearch>
			<img src='images/icon-search.svg' alt='lupa' />
			<StyledInput type='text' placeholder='Search for a country…' />
		</ContainerSearch>
	);
};
export default Search;
