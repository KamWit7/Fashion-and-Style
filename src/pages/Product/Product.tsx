import { Accordion, Button, Center, ColorsLabel, ProductsSlider, Section, Text } from '@components';
import { ProductLoader } from '@pages';
import { BsHeart, BsTruck } from 'react-icons/bs';
import { cn } from '@utils/cn';
import { useState } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { LoaderData } from '@src/types/loader';
import React from 'react';

type ProductType = LoaderData<typeof ProductLoader>;
type AwaitedProductType = Awaited<ProductType['productData']>;

export const Product = () => {
  const data = useLoaderData() as LoaderData<typeof ProductLoader>;
  const [activeImg, setActiveImg] = useState(0);

  return (
    <Center>
      <div className="flex gap-6">
        <div className="flex-1">
          <div className="mb-8 flex max-h-[512px] justify-between gap-4 overflow-hidden">
            <div className="flex basis-1/4 cursor-pointer flex-col gap-2 overflow-y-auto">
              <React.Suspense fallback={<div>imgs loading</div>}>
                <Await resolve={data?.productData}>
                  {(productData: AwaitedProductType) =>
                    [productData.product.mainImg, ...productData.product.imgs].map((i, idx) => (
                      <img
                        key={`${i}_${idx}`}
                        className={cn('object-cover', idx !== activeImg && 'opacity-40')}
                        src={i}
                        onClick={() => setActiveImg(idx)}
                        alt="product img"
                      />
                    ))
                  }
                </Await>
              </React.Suspense>
            </div>

            <div className="flex-1 overflow-hidden">
              <React.Suspense fallback={<div>imgs loading</div>}>
                <Await resolve={data?.productData}>
                  {(productData: AwaitedProductType) => (
                    <img
                      className="w-full bg-center object-fill"
                      src={
                        [productData.product.mainImg, ...productData.product.imgs]?.[activeImg] ||
                        productData.product.mainImg
                      }
                      alt="active product img"
                    />
                  )}
                </Await>
              </React.Suspense>
            </div>
          </div>

          <React.Suspense fallback={<div>Loading...</div>}>
            <Await resolve={data?.productData}>
              {(productData: AwaitedProductType) =>
                productData.product.description.map((des, idx, arr) => (
                  <Accordion
                    key={des.title}
                    variant="outline"
                    title={des.title}
                    className={cn(arr.length - 1 !== idx && 'border-b-0')}
                  >
                    <ul>
                      {des.property.map((p) => (
                        <li key={p.title}>
                          <Text variant="b1">{p.title}:</Text>
                          <Text variant="b1">{p.about}</Text>
                        </li>
                      ))}
                    </ul>
                  </Accordion>
                ))
              }
            </Await>
          </React.Suspense>
        </div>

        <Section title="Wrap Top" className="mt-0 flex-1">
          <Text variant="b1" className="mt-8">
            Versatile and universally flattering, our wrap blouse can be tied, draped, snapped and wrapped multiple
            ways.
          </Text>
          <div className="mt-6">
            <Text variant="b1">Colors:</Text>

            <React.Suspense fallback={<div>Loading...</div>}>
              <Await resolve={data?.productData}>
                {(productData: AwaitedProductType) => <ColorsLabel colors={productData.product.colors} />}
              </Await>
            </React.Suspense>
          </div>
          <Button type="button" className="mt-6 w-full">
            Add To Cart
          </Button>
          <div className="mt-8 flex justify-between px-4 text-gray-500">
            <div className="flex cursor-pointer items-center justify-center gap-2">
              <BsTruck size={20} />
              <Text variant="b1">Easy Return</Text>
            </div>
            <div className="flex cursor-pointer items-center justify-center gap-2">
              <BsHeart size={20} />
              <Text variant="b1">Add To Wish List</Text>
            </div>
          </div>
          <div className="mt-16 border bg-primary-25 p-4">
            <React.Suspense fallback={<div>Loading...</div>}>
              <Await resolve={data?.productData}>
                {(productData: AwaitedProductType) => (
                  <Text variant="h5" className="border-b-[1px] py-2 text-16 font-bold">
                    {productData.product.material.type}
                  </Text>
                )}
              </Await>
            </React.Suspense>

            <React.Suspense fallback={<div>Loading...</div>}>
              <Await resolve={data?.productData}>
                {(productData: AwaitedProductType) => (
                  <Text variant="b1" className="my-6">
                    {productData.product.material.description}
                  </Text>
                )}
              </Await>
            </React.Suspense>

            <div className="flex items-center justify-start gap-4">
              <React.Suspense fallback={<div>Loading...</div>}>
                <Await resolve={data?.productData}>
                  {(productData: AwaitedProductType) =>
                    productData.product.material.properties.map((p) => (
                      <div key={p} className="bg-white py-2">
                        <Text variant="b2" className="px-2  py-1">
                          {p}
                        </Text>
                      </div>
                    ))
                  }
                </Await>
              </React.Suspense>
            </div>
          </div>
        </Section>
      </div>
      <Section title="You May Also Like">
        <ProductsSlider
          products={{
            models: [],
            modelName: '',
          }}
          pagination={{
            totalCount: 0,
            pageSize: 0,
            currentPage: 0,
          }}
        />
      </Section>
    </Center>
  );
};

export default Product;
