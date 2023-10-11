import React from 'react'
import { Text } from '@components'
import { twMerge } from 'tailwind-merge'

interface ProductCardProps extends React.PropsWithChildren {
  title?: string
  subtitle?: string
  img?: string
  price?: number
}

const variantColors = ['bg-black ', 'bg-blue-600', 'bg-pink-500']

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

const ProductCard = ({ title, subtitle, img, price }: ProductCardProps) => {
  return (
    <div className='max-w-[392px] space-y-1 space-x-1 '>
      <img src={img} alt='product image' />

      {title && <Text variant='h6'>{title}</Text>}

      <div className='flex justify-between items-center flex-row'>
        {subtitle && <Text variant='b2'>{subtitle}</Text>}
        {price && <div className='mr-1'>{price}</div>}
      </div>

      <ColorLabels colors={variantColors} />
    </div>
  )
}

export default ProductCard
