import AccordionItem from '@components/Accordion/AccordionItem';
import { Center, Checkbox, ProductCard } from '@components/index';
import { useSearchParams, useFetcher, useLocation } from 'react-router-dom';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const fetcher = useFetcher();
  const products = (fetcher.data ?? []) as API.ProductType[];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const { name, checked } = e.target as HTMLInputElement;

    if (checked) {
      searchParams.append('filter', name);
    }

    if (!checked && searchParams.has('filter', name)) {
      searchParams.delete('filter', name);
    }

    setSearchParams(searchParams);

    fetcher.submit(searchParams, { method: 'PATCH', action: location.pathname });
  }

  const sizeIV = {
    xl: searchParams.has('size[0]', 'xl'),
    xs: searchParams.has('size[1]', 'xs'),
    s: searchParams.has('size[2]', 's'),
    m: searchParams.has('size[3]', 'm'),
    l: searchParams.has('size[4]', 'l'),
  };

  const stockIV = {
    inStock: searchParams.has('filter', 'inStock'),
    outOfStock: searchParams.has('filter', 'outOfStock'),
  };

  const initialValue = { ...sizeIV, ...stockIV };

  const register = (name?: keyof typeof initialValue) => {
    const defaultChecked = name && initialValue?.[name];

    return { name, defaultChecked };
  };

  const productCount = products.length;

  const location = useLocation();

  return (
    <Center>
      <div>Search</div>
      <div className="flex justify-between gap-6">
        <fetcher.Form
          onChange={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="flex-grow basis-1/3">
            <AccordionItem title="Sort By">
              <Checkbox {...register('inStock')} label="In Stock" />
              <Checkbox {...register('outOfStock')} label="Out of Stock" />
            </AccordionItem>

            {/* <AccordionItem title="Collection">
              <Checkbox label="In Stock" />
              <Checkbox label="Out of Stock" />
            </AccordionItem> */}

            <AccordionItem title="Size">
              <Checkbox {...register('size', 'xs')} label="XS" />
              <Checkbox {...register('size', 's')} label="S" />
              <Checkbox {...register('size', 'm')} label="M" />
              <Checkbox {...register('size', 'l')} label="L" />
              <Checkbox {...register('size', 'xl')} label="XL" />
            </AccordionItem>
          </div>
        </fetcher.Form>
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
