import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Main from './components/wedding/Main';

function App() {
	return (
		<div className='App'>
			<Main />
			{/* <Header />
     <Home /> */}
		</div>
	);
}

export default App;
