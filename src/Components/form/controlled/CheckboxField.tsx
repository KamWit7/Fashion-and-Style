import { Checkbox, CheckboxProps } from '@components';
import { useFormContext } from 'react-hook-form';

const CheckboxField = ({ name, ...rest }: CheckboxProps & { name: string }) => {
  const { register } = useFormContext();

  return <Checkbox {...register(name)} {...rest} />;
};

export default CheckboxField;
