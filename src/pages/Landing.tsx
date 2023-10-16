import {
  Text,
  Section,
  Center,
  Button,
  FullScreenImg,
  Slider,
  ProductCard,
  BannerBtnImg,
} from '@components'
import { useEffect, useState } from 'react'
import { API } from '@api'
import { FreeMode } from 'swiper/modules'

import 'swiper/css/free-mode'

const Landing = () => {
  const [products, setProducts] = useState<API.ProductType[]>([])
  const [modiweeks, setModiweek] = useState<API.ModiweekType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const data = await API.getProducts({ bestseller: true })
      setProducts(data.products)
    }
    const getModiweek = async () => {
      const data = await API.getModiweek()
      setModiweek(data.modiweeks)
    }

    getProducts()
    getModiweek()
  }, [])

  return (
    <div>
      <FullScreenImg src='https://s3-alpha-sig.figma.com/img/5acf/40a1/4ec616f602d9f91b003061a5deef40d0?Expires=1698019200&Signature=l42bagWYXykrPqfY5JiNcq20syDREaW2rH9cjUdW4Ms6droIaJFL-dexZgLE~7In158ovIc~wBvviooLLJt69CQkmKH0Og6LeYM0MDeIZvHwufG57POKOzUO76qgIvrNhwP6-EmFIFXk3aW4tGDv7-dSp8CdwsFYNVZQpizrV5zj3kMm7bxnOu79Y4gqJKUDw3kazGQUplfG59Q8V1ZadMhkPvnvYIeUtDWMAlCpUvjdgglNFANQFoRkOJ6W~FvfTv3LZXLa0UY3UuWmJNYZijHRSlJJNKIn~BWClXgPGRQG05GI3EvgRCOBT1rBVRkaug2MZvcn8hkWlpVR0OukCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'>
        <Center bg='bg-transparent'>
          <div className='mb-4 md:mb-32 absolute bottom-0'>
            <Text variant='p1' className='italic mb-7 capitalize font-cabin'>
              Elegance in simplicity, <br /> Earth’s harmony
            </Text>
            <Button>New in</Button>
          </div>
        </Center>
      </FullScreenImg>
      <Center>
        <Section title='Best Sellers' className='relative'>
          <Button
            variant='text'
            className='absolute top-2 right-2 p-2 min-w-fit'
            invertOnDark={false}>
            View All
          </Button>
          <Slider>
            {products.map((p) => (
              <ProductCard
                key={p.uid}
                title={p.title}
                subtitle={p.subtitle}
                img={p.img}
                price={p.price}
                variants={p.variants}
              />
            ))}
          </Slider>
        </Section>

        <Section title='Collection'>
          <BannerBtnImg />
        </Section>
        <Section title='Modiweek'>
          <Slider
            slidesPerView={3.5}
            freeMode
            pagination={false}
            modules={[FreeMode]}>
            {modiweeks.map((m) => (
              <ProductCard
                key={m.uid}
                title={m.title}
                img={m.img}
                className='min-w-[304xp]'
                imgClassName='h-[426px] '
                titleClassName='pt-4'
              />
            ))}
          </Slider>
        </Section>
      </Center>

      <Center>
        <Section title='Follow Us @F&S'>img</Section>
      </Center>
    </div>
  )
}

export default Landing
