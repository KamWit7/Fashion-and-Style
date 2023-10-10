import Button from '@components/Button'
import Center from '@components/Center'
import FullScreenImg from '@components/FullScreenImg'
import Text from '@components/Text'

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
            <Text variant='p1' className='italic mb-7'>
              Elegance in simplicity, <br /> Earth’s harmony
            </Text>
            <Button element='a' href='asd'>
              New in
            </Button>
          </div>
        </Center>
      </FullScreenImg>
    </div>
  )
}

export default Landing
