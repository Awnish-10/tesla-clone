import { ArrowDropDownRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

function WeadingCatogerieItem(props) {
	return (
		<div>
			<Container bgColor={props.bgColor}>
				<Content>
					<h1>
						{props.heading}
						<span>
							<ArrowDropDownRounded />
						</span>
					</h1>
					<p>{props.content}</p>
				</Content>
				<Image image={props.image} />
			</Container>
		</div>
	);
}

export default WeadingCatogerieItem;

const Container = styled.div`
	width: 600px;
	height: 150px;
	margin: 30px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => `#${props.bgColor}`};
`;

const Content = styled.div`
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding-left: 10px;
	h1 {
		font-size: 20px;
		margin: 0;
	}
	p {
		font-size: 10px;
	}
`;

const Image = styled.div`
	flex: 2;
	height: 100%;
	width: 100%;
	background-image: ${(props) => `url('${props.image}')`};
	border-top-left-radius: 100%;
	border-bottom-left-radius: 100%;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;
