import {
	ArrowDropDownRounded,
	ClassRounded,
	PhoneAndroidRounded,
} from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

function SecondaryMenubar() {
	return (
		<div>
			<Wrapper>
				<Container>
					<Left>
						<h2>India's Favourite Wedding Planning Platform</h2>
					</Left>
					<Middle>
						<Input>
							<h1>All Cities</h1>
							<ArrowDropDownRounded />
						</Input>
					</Middle>
					<Right>
						<Rivew>
							<ClassRounded />
							<h2>Write a Rivew</h2>
						</Rivew>
						<App>
							<PhoneAndroidRounded />
							<h2>Download App</h2>
						</App>
					</Right>
				</Container>
			</Wrapper>
		</div>
	);
}

export default SecondaryMenubar;

const Wrapper = styled.div`
	width: 100%;
	height: 40px;
	background-color: #5d534a;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 10px;
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
	flex: 1.1;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const Middle = styled.div`
	flex: 2;
	justify-content: flex-start;
`;

const Input = styled(Container)`
	padding: 5px;
	width: 150px;
	background-color: white;
	border-radius: 5px;
	height: 30px;
	color: black;
	font-size: 8px;
	justify-content: space-between;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const Rivew = styled.div`
	display: flex;
`;

const App = styled.div`
	display: flex;
`;
