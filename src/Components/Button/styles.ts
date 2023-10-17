export const variantClasses = {
  fill: [
    'bg-primary-600 text-white',
    'hover:bg-primary-700',
    'focus:bg-primary-750',
    'disabled:bg-gray disabled:text-gray-400',
  ],
  stroke: [
    'border-primary-600 border text-primary-600',
    'hover:border-primary-700 hover:text-primary-700',
    'disabled:bg-gray disabled:text-gray-400',
  ],
  text: ['text-primary-600', 'hover:text-primary-700', 'disabled:bg-gray disabled:text-gray-400'],
};

export const variantClassesDark = {
  fill: ['bg-white text-black', 'hover:bg-gray-100', 'focus:bg-gray-200', 'disabled:bg-gray-600'],

  stroke: [
    'border-white border text-white',
    'hover:border-gray-100 hover:text-gray-100',
    'disabled:bg-gray disabled:text-gray-400',
  ],
  text: ['text-white', 'hover:text-gray-100', 'disabled:bg-gray disabled:text-gray-400'],
};

export const sizeClasses = {
  L: ['min-w-[202px] py-[9.5px]'],
  M: ['min-w-[184px] py-2'],
};
