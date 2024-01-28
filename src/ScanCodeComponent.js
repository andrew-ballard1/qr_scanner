// ScanCodeComponent.js

import React, { useState } from 'react'
import BarcodeScanner from './BarcodeScanner' // You can use the Quagga or ZXing example from previous responses
import { useGlobalState } from './Context'



const ScanCodeComponent = () => {
	const [code, setCode] = useState({})
	const [state, dispatch] = useGlobalState()
	
	const handleDetectedCode =  async (data) => {
		console.log('Detected Code:', data)
		// await setCode({upc_code: data})
		
		await dispatch({...state, upc_code: data})
	}

	return (
		<div>
			<BarcodeScanner onDetected={handleDetectedCode} />
		</div>
	)
}

export default ScanCodeComponent
