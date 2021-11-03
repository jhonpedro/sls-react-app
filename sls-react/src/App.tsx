import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<h1>Hello Ladies and Gentleman!</h1>
				<img src={logo} className='App-logo' alt='logo' />
				<p>This is an React application deployed using Serverless Framework.</p>
			</header>
		</div>
	)
}

export default App
