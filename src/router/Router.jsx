import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home></Home>} />
		</Routes>
	);
};
export default Router;
