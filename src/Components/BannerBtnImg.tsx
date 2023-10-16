import React from 'react'
import { cn } from '@utils/cn'
import { Button } from '@components'

interface ImgWithButtonProps
  extends React.PropsWithChildren,
    React.ImgHTMLAttributes<HTMLImageElement> {
  alignBtn: 'left' | 'right'
  imgH?: string
  isRelativeBg?: boolean
}

const ImgWithButton = ({
  src,
  className,
  children,
  alignBtn = 'right',
  imgH,
  isRelativeBg,
}: ImgWithButtonProps) => {
  return (
    <div
      className={cn(
        'relative overflow-hidden w-full',
        isRelativeBg && imgH,
        className
      )}>
      <img
        className={cn(
          'w-full bg-cover',
          imgH,
          isRelativeBg && 'absolute w-full h-auto top-1/2 -translate-y-1/2'
        )}
        src={src}
        alt='collection img'
      />
      <Button
        className={cn(
          'absolute bottom-4',
          alignBtn === 'right' ? 'right-4' : 'left-4'
        )}>
        {children}
      </Button>
    </div>
  )
}

const BannerBtnImg = () => {
  return (
    <div className='flex justify-between items-stretch'>
      <div className='basis-1/2 flex flex-col justify-start items-center mr-6'>
        <ImgWithButton
          imgH='h-[518px]'
          className='mb-16'
          src='https://s3-alpha-sig.figma.com/img/7d6e/011d/637d8076f450d0748072279f5cc2048f?Expires=1698019200&Signature=XYuIJC~kQH2QytRu9hZZCH9ZUy0RFZl8uiHsn5oaNiglOkkPYOG-0C4CYRLUygjX1hDZhAz5PwzeAqzh2Mou5gGHilDdBqVDZpu-eL9TfDGRTdGYUAODogjS1BJhWSDrFI-OI8~rubPLFcDf4OS-3g1hgqXfCeBBOlDoUn9IsmN~d2RI99zO~WJxdUABAMfff-~toZx~SuTGVUd2JfBCa~H3imZew~GthZke34UyCBEJuP66kXRsVKGI3CPcMilG9f8Jiz3dDldlB6WTZv9CEh58t6nQaIGr6lIDDoXZQ2J4uE~WdN3kXOj6s-Oe1Boz2cvZ4hozUYM3nd614079Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alignBtn='right'
          isRelativeBg>
          Blouses
        </ImgWithButton>
        <ImgWithButton
          imgH='h-[837px]'
          src='https://s3-alpha-sig.figma.com/img/e1eb/aac7/132efdc745cc3cbc6bead99ab9a90c31?Expires=1698019200&Signature=irEYQLk7Cs3i5TysC6HJT-S2HiZyJiBBr1xF11i3WAEwRrlls5D3QsI8v5UjJ~eCWAF6wrLBBwyTJVGb3bj50QVeCLbwXgANmSqfBGszwFfJoV3YPfLNtVVjAWUbWX70uODyaLlFFWGPOaPr7x5PgEVQ5ad84ObK7S-afiHDCIzoQIxyJXl0qlGUYG4EMGwZGUbm2Bw9GhppRvS3F16mUh3VWixxzPvCvkrCcLfPPHMMAEE742LfDN0MdCBNYWT76TwohpfEBY60ikIEKWN79G7KC4YoTSDAzoR~VCNhjHSOlLPwf4hiMGC37s3pFbho7vhh1tiRawvfMRcJiQ75-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alignBtn='right'>
          Dresses
        </ImgWithButton>
      </div>
      <div className='basis-1/2 flex flex-col h-full'>
        <ImgWithButton
          imgH='h-[840px]'
          className='mb-36'
          src='https://s3-alpha-sig.figma.com/img/ad9c/d55b/08cf35cdef25b1b91c9267cde6c2da60?Expires=1698019200&Signature=kWnNpYp5BZSLN2WXzfdilb3WNiyl9~GKRx6FjkG0BIs1~5TwI-PHJwdhRwOyTG9dpxR3r2vsQ45daotT~FqoE9~eEiQpSMWwY5tKx38zW-XPtGYTYvXCiOVoLlkR9qbJxFLuwgyYW7JKCg9KYYKbKVBtUnklkaP-cdeS6wOVpDVnZo4xRfLz9mjvaSs8bog1ExVu1F8TwzWp8oqFlE6axfmw8btKnYhpafVKnBPrqEMPUxmC1Jzx99syd3Tqm~harPhhX4AmC1O6zRrJiiWa4QsJRL08X41RwUHMELA-Fs7TZ--S8P1xRW0h-Nz7xIAM5VqEzVJ-F03a2KDqTAGi1Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alignBtn='left'>
          Pants
        </ImgWithButton>
        <ImgWithButton
          imgH='h-[435px]'
          src='https://s3-alpha-sig.figma.com/img/73e1/4e49/4a3e57253a1e3434e22de58928784b6f?Expires=1698019200&Signature=Mel6urhAC3l9HugX-QklpIjhjwChJNfaWhJT7rEOuZjHo1-RU9SmwIaD~I1G6PwHXpu2fYsh2wZEUvKJaQ17~E7uwBDsjkXg2XyqgACS8wj~ey2kLWUmx5j~v9oZbPpo91S9Wzymgcz2XC6R7nYJ6PhN9xGaIm6yU4hlny0NrSxYA1LCTcUpxbPmFq1i44xAD2DHVv5NZfM-V943V73g3MdGtinJi2uh3QHJBcJa2~EZAMk3s42V1fHXLJILx~bYOkMjZ7mch13do9NyCAps~6Fcd4RpXMRFs9v7aZ~vuv6faSXjJUux5WYfwKL0golM5ZvxjfnixpwhAXkZ~L5ivg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
          alignBtn='right'
          isRelativeBg>
          Outwear
        </ImgWithButton>
      </div>
    </div>
  )
}

export default BannerBtnImg
