import { useState } from 'react';
import ShippingAddress from './Steps/ShippingAddress';
import ShippingInfo from './Steps/DeliveryOptions';
import Items from './Steps/Products';
import Payment from './Steps/Payment';

type StepsTypes = 'items' | 'shippingAddress' | 'deliveryOptions' | 'payment' | 'success' | 'error';
export type HandleStepsType = { handleSteps: [handleNextStep: () => void, handlePreviousStep: () => void] };

const BasketForm = () => {
  const [step, setStep] = useState<StepsTypes>('items');

  const handleNextStep = () => {
    setStep((step) => {
      if (step === 'items') {
        return 'shippingAddress';
      }

      if (step === 'shippingAddress') {
        return 'deliveryOptions';
      }

      if (step === 'deliveryOptions') {
        return 'payment';
      }

      if (step === 'payment') {
        return 'success';
      }

      return 'error';
    });
  };

  const handlePreviousStep = () => {
    setStep((step) => {
      if (step === 'success') {
        return 'payment';
      }

      if (step === 'payment') {
        return 'deliveryOptions';
      }

      if (step === 'deliveryOptions') {
        return 'shippingAddress';
      }

      if (step === 'shippingAddress') {
        return 'items';
      }

      return 'error';
    });
  };

  return (
    <div>
      {step === 'items' && <Items handleSteps={[handleNextStep, handlePreviousStep]} />}
      {step === 'shippingAddress' && <ShippingAddress handleSteps={[handleNextStep, handlePreviousStep]} />}
      {step === 'deliveryOptions' && <ShippingInfo handleSteps={[handleNextStep, handlePreviousStep]} />}

      {step === 'payment' && <Payment handleSteps={[handleNextStep, handlePreviousStep]} />}
    </div>
  );
};

export default BasketForm;
