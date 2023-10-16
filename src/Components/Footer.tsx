import { Center, Checkbox, Input, Text } from '@components'
import { Link } from 'react-router-dom'
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineArrowRight,
  AiOutlineCopyrightCircle,
} from 'react-icons/ai'
import { BiLogoTiktok } from 'react-icons/bi'

const footerData = [
  {
    title: 'About Modimal',
    content: [
      { text: 'Collection', link: '.' },
      { text: 'Sustainability', link: '.' },
      { text: 'Privacy Policy', link: '.' },
      { text: 'Support System', link: '.' },
      { text: 'Terms & Condition', link: '.' },
    ],
  },
  {
    title: 'Help & Support',
    content: [
      { text: 'Order & Shipping', link: '.' },
      { text: 'Returns & Refunds', link: '.' },
      { text: 'FAQs', link: '.' },
      { text: 'Contact Us', link: '.' },
    ],
  },
  {
    title: 'Join Up',
    content: [
      { text: 'Careers', link: '.' },
      { text: 'Visit Us', link: '.' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className='w-full bg-gray-700 text-white pt-12 pb-8'>
      <Center bg='bg-transparent w-full'>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col gap-24'>
            <div>
              <Text variant='h5'>
                Join Our Club, Get 15% Off For Your Birthday
              </Text>

              <form>
                <Input
                  label='Enter Your Email Address'
                  icon={(styleProps) => (
                    <AiOutlineArrowRight
                      size={styleProps.size}
                      className={styleProps.className}
                    />
                  )}
                />

                <Checkbox
                  name='email-allowed'
                  label='By Submittng your email, you agree to receive advertising emails from Modimal.'
                />
              </form>
            </div>

            <div>
              <div className='flex gap-4 mb-11'>
                <a href='https://www.instagram.com/'>
                  <AiOutlineInstagram size={32} className='cursor-pointer' />{' '}
                </a>
                <a href='https://www.facebook.com/'>
                  <AiFillFacebook size={32} className='cursor-pointer' />{' '}
                </a>
                <a href='https://www.tiktok.com/explore'>
                  <BiLogoTiktok size={32} className='cursor-pointer' />{' '}
                </a>
              </div>
              <div className='flex items-center gap-2'>
                <AiOutlineCopyrightCircle size={24} />
                <Text variant='label1'>2023 modimal. All Rights Reserved.</Text>
              </div>
            </div>
          </div>

          <div className='flex gap-12'>
            {footerData.map((f) => (
              <div className='flex flex-col justify-start items-start gap-2'>
                <Text variant='h5' className='mb-4'>
                  {f.title}
                </Text>
                {f.content.map((c) => (
                  <Link to={c.link} className='hover:underline'>
                    <Text variant='b1' className='text-primary-100'>
                      {c.text}
                    </Text>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Center>
    </footer>
  )
}

export default Footer
