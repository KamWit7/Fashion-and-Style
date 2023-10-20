import { Center, Filters, ProductCard } from '@components/index';
import { useFetcher } from 'react-router-dom';

const Products = () => {
  const fetcher = useFetcher<API.ProductType[]>();

  const products = fetcher.data ?? [];
  const productCount = products.length;

  return (
    <Center>
      <div>Search</div>

      <Filters fetcher={fetcher} />

      <div className="flex justify-between gap-6">
        <div className="flex-grow basis-2/3">
          <div>Items: {productCount}</div>

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
