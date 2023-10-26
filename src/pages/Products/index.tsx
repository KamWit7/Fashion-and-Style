import { Center, Filters, MobileFilters, Pagination, ProductCard, Text } from '@components';
import { Await, useLoaderData, useNavigation, useSearchParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { LoaderData } from '@src/types/loader';
import { ProductsLoader } from '..';

type ProductsLoaderType = LoaderData<typeof ProductsLoader>;
type ProductsLoaderResponseType = Awaited<ProductsLoaderType['loaderData']>;

function DisplayProductsCards(loaderData: ProductsLoaderResponseType) {
  const { state } = useNavigation();

  if (state === 'loading') {
    return <div>loading...</div>;
  }

  return loaderData.products.models.map((p, idx) => (
    <ProductCard
      key={`product_card_${idx}_${p.title}`}
      className="max-w-[calc(50%-12px)] flex-grow basis-2/6 p-0"
      {...p}
    />
  ));
}

function DisplayPagination(loaderData: ProductsLoaderResponseType) {
  const { totalCount, pageSize, currentPage } = loaderData.pagination;

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
  const data = useLoaderData() as ProductsLoaderType;

  return (
    <Center>
      <Text variant="b1" className="m-auto hidden w-full py-8 text-center md:inline-block">
        <React.Suspense fallback={<>Countingg.....</>}>
          <Await resolve={data.loaderData}>
            {(loaderData: ProductsLoaderResponseType) => <>{loaderData.pagination.totalCount} Items</>}
          </Await>
        </React.Suspense>
      </Text>

      <MobileFilters />

      <div className="flex flex-col justify-between md:flex-row md:gap-6">
        <Filters className="mb-12 flex flex-grow flex-col gap-4 md:basis-1/3" />

        <div className="flex-grow md:basis-2/3">
          <div className="flex flex-wrap justify-between gap-6">
            <React.Suspense fallback={<div>Loadding...</div>}>
              <Await resolve={data?.loaderData}>{DisplayProductsCards}</Await>
            </React.Suspense>
          </div>
        </div>
      </div>

      <React.Suspense fallback={<div>pagination...</div>}>
        <Await resolve={data?.loaderData}>{DisplayPagination}</Await>
      </React.Suspense>
    </Center>
  );
};

export default Products;
