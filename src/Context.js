import React, { useContext, createContext, useReducer, useEffect } from 'react'

console.log("CONTEXT FILE LOADED")

const globalState = {
	upc_code: '',
	description: '',
	height: '',
	weight: '',
	location: ''
}

const GlobalStateContext = createContext(globalState)
const DispatchStateContext = createContext(undefined)

const useGlobalState = () => [
	useContext(GlobalStateContext),
	useContext(DispatchStateContext)
]

const GlobalStateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, newValue) => ({ ...state, ...newValue }), globalState)
	useEffect(() => {
		console.log('state updated')
		console.log(state)
	}, [state])

	return (
		<GlobalStateContext.Provider value={state}>
			<DispatchStateContext.Provider value={dispatch}>
				{children}
			</DispatchStateContext.Provider>
		</GlobalStateContext.Provider>
	)
}

export {
	GlobalStateProvider,
	useGlobalState,
}