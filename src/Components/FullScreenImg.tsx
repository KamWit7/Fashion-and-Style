import { cn } from '@utils/cn';
import React from 'react';

type FullScreenImgProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string;
};

const FullScreenImg = ({ children, src, alt, className, srcSet }: React.PropsWithChildren<FullScreenImgProps>) => {
  return (
    <div className="relative h-fit">
      <img
        src={src}
        alt={alt}
        srcSet={srcSet}
        className={cn('mx-auto h-auto max-w-full bg-cover bg-center bg-no-repeat', className)}
      />
      <div className="absolute inset-0 h-full w-full">{children}</div>
    </div>
  );
};

export default FullScreenImg;
