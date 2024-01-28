import React, { useState } from 'react';
import BarcodeScanner from './BarcodeScanner';

const App = () => {
  const [barcode, setBarcode] = useState('');

  const handleBarcodeDetected = (result) => {
    // Extracted barcode data from the result object
	console.log(result)
    const detectedBarcode = result;

    // Log the barcode data to the console
    console.log('Detected Barcode:', detectedBarcode);

    // If you want to display it on the page, you can update the state
    setBarcode(detectedBarcode);
  };

  return (
    <div>
      <BarcodeScanner onDetected={handleBarcodeDetected} />
      {barcode && <p>Detected Barcode: {barcode}</p>}
    </div>
  );
};

export default App;
