import { Text, Section, Center, Button, FullScreenImg, Slider, ProductCard, BannerBtnImg } from '@components';

import { FreeMode } from 'swiper/modules';
import 'swiper/css/free-mode';

import { cn } from '@utils/cn';
import { LoaderData } from '@src/types/loader';

import { Await, useLoaderData } from 'react-router-dom';

import { LandingLoader } from '@pages';
import React, { useMemo } from 'react';
import ProductsSlider from '@components/ProductsSlider';

type LandingLoaderType = LoaderData<typeof LandingLoader>;

const sliderProps = { freeMode: true, pagination: false, modules: [FreeMode] };

function Modiweeks(modiweeks: API.ModiweekType[]) {
  const Items = useMemo(
    () =>
      modiweeks.map((m, idx) => (
        <ProductCard key={m._id} {...m} titleClassName="pt-4" className={cn(idx === 0 && 'pl-4 md:pl-0')} />
      )),
    [modiweeks]
  );

  return (
    <>
      <Slider slidesPerView={3.2} {...sliderProps} className="hidden md:block">
        {Items}
      </Slider>
      <Slider slidesPerView={2.2} {...sliderProps} className="md:hidden">
        {Items}
      </Slider>
    </>
  );
}

const Landing = () => {
  const data = useLoaderData() as LandingLoaderType;

  return (
    <div>
      <FullScreenImg src="https://s3-alpha-sig.figma.com/img/5acf/40a1/4ec616f602d9f91b003061a5deef40d0?Expires=1698019200&Signature=l42bagWYXykrPqfY5JiNcq20syDREaW2rH9cjUdW4Ms6droIaJFL-dexZgLE~7In158ovIc~wBvviooLLJt69CQkmKH0Og6LeYM0MDeIZvHwufG57POKOzUO76qgIvrNhwP6-EmFIFXk3aW4tGDv7-dSp8CdwsFYNVZQpizrV5zj3kMm7bxnOu79Y4gqJKUDw3kazGQUplfG59Q8V1ZadMhkPvnvYIeUtDWMAlCpUvjdgglNFANQFoRkOJ6W~FvfTv3LZXLa0UY3UuWmJNYZijHRSlJJNKIn~BWClXgPGRQG05GI3EvgRCOBT1rBVRkaug2MZvcn8hkWlpVR0OukCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
        <Center bg="bg-transparent">
          <div className="absolute bottom-0 mb-4 md:mb-32">
            <Text variant="p1" className="mb-7 font-cabin capitalize italic">
              Elegance in simplicity, <br /> Earth’s harmony
            </Text>
            <Button invertOnDark>New in</Button>
          </div>
        </Center>
      </FullScreenImg>

      <Center>
        <Section title="Best Sellers" className="relative">
          <Button variant="text" className="absolute right-2 top-2 min-w-fit p-2" invertOnDark={false}>
            View All
          </Button>

          <React.Suspense fallback={<div>Loadding...</div>}>
            <Await resolve={data?.productsData}>{ProductsSlider}</Await>
          </React.Suspense>
        </Section>

        <Section title="Collection">
          <BannerBtnImg />
        </Section>

        <Section title="Modiweek" className="hidden md:block">
          <React.Suspense fallback={<div>Loadding Modiweeek...</div>}>
            <Await resolve={data?.modiweeks}>{Modiweeks}</Await>
          </React.Suspense>
        </Section>
      </Center>

      <Section title="Modiweek" titleCN="ml-4" className="md:hidden">
        <React.Suspense fallback={<div>Loadding Modiweek...</div>}>
          <Await resolve={data?.modiweeks}>{Modiweeks}</Await>
        </React.Suspense>
      </Section>

      <Center>
        <Section title="Follow Us @F&S">img</Section>
      </Center>
    </div>
  );
};

export default Landing;
