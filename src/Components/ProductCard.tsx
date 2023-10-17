import React, { useState } from 'react';
import { Text } from '@components';
import { cn } from '@utils/cn';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface ProductCardProps extends React.PropsWithChildren, Partial<API.ProductType> {
  imgClassName?: string;
  className?: string;
  titleClassName?: string;
}

const ColorLabels = ({ colors }: { colors: string[] }) => {
  return (
    <div className="flex flex-nowrap items-center justify-start">
      {colors.map((color, idx) => (
        <div
          key={`color_label_${color}_${idx}`}
          className={cn('mr-2 h-4 w-4 cursor-pointer rounded-full last:mr-0 md:h-6 md:w-6', color)}
        />
      ))}
    </div>
  );
};

const FavoriteLabel = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div onClick={toggleLiked} className="absolute right-8 top-2 cursor-pointer md:top-4">
      {liked ? <AiFillHeart size={24} className="fill-state-error-light" /> : <AiOutlineHeart size={24} />}
    </div>
  );
};

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
    <div className={cn('relative mb-10 max-w-[392px] space-x-1 space-y-1 pr-4', className)}>
      <img src={img} className={cn('h-auto min-h-[213px] md:max-h-[438px]', imgClassName)} alt="product image" />

      <FavoriteLabel />

      {title && (
        <Text variant="h6" className={titleClassName}>
          {title}
        </Text>
      )}

      <div className="flex flex-col justify-between md:flex-row">
        {subtitle && (
          <Text variant="b2" className="self-start md:self-center">
            {subtitle}
          </Text>
        )}
        {price && (
          <Text variant="h6" className="mr-1 self-end md:self-center">
            {price}$
          </Text>
        )}
      </div>

      {variants && <ColorLabels colors={variants} />}
    </div>
  );
};

export default ProductCard;
