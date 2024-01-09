import { cn, cnJoin } from '@utils/cn';
import React, { useId } from 'react';


export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label?: string;
  icon?: ({ className, size }: { className: string; size: number }) => React.ReactNode;
  error?: string;
  invertOnDark?: boolean;
}

const iconStyle = {
  className: cnJoin('absolute right-4 top-1/2 -translate-y-1/2', 'cursor-pointer'),
  size: 16,
};

const Input = ({ label, name, icon, invertOnDark, className, ...rest }: InputProps) => {
  const id = useId();

  const Icon = typeof icon === 'function' ? icon(iconStyle) : null;

  return (
    <div className={cn('relative my-3 bg-inherit', className)}>
      <input
        id={id}
        name={name}
        type="text"
        className={cn(
          'peer w-full',
          'border border-gray-400 bg-inherit px-4 py-2',
          'focus:border-gray-600 focus:outline-none',
          invertOnDark && 'focus:border-white'
        )}
        placeholder=""
        {...rest}
      />
      <label
        htmlFor={id}
        className={cnJoin(
          'absolute z-10 bg-inherit bg-none px-1',
          '-top-[20%] left-2 text-14 leading-[14px]',
          'peer-focus:-top-[20%] peer-focus:left-2 peer-focus:text-14 peer-focus:leading-[14px]',

          'peer-placeholder-shown:top-2 peer-placeholder-shown:text-16',

          'transition-all'
        )}
      >
        {label}
      </label>

      {Icon}
    </div>
  );
};

export default Input;
