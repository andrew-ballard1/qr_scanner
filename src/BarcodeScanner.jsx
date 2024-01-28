import React, { useRef, useEffect } from 'react';
import { BrowserMultiFormatReader, BarcodeFormat } from '@zxing/library';

const BarcodeScanner = ({ onDetected }) => {
  const videoRef = useRef(null);
  const codeReader = new BrowserMultiFormatReader();
  

  useEffect(() => {
    const videoElement = videoRef.current;

    codeReader.decodeFromVideoDevice(undefined, videoElement, (result, err) => {
      if (result) {
        onDetected(result.getText());
      }

    //   if (err) {
    //     console.error(err);
    //   }
    });

    return () => {
      codeReader.stopContinuousDecode();
    };
  }, [onDetected]);

  return (
  	<video style={{margin: 0}} ref={videoRef} />
  );
};

export default BarcodeScanner;
