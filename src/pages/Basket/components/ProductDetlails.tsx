import React, { useState } from 'react';
import Text from '@components/Text';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

type ProductDetailsProps = {
  size: string;
  color: string;
  title: string;
  imageSrcSet: string;
  price: number;
  total: number;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ size, color, imageSrcSet, price, total, title }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleMinus = () => {
    setQuantity((prev) => prev - 1);
  };

  return (
    <>
      <td className="px-4 py-2">
        <img
          loading="lazy"
          srcSet={imageSrcSet}
          className="w-[142px] max-w-full shrink-0 overflow-hidden object-contain object-center"
          alt="Product Image"
        />

        <div>
          <Text className="text-base font-bold capitalize leading-6 text-neutral-950" variant="h3">
            {title}
          </Text>
          <Text className="mt-4 text-base capitalize leading-7 text-neutral-700" variant="p2">
            Size: {size}
          </Text>
          <Text className="mt-2 text-base capitalize leading-7 text-neutral-700" variant="p2">
            Color: {color}
          </Text>
        </div>
      </td>

      <td className="px-4 py-2">
        <Text variant="b1">{price}</Text>
      </td>
      <td className="px-4 py-2">
        <AiOutlinePlus onClick={handleMinus} />
        <Text variant="b1">{quantity}</Text>
        <AiOutlineMinus onClick={handleAdd} />
      </td>

      <td className="px-4 py-2">
        <Text variant="b1">{total}</Text>
      </td>
    </>
  );
};

export default ProductDetails;
