import CheckboxField from '@src/Components/form/controlled/CheckboxField';
import InputField from '@src/Components/form/controlled/InputField';
import { useForm, FormProvider } from 'react-hook-form';
import { HandleStepsType } from '..';
import Button from '@components/Button';

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

  const methods = useForm<AlternativeAddressFormValues>();
  const { handleSubmit } = methods;

  const onSubmit = (data: AlternativeAddressFormValues) => {
    console.log(data);
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

          <button type="submit">Submit</button>
        </form>
      </FormProvider>
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
