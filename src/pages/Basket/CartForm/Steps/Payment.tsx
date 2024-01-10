import CheckboxField from '@src/Components/form/controlled/CheckboxField';
import InputField from '@src/Components/form/controlled/InputField';
import { useForm, FormProvider } from 'react-hook-form';
import { HandleStepsType } from '..';

import Button from '@components/Button';

import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

interface AlternativeAddressFormValues {
  name: string;
  email: string;
  country: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  zip: string;
  phone: string;
  setDefault: boolean;
}

const Payment = ({ handleSteps }: HandleStepsType) => {
  const [handleNextStep, handlePreviousStep] = handleSteps;

  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState('');

  const methods = useForm<AlternativeAddressFormValues>();
  const { handleSubmit } = methods;

  const onSubmit = (data: AlternativeAddressFormValues) => {
    console.log(data);
  };

  const onPaymentSubmit = async () => {
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const { error } = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${import.meta.env.VITE_URL}/basket/payment/status`,

        shipping: {
          name: 'Jenny Rosen',
          address: {
            line1: '510 Townsend St',
            postal_code: '98140',
            city: 'San Francisco',
            state: 'CA',
            country: 'US',
          },
        },
      },
    });

    if (error) {
      // This point will only be reached if there is an immediate error when
      // confirming the payment. Show error to your customer (for example, payment
      // details incomplete)
      setErrorMessage(error.message || '');
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CheckboxField name="setDefault" label="Default (Same As Billing Address)" />

          <CheckboxField name="addAlternative" label="Add An Alternative Delivery Address" />

          <InputField name="name" label="Name" />

          <InputField name="email" label="Email" />

          <InputField name="country" label="Country" />

          <InputField name="addressLine1" label="Address Line1" />

          <InputField name="addressLine2" label="Address Line2" />

          <InputField name="city" label="City / Suburb" />

          <InputField name="zip" label="Zip / Postcode" />

          <InputField name="phone" label="Phone" />
        </form>
      </FormProvider>

      {stripe && (
        <div id="checkout">
          <form onSubmit={handleSubmit(onPaymentSubmit)}>
            <PaymentElement />
            <button disabled={!stripe}>Submit</button>
            {/* Show error message to your customers */}
            {errorMessage && <div>{errorMessage}</div>}
          </form>
        </div>
      )}
      <Button onClick={handleNextStep} className="mt-8">
        Next
      </Button>

      <Button onClick={handlePreviousStep} className="mt-8">
        Previous
      </Button>
    </div>
  );
};

export default Payment;
