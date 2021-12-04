import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section(props) {
	return (
		<div>
			<Wrap image={props.image}>
				<Fade bottom>
					<ItemText>
						<h1>{props.model}</h1>
						<p>{props.desc}</p>
					</ItemText>
				</Fade>
				<Button>
					<Fade bottom>
						<ButtonGroup>
							<LeftBtn>{props.leftBtn}</LeftBtn>
							{props.rightBtn && <RightBtn>{props.rightBtn}</RightBtn>}
						</ButtonGroup>
					</Fade>
					<ArrowDown src='images/down-arrow.svg' />
				</Button>
			</Wrap>
		</div>
	);
}

export default Section;

const Wrap = styled.div`
	height: 100vh;
	width: 100vw;
	background-image: ${(props) => `url('images/${props.image}')`};
	background-size: cover;
	${'' /* resize background image to cover the entire container */}
	background-position: center;
	${'' /* place image at center for all viewports */}
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const ItemText = styled.div`
	padding-top: 20vh;
	text-transform: capitalize;
	text-align: center;
`;

const Button = styled.div``;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 30px;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftBtn = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	opacity: 0.85;
	text-transform: upperCase;
	font-size: 12px;
	cursor: pointer;
	margin: 8px;
`;

const RightBtn = styled(LeftBtn)`
	background-color: white;
	color: black;
	opacity: 0.65;
`;

const ArrowDown = styled.img`
	height: 40px;
	margin: 0 250px;
	animation: arrowBlink 2s infinite ease;
`;
