import { twMerge } from 'tailwind-merge'
import React from 'react'

type FullScreenImgProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src'
> & {
  src: string
}

const FullScreenImg = ({
  children,
  src,
  alt,
  className,
}: React.PropsWithChildren<FullScreenImgProps>) => {
  return (
    <div className='h-fit relative'>
      <img
        src={src}
        alt={alt}
        className={twMerge(
          'max-w-full bg-center bg-no-repeat bg-cover h-auto mx-auto',
          className
        )}
      />
      <div className='absolute bottom-0 left-0 mx-auto'>{children}</div>
    </div>
  )
}

export default FullScreenImg
