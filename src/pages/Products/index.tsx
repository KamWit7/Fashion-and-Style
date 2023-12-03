import { Center, Filters, MobileFilters, Pagination, ProductCard, Text } from '@components';
import { Await, useLoaderData, useNavigation, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { ProductsSliderType } from '@components/ProductsSlider/types';
import { Search } from '@components';

type ProductsLoaderResponseType = Awaited<ProductsSliderType['productsData']>;

function DisplayProductsCards(productsData: ProductsLoaderResponseType) {
  const { state } = useNavigation();

  if (state === 'loading') {
    return <div>loading...!</div>;
  }

  return productsData.products.map((p, idx) => (
    <ProductCard
      key={`product_card_${idx}_${p.title}`}
      className="flex-shrink flex-grow basis-[40%] p-0 md:min-w-[210px]"
      {...p}
    />
  ));
}

function DisplayPagination(productsData: ProductsLoaderResponseType) {
  const { totalCount, pageSize, currentPage } = productsData.pagination;

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('currentPage');

    if (page && Number(page) !== currentPage && Number(page) > 1) {
      searchParams.set('currentPage', JSON.stringify(Number(currentPage)));
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

  return (
    <Center>
      <Search />
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
