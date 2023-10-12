import React from 'react'
import { Text } from '@components'
import { twMerge } from 'tailwind-merge'

interface ProductCardProps extends React.PropsWithChildren, API.ProductType {}

const ColorLabels = ({ colors }: { colors: string[] }) => {
  return (
    <div className='flex justify-start items-center flex-nowrap'>
      {colors.map((color) => (
        <div
          key={`color_${color}`}
          className={twMerge('rounded-full w-6 h-6 mr-2 last:mr-0', color)}
        />
      ))}
    </div>
  )
}

const ProductCard = ({
  title,
  subtitle,
  img,
  price,
  variants,
}: ProductCardProps) => {
  return (
    <div className='max-w-[392px] space-y-1 space-x-1 mb-10 pr-4'>
      <img src={img} className='h-[450px] w-full' alt='product image' />

      {title && <Text variant='h6'>{title}</Text>}

      <div className='flex justify-between items-center flex-row '>
        {subtitle && <Text variant='b2'>{subtitle}</Text>}
        {price && (
          <Text variant='h6' className='mr-1'>
            {price}$
          </Text>
        )}
      </div>

      <ColorLabels colors={variants} />
    </div>
  )
}

export default ProductCard
