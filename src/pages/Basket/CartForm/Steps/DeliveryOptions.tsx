import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import Button from '@components/Button';
import InputField from '@src/Components/form/controlled/InputField';
import CheckboxField from '@src/Components/form/controlled/CheckboxField';
import { HandleStepsType } from '..';

interface FormValues {
  expectedDate: string;
  guaranteedBy: string[];
}

const DeliveryOptions = ({ handleSteps }: HandleStepsType) => {
  const [handleNextStep, handlePreviousStep] = handleSteps;
  const methods = useForm<FormValues>();
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Delivery Options</h2>

        <section>
          <h3>Express Courier (Air)</h3>
          <p>3 to 4 Business Days</p>
          <p>Free</p>
        </section>

        <section>
          <h4>Expected Date:</h4>
          <InputField name="expectedDate" type="radio" value="Monday, August 14" label="Monday, August 14" />
          <InputField name="expectedDate" type="radio" value="Wednesday, August 16" label="Wednesday, August 16" />
          <InputField name="expectedDate" type="radio" value="Tuesday, August 22" label="Tuesday, August 22" />
          <InputField name="expectedDate" type="radio" value="Friday, August 25" label="Friday, August 25" />
        </section>

        <section>
          <h4>Guaranteed By:</h4>
          <CheckboxField
            name="guaranteedBy"
            value="Wednesday, August 11th By 8 PM"
            label="Wednesday, August 11th By 8 PM - $24.00"
          />
          <CheckboxField
            name="guaranteedBy"
            value="Wednesday, August 11th By Noon"
            label="Wednesday, August 11th By Noon - $24.00"
          />
        </section>

        <Button type="submit">Confirm Delivery Options</Button>
      </form>

      <Button onClick={handleNextStep} className="mt-8">
        Next
      </Button>

      <Button onClick={handlePreviousStep} className="mt-8">
        Previous
      </Button>
    </FormProvider>
  );
};

export default DeliveryOptions;
