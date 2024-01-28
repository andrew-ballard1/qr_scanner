// ScanCodeComponent.js

import React from 'react';
import BarcodeScanner from './BarcodeScanner'; // You can use the Quagga or ZXing example from previous responses

const ScanCodeComponent = () => {
  const handleDetectedCode = (code) => {
    console.log('Detected Code:', code);
    // You can handle the detected code as needed
  };

  return (
    <div>
      <h2>Scan Code Component</h2>
      <BarcodeScanner onDetected={handleDetectedCode} />
    </div>
  );
};

export default ScanCodeComponent;
