import React, { useState } from 'react';
import Text from '@components/Text';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useCart } from '@src/context/CardContext/useCart';

const ProductDetails: React.FC<{
  productId: API.ProductType;
  quantity: number;
}> = ({ productId, quantity: itemsNumber }) => {
  const { mainImg, sizes, colors, price, title, _id } = productId;

  const { addToCart, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(itemsNumber);

  const increaseProductQuantity = () => {
    setQuantity((prev) => prev + 1);
    addToCart(_id);
  };

  const decreaseProductQuantity = () => {
    setQuantity((prev) => prev - 1);
    removeFromCart(_id);
  };

  return (
    <>
      <td className="px-4 py-2">
        <img
          loading="lazy"
          srcSet={mainImg}
          className="w-[142px] max-w-full shrink-0 overflow-hidden object-contain object-center"
          alt="Product Image"
        />

        <div>
          <Text className="text-base font-bold capitalize leading-6 text-neutral-950" variant="h3">
            {title}
          </Text>
          <Text className="mt-4 text-base capitalize leading-7 text-neutral-700" variant="p2">
            Size: {sizes?.[0]}
          </Text>
          <Text className="mt-2 text-base capitalize leading-7 text-neutral-700" variant="p2">
            Color: {colors?.[0]}
          </Text>
        </div>
      </td>

      <td className="px-4 py-2">
        <Text variant="b1">{price}</Text>
      </td>
      <td className="px-4 py-2">
        <AiOutlinePlus onClick={increaseProductQuantity} />
        <Text variant="b1">{quantity}</Text>
        <AiOutlineMinus onClick={decreaseProductQuantity} />
      </td>

      <td className="px-4 py-2">
        <Text variant="b1">{price * quantity}</Text>
      </td>
    </>
  );
};

export default ProductDetails;
