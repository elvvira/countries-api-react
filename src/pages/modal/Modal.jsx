import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { ModalImage, Properties, StyledBorder, StyledModal } from './styled';

const Modal = () => {
	const { data } = useFetch();
	const params = useParams();
	const countrySelect = data.find(country => {
		return country.name.common === params.name;
	});
	const navigate = useNavigate();
	console.log(countrySelect);
	if (data.length === 0) return <h1>Loading...</h1>;

	return (
		<StyledModal>
			<button onClick={() => navigate(`/`)}>Back</button>

			<ModalImage src={countrySelect.flags.png} alt='' />
			<h1>{params.name}</h1>
			<Properties>
				<p>
					Native Name: <span>{countrySelect.name.common}</span>
				</p>
				<p>
					Population: <span>{countrySelect.population}</span>
				</p>
				<p>
					Region: <span>{countrySelect.region}</span>
				</p>
				<p>
					Sub Region: <span>{countrySelect.subregion}</span>
				</p>
				<p>
					Capital: <span>{countrySelect.capital}</span>
				</p>
			</Properties>
			<Properties>
				<p>
					Top Level Domain: <span>{countrySelect.tld}</span>
				</p>
				<p>
					Currencies: <span></span>
				</p>
				<p>
					Languages: <span></span>
				</p>
			</Properties>

			<h2>Border Countries:</h2>
			<StyledBorder>
				<button>pais</button>
				<button>pais</button>
				<button>pais</button>
			</StyledBorder>
		</StyledModal>
	);
};
export default Modal;
