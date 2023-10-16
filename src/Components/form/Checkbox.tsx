import React, { useId } from 'react'
import { cnJoin } from '@utils/cn'

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'children'> {
  label?: React.ReactNode
}

const Checkbox = ({ label, name, ...rest }: CheckboxProps) => {
  const id = useId()
  return (
    <div className='flex justify-start items-center gap-2'>
      <input
        id={`checkbox_${id}`}
        name={name}
        type='checkbox'
        className={cnJoin(
          'appearance-none w-4 h-4 relative border-0',

          'before:inline-block before:absolute before:top-0 after:left-0',
          'before:w-4 before:h-4 before:bg-white before:cursor-pointer',
          'checked:before:bg-primary-600 before:transition-bg before:ease-in-out before:duration-200',

          'after:inline-block after:absolute after:top-0 after:left-0',
          'after:checked:w-2 after:checked:h-3 after:w-0 after:h-0',
          'after:checked:border-b-2 after:checked:border-r-2 after:border-0',
          'after:rotate-45 after:translate-x-1',
          'after:checked:border-white'
        )}
        {...rest}
      />
      <label
        htmlFor={`checkbox_${id}`}
        className='font-montserrat font-semibold text-12 cursor-pointer'>
        {label}
      </label>
    </div>
  )
}

export default Checkbox
