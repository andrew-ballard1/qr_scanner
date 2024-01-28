// TakePhotoComponent.js

import React, { useEffect, useRef, useState } from 'react'
import { useGlobalState } from './Context'

const TakePhotoComponent = () => {
	const videoRef = useRef(null)
	const canvasRef = useRef(null)
	const [capturedImage, setCapturedImage] = useState(null)


	useEffect(() => {
		startCamera()
	}, [])

	const [state, dispatch] = useGlobalState()

	const sendPost = async () => {
		
	}

	const startCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({ video: true })

			if (videoRef.current) {
				videoRef.current.srcObject = stream
			}
		} catch (error) {
			console.error('Error accessing camera:', error)
		}
	}

	const captureImage = async () => {
		console.log('test')
		if (videoRef.current && canvasRef.current) {
			const video = videoRef.current
			const canvas = canvasRef.current
			const context = canvas.getContext('2d')

			// Set canvas dimensions to match the video feed
			canvas.width = video.videoWidth
			canvas.height = video.videoHeight

			// Draw the current video frame onto the canvas
			context.drawImage(video, 0, 0, canvas.width, canvas.height)

			// Get the image data from the canvas as a data URL
			const imageDataURL = canvas.toDataURL('image/png')

			await dispatch({...state, image: imageDataURL})

			// Set the captured image state
			await setCapturedImage(imageDataURL)
			await stopCamera()
		}
	}

	const stopCamera = () => {
		if (videoRef.current) {
			const stream = videoRef.current.srcObject
			const tracks = stream.getTracks()

			tracks.forEach((track) => track.stop())

			videoRef.current.srcObject = null
		}
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'column'}}>
			<>
				{!capturedImage && <video ref={videoRef} autoPlay playsInline />}
				{capturedImage && <img src={capturedImage} alt="Captured" />}
			</>
			<button className={"cameraButton"} onClick={captureImage}></button>
			<canvas ref={canvasRef} style={{ display: 'none' }} />
		</div>
	)
}

export default TakePhotoComponent
