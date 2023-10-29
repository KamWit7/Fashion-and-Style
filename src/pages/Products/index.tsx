import { Center, Filters, MobileFilters, Pagination, ProductCard, Text } from '@components';
import { Await, useLoaderData, useNavigation, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { ProductsSliderType } from '@components/ProductsSlider/types';
import Search from '@components/Search';

type ProductsLoaderResponseType = Awaited<ProductsSliderType['productsData']>;

function DisplayProductsCards(productsData: ProductsLoaderResponseType) {
  const { state } = useNavigation();

  if (state === 'loading') {
    return <div>loading...</div>;
  }

  return productsData.products.models.map((p, idx) => (
    <ProductCard
      key={`product_card_${idx}_${p.title}`}
      className="max-w-[calc(50%-12px)] flex-grow basis-2/6 p-0"
      {...p}
    />
  ));
}

function DisplayPagination(productsData: ProductsLoaderResponseType) {
  const { totalCount, pageSize, currentPage } = productsData.pagination;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');

    if (page && Number(page) !== currentPage && Number(page) > 1) {
      searchParams.set('page', JSON.stringify(Number(currentPage)));
      setSearchParams(searchParams);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  if (Math.ceil(totalCount / pageSize) <= 1) {
    return null;
  }

  return <Pagination totalCount={totalCount} pageSize={pageSize} currentPage={currentPage} />;
}

const Products = () => {
  const data = useLoaderData() as ProductsSliderType;
  const { state } = useNavigation();

  const [search, setSearch] = useState<string>();

  useEffect(() => {
    if (state !== 'idle') {
      return;
    }
    // use Action to change data from loader
  }, []);

  return (
    <Center>
      <Search
        handleClear={() => {
          setSearch(undefined);
        }}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {JSON.stringify(search)}
      <Text variant="b1" className="m-auto hidden w-full py-8 text-center md:inline-block">
        <React.Suspense fallback={<>Countingg.....</>}>
          <Await resolve={data.productsData}>
            {(productsData: ProductsLoaderResponseType) => <>{productsData.pagination.totalCount} Items</>}
          </Await>
        </React.Suspense>
      </Text>

      <MobileFilters />

      <div className="flex flex-col justify-between md:flex-row md:gap-6">
        <Filters className="mb-12 flex flex-grow flex-col gap-4 md:basis-1/3" />

        <div className="flex-grow md:basis-2/3">
          <div className="flex flex-wrap justify-between gap-6">
            <React.Suspense fallback={<div>Loadding...</div>}>
              <Await resolve={data?.productsData}>{DisplayProductsCards}</Await>
            </React.Suspense>
          </div>
        </div>
      </div>

      <React.Suspense fallback={<div>pagination...</div>}>
        <Await resolve={data?.productsData}>{DisplayPagination}</Await>
      </React.Suspense>
    </Center>
  );
};

export default Products;
