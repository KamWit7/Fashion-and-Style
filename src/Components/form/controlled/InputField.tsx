import { Input, InputProps } from '@components';
import { useFormContext } from 'react-hook-form';

const InputFiled = ({ name, ...rest }: InputProps & { name: string }) => {
  const { register } = useFormContext();

  return <Input {...register(name)} {...rest} />;
};

export default InputFiled;
