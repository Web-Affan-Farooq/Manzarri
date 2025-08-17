// app/pay/page.tsx or components/PayButton.tsx
'use client';

import React from 'react';

const PayButton = () => {
  const handlePayment = async () => {
    if (!window.PaymentRequest) {
      alert('Payment Request API is not supported in this browser.');
      return;
    }

    const supportedInstruments = [
      {
        supportedMethods: 'basic-card',
        data: {
          supportedNetworks: ['visa', 'mastercard']
        }
      }
    ];

    const details = {
      total: {
        label: 'Total',
        amount: { currency: 'USD', value: '10.00' }
      }
    };

    try {
      const request = new PaymentRequest(supportedInstruments, details);
      const response = await request.show();

      // Ideally, send response to server to process payment here
      await response.complete('success');
      alert('Payment successful!');
    } catch (err) {
      console.error('Payment failed:', err);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Pay Now
    </button>
  );
};

export default PayButton;