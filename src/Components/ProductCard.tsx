import React, { useState } from 'react'
import { Text } from '@components'
import { cn } from '@utils/cn'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface ProductCardProps
  extends React.PropsWithChildren,
    Partial<API.ProductType> {
  imgClassName?: string
  className?: string
  titleClassName?: string
}

const ColorLabels = ({ colors }: { colors: string[] }) => {
  return (
    <div className='flex justify-start items-center flex-nowrap'>
      {colors.map((color, idx) => (
        <div
          key={`color_label_${color}_${idx}`}
          className={cn(
            'rounded-full w-4 h-4 md:w-6 md:h-6 mr-2 last:mr-0 cursor-pointer',
            color
          )}
        />
      ))}
    </div>
  )
}

const FavoriteLabel = () => {
  const [liked, setLiked] = useState(false)

  const toggleLiked = () => {
    setLiked((prev) => !prev)
  }

  return (
    <div
      onClick={toggleLiked}
      className='absolute top-2 md:top-4 right-8 cursor-pointer'>
      {liked ? (
        <AiFillHeart size={24} className='fill-state-error-light' />
      ) : (
        <AiOutlineHeart size={24} />
      )}
    </div>
  )
}

const ProductCard = ({
  title,
  subtitle,
  img,
  price,
  variants,
  className,
  imgClassName,
  titleClassName,
}: ProductCardProps) => {
  return (
    <div
      className={cn(
        'relative max-w-[392px] space-y-1 space-x-1 mb-10 pr-4',
        className
      )}>
      <img
        src={img}
        className={cn('h-auto min-h-[213px] md:max-h-[438px]', imgClassName)}
        alt='product image'
      />

      <FavoriteLabel />

      {title && (
        <Text variant='h6' className={titleClassName}>
          {title}
        </Text>
      )}

      <div className='flex justify-between flex-col md:flex-row'>
        {subtitle && (
          <Text variant='b2' className='self-start md:self-center'>
            {subtitle}
          </Text>
        )}
        {price && (
          <Text variant='h6' className='self-end mr-1 md:self-center'>
            {price}$
          </Text>
        )}
      </div>

      {variants && <ColorLabels colors={variants} />}
    </div>
  )
}

export default ProductCard
