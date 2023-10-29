import React, { useState } from 'react';
import { Text, ColorsLabel } from '@components';
import { cn } from '@utils/cn';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps extends React.PropsWithChildren, Partial<API.ProductType> {
  imgClassName?: string;
  className?: string;
  titleClassName?: string;
}

const FavoriteLabel = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked((prev) => !prev);
  };

  return (
    <div onClick={toggleLiked} className="absolute right-4 top-4 cursor-pointer">
      {liked ? <AiFillHeart size={24} className="fill-state-error-light" /> : <AiOutlineHeart size={24} />}
    </div>
  );
};

const ProductCard = ({
  id,
  title,
  subtitle,
  mainImg,
  price,
  colors,
  className,
  imgClassName,
  titleClassName,
}: ProductCardProps) => {
  const classes = cn('relative mb-10 space-x-1 space-y-1 pr-4', className);
  const navigate = useNavigate();

  return (
    <div className={classes}>
      {/* TODO: Temp. color for bg */}
      <div
        onClick={() => navigate(`./${id}`)}
        className="relative min-h-[213px]  cursor-pointer overflow-hidden bg-red-100 sm:min-h-[438px]"
      >
        <img src={mainImg} className={cn('absolute -z-10 h-auto max-w-full', imgClassName)} alt="product image" />
      </div>
      <FavoriteLabel />

      {title && (
        <Text
          onClick={() => navigate(`./${id}`)}
          variant="h6"
          className={cn('cursor-pointer hover:underline', titleClassName)}
        >
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

      {colors && <ColorsLabel colors={colors} />}
    </div>
  );
};

export default ProductCard;
