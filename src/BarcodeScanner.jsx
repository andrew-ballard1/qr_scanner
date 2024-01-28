import React, { useRef, useEffect } from 'react';
import { BrowserMultiFormatReader, BarcodeFormat } from '@zxing/library';

const BarcodeScanner = ({ onDetected }) => {
  	const codeReader = new BrowserMultiFormatReader();
	const videoRef = useRef(null)
  

  useEffect(() => {
	const videoElement = videoRef.current;
    codeReader.decodeFromVideoDevice(undefined, videoElement, (result, err) => {
      if (result) {
        onDetected(result.getText());
      }

    });

    return () => {
      codeReader.stopContinuousDecode();
    };
  }, [onDetected]);


  return (
  	<video style={{margin: 0}} ref={videoRef}/>
  );
};

export default BarcodeScanner;
