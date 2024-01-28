// App.js

import React , {createContext} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import ScanCodeComponent from './ScanCodeComponent'
import TakePhotoComponent from './TakePhotoComponent'
import './App.css'
const Home = () => {
	return (
		<div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', position: 'absolute', bottom: 10, left: 0 }}>
			<Link style={{ height: 50, width: 150, backgroundColor: '#3CF', borderRadius: 5, color: 'white', display: 'flex', textDecoration: 'none', fontWeight: 300, justifyContent: 'center', alignItems: 'center' }} to="/scan-code">Scanner</Link>
			<Link style={{ height: 50, width: 150, backgroundColor: '#3CF', borderRadius: 5, color: 'white', display: 'flex', textDecoration: 'none', fontWeight: 300, justifyContent: 'center', alignItems: 'center' }} to="/take-photo">Camera</Link>
		</div>
	)
}
const BodyContext = createContext(null)

const App = () => {
	
	return (
		// <div style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
		<BrowserRouter>
			<Route path="/" component={Home} />
			<Route path="/scan-code" component={ScanCodeComponent} />
			<Route path="/take-photo" component={TakePhotoComponent} />
		</BrowserRouter>
	// </div>
	)
}

export {App, BodyContext}
