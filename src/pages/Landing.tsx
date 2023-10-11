import {
  Text,
  Section,
  Center,
  Button,
  FullScreenImg,
  ProductCard,
  Slider,
} from '@components'

const productInfo = {
  uid: 1,
  img: 'https://s3-alpha-sig.figma.com/img/2a1b/ae81/2e81613b401c4689b9ced6df9a3b631a?Expires=1698019200&Signature=YwCCiXLgx-MxfTOkdqcYKv8wODGFJUd2sFvgspjtYoOU~mfgxTpen0ODBljSVHFZh8HZY8fsMTIbaMmHRbqFxs07xeMnUYduBHDkUolClJw8~6bMRs4peygyo08AtuC5zgaHKclDLw-H8B3RgZaWtlNre~7WWfK7LOQKHSVYHDHQfTDIc8XvuTEy6USJkumFHJ3V43JUZripBGawNX1Ab4woY4HJZ7rBG0euQIqp2aDit4nKos--9vraUSLTxGjuuWs4zRJG1k2CwxAvQUrDqyIJgmYNonU2u8atBOBKmaQUdHN7Dqyyc9806bEdnNWvYyrjNpgTiQVd835x739gTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  color: 'bg-black',
  collection: '',
  title: 'Tailored Stretch',
  subtitle: 'Turn it Up Pants',
  price: 180,

  variants: ['bg-black ', 'bg-blue-600', 'bg-pink-500'],
}



const Landing = () => {
  return (
    <div>
      <FullScreenImg
        src={
          'https://s3-alpha-sig.figma.com/img/5acf/40a1/4ec616f602d9f91b003061a5deef40d0?Expires=1698019200&Signature=l42bagWYXykrPqfY5JiNcq20syDREaW2rH9cjUdW4Ms6droIaJFL-dexZgLE~7In158ovIc~wBvviooLLJt69CQkmKH0Og6LeYM0MDeIZvHwufG57POKOzUO76qgIvrNhwP6-EmFIFXk3aW4tGDv7-dSp8CdwsFYNVZQpizrV5zj3kMm7bxnOu79Y4gqJKUDw3kazGQUplfG59Q8V1ZadMhkPvnvYIeUtDWMAlCpUvjdgglNFANQFoRkOJ6W~FvfTv3LZXLa0UY3UuWmJNYZijHRSlJJNKIn~BWClXgPGRQG05GI3EvgRCOBT1rBVRkaug2MZvcn8hkWlpVR0OukCw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
        }
        alt='some img'>
        <Center bg='bg-transparent'>
          <div className='mb-32'>
            <Text variant='p1' className='italic mb-7 capitalize font-cabin'>
              Elegance in simplicity, <br /> Earth’s harmony
            </Text>
            <Button>New in</Button>
          </div>
        </Center>
      </FullScreenImg>
      <Center>
        <Section
          title='Best Sellers'
          classChildren='flex justify-between items-center space-x-4'>
          <Slider>
            {[
              productInfo,
              productInfo,
              productInfo,
              productInfo,
              productInfo,
              productInfo,
            ].map((p, idx) => (
              <ProductCard key={idx} {...p} />
            ))}
          </Slider>
        </Section>

        <Section title='Collection'>img</Section>
        <Section title='Modiweek'>Carusele</Section>
        <Section title='Follow Us @F&S'>img</Section>
      </Center>
    </div>
  )
}

export default Landing
