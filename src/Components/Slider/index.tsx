import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

interface SliderProps extends React.PropsWithChildren {
  className?: string
}

const classes = {
  clickable: true,
  bulletClass: 'bg-gray-300 inline-block rounded-full mr-2 last:mr-0 h-2 w-2',
  bulletActiveClass: 'bg-primary-400',
}

const Slider = ({ children, className }: SliderProps) => {
  return (
    <Swiper
      pagination={classes}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      slidesPerView={3}
      mousewheel={{ thresholdDelta: 20, forceToAxis: true }}
      modules={[Pagination, Mousewheel, Autoplay]}
      className={className}>
      {React.Children.map(children, (child) => (
        <SwiperSlide>
          <div className='pl-6 mb-10'>{child}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Slider