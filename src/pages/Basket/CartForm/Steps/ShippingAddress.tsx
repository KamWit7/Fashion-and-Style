import { HandleStepsType } from '..';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import Button from '@components/Button';
import InputFiled from '@src/Components/form/controlled/InputField';

type FormValues = {
  email: string;
  subscribe: boolean;
  firstName: string;
  lastName: string;
  company: string;
  address: string;
  apartment: string;
  city: string;
  countryRegion: string;
  postalCode: string;
  phone: string;
};

const ShippingAddress = ({ handleSteps }: HandleStepsType) => {
  const [handleNextStep, handlePreviousStep] = handleSteps;
  const methods = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    handleNextStep();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputFiled name="email" label="Email" type="email" />

        {/* TODO: Add Checkbox component */}
        {/* <Checkbox label="Email me with News and Offers" /> */}

        <InputFiled name="firstName" label="First Name" />
        <InputFiled name="lastName" label="Last Name" />
        <InputFiled name="company" label="Company (Optional)" />
        <InputFiled name="address" label="Address" />
        <InputFiled name="apartment" label="Apartment, suite, etc. (Optional)" />
        <InputFiled name="city" label="City" />
        <InputFiled name="postalCode" label="Postal Code" />
        <InputFiled name="phone" label="Phone (Optional)" type="tel" />

        <div className="flex justify-between">
          <Button onClick={handleNextStep} className="mt-8">
            Next
          </Button>

          <Button onClick={handlePreviousStep} className="mt-8">
            Previous
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default ShippingAddress;
