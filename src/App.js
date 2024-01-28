// App.js

import React from 'react'
import {Route, Link } from 'react-router-dom'
import ScanCodeComponent from './ScanCodeComponent'
import TakePhotoComponent from './TakePhotoComponent'



const Home = () => {
	return (
		<div style={{display: 'flex', width: 400, justifyContent: 'space-around'}}>
			<Link style={{height: 50, width: 150, backgroundColor: '#3CF', borderRadius: 5, color: 'white', display: 'flex', textDecoration: 'none', fontWeight: 300, justifyContent: 'center', alignItems: 'center'}} to="/scan-code">Scan Code</Link>
			<Link style={{height: 50, width: 150, backgroundColor: '#3CF', borderRadius: 5, color: 'white', display: 'flex', textDecoration: 'none', fontWeight: 300, justifyContent: 'center', alignItems: 'center'}} to="/take-photo">Take Photo</Link>
		</div>
	)
}

const App = () => {
	return (
		<>
			<Route path="/" component={Home}/>
			<Route path="/scan-code" component={ScanCodeComponent} />
			<Route path="/take-photo" component={TakePhotoComponent} />
		</>
	)
}

export default App
