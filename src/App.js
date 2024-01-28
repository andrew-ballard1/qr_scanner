// App.js

import React from 'react'
import {Route, Link } from 'react-router-dom'
import ScanCodeComponent from './ScanCodeComponent'
import TakePhotoComponent from './TakePhotoComponent'



const Home = () => {
	return (<nav>
		<ul>
			<li>
				<Link to="/scan-code">Scan Code</Link>
			</li>
			<li>
				<Link to="/take-photo">Take Photo</Link>
			</li>
		</ul>
	</nav>)
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
