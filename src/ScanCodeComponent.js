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
		<div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between'}}>
			<BarcodeScanner onDetected={handleDetectedCode} />
			{state.upc_code && <pre style={{width: 300}}>{JSON.stringify(state, null, 4)}</pre>}
		</div>
	)
}

export default ScanCodeComponent
