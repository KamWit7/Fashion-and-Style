import { cn } from '@utils/cn'
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
  srcSet,
}: React.PropsWithChildren<FullScreenImgProps>) => {
  return (
    <div className='h-fit relative'>
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        className={cn(
          'max-w-full bg-center bg-no-repeat bg-cover h-auto mx-auto',
          className
        )}
      />
      <div className='absolute inset-0 w-full h-full'>{children}</div>
    </div>
  )
}

export default FullScreenImg
