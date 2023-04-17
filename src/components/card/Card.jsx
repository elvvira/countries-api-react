import { useEffect, useState } from 'react';
import { StyledCard, StyledImage, StyledTextCard } from './styled';
import { v4 } from 'uuid';
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import Modal from '../../pages/modal/Modal';

const Card = () => {
	const { data } = useFetch();

	if (data.length === 0) return <h1>Loading...</h1>;

	return data.map(country => {
		return (
			<StyledCard key={v4()}>
				<Link to='/modal' onClick={() => <Modal pais={country.name.common} />}>
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
				</Link>
			</StyledCard>
		);
	});
};

export default Card;
