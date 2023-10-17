import React, { useId } from 'react';
import { cnJoin } from '@utils/cn';

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
  label?: React.ReactNode;
}

const Checkbox = ({ label, name, ...rest }: CheckboxProps) => {
  const id = useId();
  return (
    <div className="flex items-center justify-start gap-2">
      <input
        id={`checkbox_${id}`}
        name={name}
        type="checkbox"
        className={cnJoin(
          'relative h-4 w-4 appearance-none border-0',

          'before:absolute before:top-0 before:inline-block after:left-0',
          'before:h-4 before:w-4 before:cursor-pointer before:bg-white',
          'before:transition-bg before:duration-200 before:ease-in-out checked:before:bg-primary-600',

          'after:absolute after:left-0 after:top-0 after:inline-block',
          'after:h-0 after:w-0 after:checked:h-3 after:checked:w-2',
          'after:border-0 after:checked:border-b-2 after:checked:border-r-2',
          'after:translate-x-1 after:rotate-45',
          'after:checked:border-white'
        )}
        {...rest}
      />
      <label htmlFor={`checkbox_${id}`} className="ml-2 cursor-pointer font-montserrat text-12 font-semibold">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
