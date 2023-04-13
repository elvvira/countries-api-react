import styled from 'styled-components';
const HeaderContainer = styled.div`
	height: 80px;
	background: #ffffff;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
	padding: 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
`;
const HeaderTitle = styled.h1`
	font-weight: 800;
	font-size: 14px;
`;
const ContainerMode = styled.div`
	display: flex;
	gap: 0.5rem;
`;
const TextMode = styled.p`
	font-size: 12px;
`;
export { HeaderTitle, HeaderContainer, ContainerMode, TextMode };
