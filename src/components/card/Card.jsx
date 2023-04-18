import { StyledCard, StyledImage, StyledTextCard } from './styled';
import { v4 } from 'uuid';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

const Card = () => {
	const { data } = useFetch();
	const navigate = useNavigate();
	if (data.length === 0) return <h1>Loading...</h1>;

	return data.map(country => {
		return (
			<StyledCard
				key={v4()}
				onClick={() => navigate(`/modal/${country.name.common}`)}
			>
				<StyledImage src={country.flags.png} alt='' />
				<StyledTextCard>
					<h2>{country.name.common}</h2>
					<p>
						Population: <span>{country.population}</span>
					</p>
					<p>
						Region: <span>{country.region}</span>
					</p>
					<p>
						Capital: <span>{country.capital}</span>
					</p>
				</StyledTextCard>
			</StyledCard>
		);
	});
};

export default Card;
