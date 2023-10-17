import { Center, Checkbox, Input, Text } from '@components';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiFillFacebook, AiOutlineArrowRight, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { BiLogoTiktok } from 'react-icons/bi';

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
];

const SocialsAndCopyright = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={className}>
      <div className="mb-6 flex gap-4 md:mb-11">
        <a href="https://www.instagram.com/">
          <AiOutlineInstagram size={32} className="cursor-pointer" />{' '}
        </a>
        <a href="https://www.facebook.com/">
          <AiFillFacebook size={32} className="cursor-pointer" />{' '}
        </a>
        <a href="https://www.tiktok.com/explore">
          <BiLogoTiktok size={32} className="cursor-pointer" />{' '}
        </a>
      </div>
      <div className="flex items-center gap-2">
        <AiOutlineCopyrightCircle className="h-4 w-4 md:h-6 md:w-6" />
        <Text variant="label1">2023 modimal. All Rights Reserved.</Text>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-gray-700 py-8 text-white md:pb-8 md:pt-12">
      <Center bg="bg-transparent w-full">
        <div className="flex w-full flex-col items-stretch justify-between md:flex-row">
          <div className="mr-10 flex flex-col justify-between gap-24 ">
            <div>
              <Text variant="h5">Join Our Club, Get 15% Off For Your Birthday</Text>

              <form>
                <Input
                  label="Enter Your Email Address"
                  icon={(styleProps) => <AiOutlineArrowRight size={styleProps.size} className={styleProps.className} />}
                />

                <Checkbox
                  name="email-allowed"
                  label="By Submittng your email, you agree to receive advertising emails from Modimal."
                />
              </form>
            </div>
            <SocialsAndCopyright className="hidden md:block" />
          </div>

          <div className="mt-12 flex flex-wrap gap-12 md:mt-0">
            {footerData.map((f, idx) => (
              <div
                key={`footer_links_${idx}_${f.title}`}
                className="flex-1/2 flex flex-col items-start justify-start gap-2"
              >
                <Text variant="h5" className="md:mb-4">
                  {f.title}
                </Text>
                {f.content.map((c, idx) => (
                  <Link key={`link_${idx}_${c.link}`} to={c.link} className="hover:underline">
                    <Text variant="b1" className="text-primary-100">
                      {c.text}
                    </Text>
                  </Link>
                ))}
              </div>
            ))}
          </div>

          <SocialsAndCopyright className="mt-6 md:hidden" />
        </div>
      </Center>
    </footer>
  );
};

export default Footer;
