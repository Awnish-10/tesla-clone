import React from 'react';
import Section from './Section';

function Home() {
	return (
		<div>
			<Section
				model='model-s'
				desc='order online for touchless delivery'
				leftBtn='Custom Order'
				rightBtn='Existing Inventory'
				image='model-s.jpg'
			/>
			<Section
				model='model-x'
				desc='order online for touchless delivery'
				leftBtn='Custom Order'
				rightBtn='Existing Inventory'
				image='model-x.jpg'
			/>
			<Section
				model='model-3'
				desc='order online for touchless delivery'
				leftBtn='Custom Order'
				rightBtn='Existing Inventory'
				image='model-3.jpg'
			/>
			<Section
				model='model-y'
				desc='order online for touchless delivery'
				leftBtn='Custom Order'
				rightBtn='Existing Inventory'
				image='model-y.jpg'
			/>
			<Section
				model='Solar Panels'
				desc='Lowest Cost Solar Panels in America'
				leftBtn='Order Now'
				rightBtn='learn more'
				image='solar-panel.jpg'
			/>
			<Section
				model='Accessories'
				leftBtn='Order Now'
				image='accessories.jpg'
			/>
		</div>
	);
}

export default Home;
