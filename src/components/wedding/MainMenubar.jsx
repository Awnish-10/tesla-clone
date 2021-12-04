import { SearchRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

function MainMenubar() {
	return (
		<div>
			<Wrapper>
				<Container>
					<Left>
						<h1>WeedMeGood</h1>
					</Left>
					<Middle>
						<h1>Venues</h1>
						<h1>Venders</h1>
						<h1>Photos</h1>
						<h1>Real Weddings</h1>
						<h1>Blogs</h1>
						<h1>Shops</h1>
						<h1>E-Invites</h1>
					</Middle>
					<Right>
						<Search>
							<SearchRounded />
						</Search>
						<Login>
							<h1>Login</h1>
						</Login>
					</Right>
				</Container>
			</Wrapper>
		</div>
	);
}

export default MainMenubar;

const Wrapper = styled.div`
	width: 100%;
	height: 60px;
	background-color: #ff00e4;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 16px;
`;

const Container = styled.div`
	width: 90%;
	margin: auto 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	h1 {
		cursor: pointer;
	}
`;

const Left = styled.div`
	flex: 1;
`;

const Middle = styled.div`
	flex: 4;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	font-size: 8px;
	h1 {
		margin-left: 15px;
	}
`;
const Right = styled.div`
	flex: 2;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

const Search = styled.div`
	background-color: #5d534a;
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-left: 15px;
	cursor: pointer;
`;

const Login = styled.div`
	width: 100px;
	margin-left: 15px;
	border-radius: 20px;
	background-color: #5d534a;
	text-align: center;
`;
