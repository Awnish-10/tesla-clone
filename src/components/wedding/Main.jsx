import React from 'react';
import MainMenubar from './MainMenubar';
import MainWindow from './MainWindow';
import SecondaryMenubar from './SecondaryMenubar';
import WeddingCatogeries from './WeddingCatogeries';

function Main() {
	return (
		<div>
			<SecondaryMenubar />
			<MainMenubar />
			<MainWindow />
			<WeddingCatogeries />
		</div>
	);
}

export default Main;
