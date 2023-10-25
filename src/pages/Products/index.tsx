import { Center, Filters, MobileFilters, Pagination, ProductCard, Text } from '@components';
import { useLoaderData } from 'react-router-dom';
import loader from './loader';

const Products = () => {
  const { pagination, products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  const productCount = pagination.totalCount;
  console.log(products);

  return (
    <Center>
      <Text variant="b1" className="m-auto hidden w-full py-8 text-center md:inline-block">
        {productCount} Items
      </Text>

      <MobileFilters />

      <div className="flex flex-col justify-between md:flex-row md:gap-6">
        <Filters className="mb-12 flex flex-grow flex-col gap-4 md:basis-1/3" />

        <div className="flex-grow md:basis-2/3">
          <div className="flex flex-wrap justify-between gap-6">
            {products?.map((p, idx) => (
              <ProductCard
                key={`product_card_${idx}_${p.title}`}
                className="max-w-[calc(50%-12px)] flex-grow basis-2/6 p-0"
                {...p}
              />
            ))}
          </div>
        </div>
      </div>

      <Pagination totalCount={productCount} pageSize={pagination.pageSize} currentPage={pagination.currentPage} />
    </Center>
  );
};

export default Products;
