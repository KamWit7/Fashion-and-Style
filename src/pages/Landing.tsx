import { Text, Section, Center, Button, FullScreenImg, Slider, ProductCard, BannerBtnImg } from '@components';
import { useEffect, useMemo, useState } from 'react';
import { API } from '@api';
import { FreeMode } from 'swiper/modules';

import 'swiper/css/free-mode';

const Landing = () => {
  const [products, setProducts] = useState<API.ProductType[]>([]);
  const [modiweeks, setModiweek] = useState<API.ModiweekType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await API.getProducts({ bestseller: true });
      setProducts(data.products);
    };
    const getModiweek = async () => {
      const data = await API.getModiweek();
      setModiweek(data.modiweeks);
    };

    getProducts();
    getModiweek();
  }, []);

  const Products = useMemo(
    () =>
      products.map((p) => (
        <ProductCard
          key={p.uid}
          title={p.title}
          subtitle={p.subtitle}
          img={p.img}
          price={p.price}
          variants={p.variants}
        />
      )),
    [products]
  );

  const Modieweeks = useMemo(
    () =>
      modiweeks.map((m) => (
        <ProductCard
          key={m.uid}
          title={m.title}
          img={m.img}
          className="w-full min-w-full pl-4 md:pl-0"
          imgClassName="h-auto min-h-[250px] md:min-h-[426px]"
          titleClassName="pt-4"
        />
      )),
    [modiweeks]
  );

  return (
    <div>
      <FullScreenImg src="https://s3-alpha-sig.figma.com/img/5acf/40a1/4ec616f602d9f91b003061a5deef40d0?Expires=1698019200&Signature=l42bagWYXykrPqfY5JiNcq20syDREaW2rH9cjUdW4Ms6droIaJFL-dexZgLE~7In158ovIc~wBvviooLLJt69CQkmKH0Og6LeYM0MDeIZvHwufG57POKOzUO76qgIvrNhwP6-EmFIFXk3aW4tGDv7-dSp8CdwsFYNVZQpizrV5zj3kMm7bxnOu79Y4gqJKUDw3kazGQUplfG59Q8V1ZadMhkPvnvYIeUtDWMAlCpUvjdgglNFANQFoRkOJ6W~FvfTv3LZXLa0UY3UuWmJNYZijHRSlJJNKIn~BWClXgPGRQG05GI3EvgRCOBT1rBVRkaug2MZvcn8hkWlpVR0OukCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4">
        <Center bg="bg-transparent">
          <div className="absolute bottom-0 mb-4 md:mb-32">
            <Text variant="p1" className="mb-7 font-cabin capitalize italic">
              Elegance in simplicity, <br /> Earth’s harmony
            </Text>
            <Button>New in</Button>
          </div>
        </Center>
      </FullScreenImg>
      <Center>
        <Section title="Best Sellers" className="relative">
          <Button variant="text" className="absolute right-2 top-2 min-w-fit p-2" invertOnDark={false}>
            View All
          </Button>
          <Slider className="hidden md:block">{Products}</Slider>

          <Slider className="md:hidden" slidesPerView={2}>
            {Products}
          </Slider>
        </Section>

        <Section title="Collection">
          <BannerBtnImg />
        </Section>

        <Section title="Modiweek" className="hidden md:block">
          <Slider slidesPerView={3.2} freeMode pagination={false} modules={[FreeMode]}>
            {Modieweeks}
          </Slider>
        </Section>
      </Center>

      <Section title="Modiweek" titleCN="ml-4" className="md:hidden">
        <Slider slidesPerView={2.2} freeMode pagination={false} modules={[FreeMode]}>
          {Modieweeks}
        </Slider>
      </Section>

      {/* <Center>
        <Section title='Follow Us @F&S'>img</Section>
      </Center> */}
    </div>
  );
};

export default Landing;
