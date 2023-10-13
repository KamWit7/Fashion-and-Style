import { Center, Text } from '@components'

const footerData = [
  {
    title: 'About Modimal',
    content: [
      'Collection',
      'Sustainability',
      'Privacy Policy',
      'Support System',
      'Terms & Condition',
    ],
  },
  {
    title: 'Help & Support',
    content: ['Order & Shipping', 'Returns & Refunds', 'FAQs', 'Contact Us'],
  },
  { title: 'Join Up', content: ['Careers', 'Visit Us'] },
]

const Footer = () => {
  return (
    <div className='flex w-full bg-gray-700'>
      <Center bg='bg-transparent'>
        <div>
          <Text variant='h5' className='text-white'>
            Join Our Club, Get 15% Off For Your Birthday
          </Text>
        </div>
        <div></div>
      </Center>
    </div>
  )
}

export default Footer
