import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { ModalImage, Properties, StyledBorder, StyledModal } from './styled';

const Modal = ({ pais }) => {
	const { data } = useFetch();

	return (
		<StyledModal>
			<Link to='/'>
				<button>
					<img src='' alt='' />
					Back
				</button>
			</Link>
			<ModalImage src='' alt='' />
			<h1>{pais}</h1>
			<Properties>
				<p>
					Native Name: <span></span>
				</p>
				<p>
					Population: <span></span>
				</p>
				<p>
					Region: <span></span>
				</p>
				<p>
					Sub Region: <span></span>
				</p>
				<p>
					Capital: <span></span>
				</p>
			</Properties>
			<Properties>
				<p>
					Top Level Domain: <span></span>
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
