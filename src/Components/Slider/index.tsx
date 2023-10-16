import React from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface SliderProps extends React.PropsWithChildren, SwiperProps {
  className?: string
}

const classes = {
  clickable: true,
  bulletClass: 'bg-gray-300 inline-block rounded-full mr-2 last:mr-0 h-2 w-2',
  bulletActiveClass: 'bg-primary-400',
}

const Slider = ({
  children,
  className,
  modules = [],
  ...swiperProps
}: SliderProps) => {
  return (
    <div className={className}>
      <Swiper
        pagination={classes}
        slidesPerView={3}
        mousewheel={{ thresholdDelta: 20, forceToAxis: true }}
        modules={[Pagination, Mousewheel, ...modules]}
        {...swiperProps}>
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
