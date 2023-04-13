import {
	ContainerMode,
	HeaderContainer,
	HeaderTitle,
	TextMode
} from './styled';

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>Where in the world?</HeaderTitle>
			<ContainerMode>
				<img src='images/icon-moon.svg' alt='luna' />
				<TextMode>Dark Mode</TextMode>
			</ContainerMode>
		</HeaderContainer>
	);
};
export default Header;
