// ScanCodeComponent.js

import React, { useState, useRef } from 'react'
import BarcodeScanner from './BarcodeScanner' // You can use the Quagga or ZXing example from previous responses
import { useGlobalState } from './Context'



const ScanCodeComponent = () => {
	const [state, dispatch] = useGlobalState()
	
	const handleDetectedCode =  async (data) => {
		console.log('Detected Code:', data)
		// await setCode({upc_code: data})
		
		await dispatch({...state, upc_code: data})
	}

	return (
		<div style={{display: 'flex', alignItems: 'center'}}>
			<BarcodeScanner onDetected={handleDetectedCode} />
			{state.upc_code && <div>{JSON.stringify(state, null, 4)}</div>}
		</div>
	)
}

export default ScanCodeComponent
