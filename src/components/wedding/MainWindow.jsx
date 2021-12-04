import { KeyboardArrowDownRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

function MainWindow() {
	return (
		<div>
			<Wrapper>
				<Container>
					<h1>Your Wedding, Your Way</h1>
					<h2>
						Find the best wedding vendors with thousands of trusted
						reviews
					</h2>
					<Search>
						<Input>
							<h1>Select vendor type</h1>
							<KeyboardArrowDownRounded />
						</Input>
						<Input>
							<h1>Select city</h1>
							<KeyboardArrowDownRounded />
						</Input>
						<Button>
							<h1>Get Started</h1>
						</Button>
					</Search>
				</Container>
			</Wrapper>
		</div>
	);
}

export default MainWindow;

const Wrapper = styled.div`
	width: 100%;
	height: 500px;
	background-image: url('https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: center;
	color: #5d534a;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 50px;
`;

const Search = styled.div`
	display: flex;
`;

const Input = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	width: 300px;
	height: 50px;
	background-color: white;
	border-color: black;
	color: black;
	font-size: 7px;
	justify-content: space-between;
`;

const Button = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
	width: 200px;
	height: 50px;
	background-color: #ff00e4;
	color: white;
	font-size: 8px;
	font-size: 7px;
`;
