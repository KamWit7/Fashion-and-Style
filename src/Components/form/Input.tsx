import { cnJoin } from '@src/utils/cnJoin'
import React, { useId } from 'react'

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'placeholder'> {
  label?: string
  icon?: ({
    className,
    size,
  }: {
    className: string
    size: number
  }) => React.ReactNode
  error?: string
}

const iconStyle = {
  className: cnJoin(
    'absolute top-1/2 right-4 -translate-y-1/2',
    'cursor-pointer'
  ),
  size: 16,
}

const Input = ({ label, name, icon, ...rest }: InputProps) => {
  const id = useId()

  const Icon = typeof icon === 'function' ? icon(iconStyle) : null

  return (
    <div className='relative my-3'>
      <input
        id={id}
        name={name}
        type='text'
        className={cnJoin(
          'peer w-full',
          'bg-transparent border border-gray-400 px-4 py-2',
          'focus:outline-none focus:border-white'
        )}
        placeholder=''
        {...rest}
      />
      <label
        htmlFor={id}
        className={cnJoin(
          'absolute bg-gray-700 px-1 z-10 ',
          '-top-1/3 left-2 text-14',
          'peer-focus:-top-1/3 peer-focus:left-2  peer-focus:text-14',

          'peer-placeholder-shown:top-2 peer-placeholder-shown:text-16',

          'transition-all'
        )}>
        {label}
      </label>

      {Icon}
    </div>
  )
}

export default Input
