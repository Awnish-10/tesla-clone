import React from 'react';
import WeadingCatogerieItem from './WeadingCatogerieItem';
import styled from 'styled-components';

function WeddingCatogeries() {
	return (
		<div>
			<Wrapper>
				<h1>Wedding Catogeries</h1>
				<Container>
					<WeadingCatogerieItem
						heading='Venue'
						content='Banquet Halls, Lawns / Farmhouses, Resorts,'
						image='https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						bgColor='D7E9F7'
					/>
					<WeadingCatogerieItem
						heading='Photographers '
						content='Photographers, Cinema/Video, Pre Wed'
						image='https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						bgColor='FDB9FC'
					/>
					<WeadingCatogerieItem
						heading='Makeup '
						content='Bridal Makeup, Family Makeup'
						image='https://images.pexels.com/photos/725462/pexels-photo-725462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						bgColor='F5C6A5'
					/>
					<WeadingCatogerieItem
						heading='Bridal Wear'
						content='Bridal Lehengas, Kanjeevaram / Silk Saree'
						image='https://images.pexels.com/photos/4826191/pexels-photo-4826191.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						bgColor='B1E693'
					/>
					<WeadingCatogerieItem
						heading='Groom Wear'
						content='Sherwani, Wedding Suits / Tuxes, Sher'
						image='https://images.pexels.com/photos/4947752/pexels-photo-4947752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
						bgColor='EADEB8'
					/>
					<WeadingCatogerieItem
						heading='Mehndi '
						content='Mehendi Artist'
						image='https://images.pexels.com/photos/6387627/pexels-photo-6387627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
						bgColor='C996CC'
					/>
				</Container>
			</Wrapper>
		</div>
	);
}

export default WeddingCatogeries;

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		color: #5d534a;
		font-size: 20px;
		margin-top: 100px;
		margin-bottom: 20px;
	}
`;

const Container = styled.div`
	width: 90%;
	margin: 30px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
`;
