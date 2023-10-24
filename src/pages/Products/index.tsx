import { Center, Filters, MobileFilters, ProductCard, Text } from '@components';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
  const products = useLoaderData() as API.ProductType[];

  const productCount = products.length;

  return (
    <Center>
      <Text variant="b1" className="m-auto hidden w-full py-8 text-center md:inline-block">
        {productCount} Items
      </Text>

      <MobileFilters />

      <div className="flex flex-col justify-between md:flex-row md:gap-6">
        <Filters className="mb-12 flex flex-grow flex-col gap-4 md:basis-1/3" />

        <div className="flex-grow md:basis-2/3">
          <div className="flex flex-wrap justify-center gap-6 md:justify-between">
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
