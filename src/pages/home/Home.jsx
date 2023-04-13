import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Header from '../../components/header/Header';
import Search from '../../components/search/Search';

const Home = () => {
	return (
		<div>
			<Header></Header>
			<Search />
			<Filter />
			<Card />
		</div>
	);
};
export default Home;
