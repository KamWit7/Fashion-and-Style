import React, { useState } from 'react'
import { Text } from '@components'
import { twMerge } from 'tailwind-merge'
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
          className={twMerge('rounded-full w-6 h-6 mr-2 last:mr-0', color)}
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

  const styles = 'absolute top-4 right-8 cursor-pointer'

  return (
    <div onClick={toggleLiked} className={styles}>
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
      className={twMerge(
        'relative max-w-[392px] space-y-1 space-x-1 mb-10 pr-4',
        className
      )}>
      <img
        src={img}
        className={twMerge('w-full h-[438px]', imgClassName)}
        alt='product image'
      />

      <FavoriteLabel />

      {title && (
        <Text variant='h6' className={titleClassName}>
          {title}
        </Text>
      )}

      <div className='flex justify-between items-center flex-row '>
        {subtitle && <Text variant='b2'>{subtitle}</Text>}
        {price && (
          <Text variant='h6' className='mr-1'>
            {price}$
          </Text>
        )}
      </div>

      {variants && <ColorLabels colors={variants} />}
    </div>
  )
}

export default ProductCard
