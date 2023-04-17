import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Home from '../pages/home/Home';
import Modal from '../pages/modal/Modal';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/modal' element={<Modal />} />
			</Route>
		</Routes>
	);
};
export default Router;
