import { Center, Filters, ProductCard, Text } from '@components';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const products = useLoaderData() as API.ProductType[];

  const productCount = products.length;

  return (
    <Center>
      <Text variant="b1" className="m-auto w-full py-8 text-center">
        {productCount} Items
      </Text>

      <div className="flex justify-between gap-6">
        <Filters className="flex flex-grow basis-1/3 flex-col gap-4" />

        <div className="flex-grow basis-2/3">
          <div className="flex flex-wrap justify-between gap-6 bg-emerald-50">
            {products.map((p, idx) => (
              <ProductCard
                key={`product_card_${idx}_${p.title}`}
                className="max-w-[calc(50%-12px)] flex-grow basis-2/6 p-0"
                {...p}
              />
            ))}
          </div>
        </div>
      </div>
    </Center>
  );
};

export default Products;
