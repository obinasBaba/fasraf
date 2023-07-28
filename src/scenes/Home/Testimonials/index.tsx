import React from 'react';
import s from './testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Scrollbar } from 'swiper';
import Image from 'next/image';
import HeadIcon from './testimonial-header-icon.png';
import ComName from './company_name.png';
import Star from './star.png';
import Profile from './profile.png';
import { Divider, Stack, Typography } from '@mui/material';
import 'swiper/css';

const TestimonialsData = [
  {
    companyName: 'John Doe',
    icon: '',
    say: `“Professional team of the Promote Digital
     Marketing professionals. They know what
      they are doing with the current digital word”.😇`,
  },
];

const Testimonials = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <Image src={HeadIcon} alt="header title icon" />
          </div>

          <Stack gap={2}>
            <Typography className={s.sub}>04.TESTIMONIALS</Typography>

            <Typography variant="h2" className={s.title}>
              What Our <br /> Client Says
            </Typography>
          </Stack>
        </header>

        <motion.div
          dragConstraints={{ left: 0, right: 0 }}
          drag={'x'}
          dragSnapToOrigin={true}
          whileDrag={{ scale: 0.95 }}
          dragElastic={false}
          style={{ cursor: 'grab' }}
          // dragMomentum={false}
        >
          <Swiper
            // loop
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={50}
            grabCursor={true}
            modules={[Scrollbar, Navigation]}
            className={s.swiper}
            scrollbar={{
              el: '.swiper-scrollbar',
              hide: true,
            }}
          >
            <div className={s.quote}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // shape-rendering="geometricPrecision"
                // text-rendering="geometricPrecision"
                width="100%"
                imageRendering="optimizeQuality"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 512 379.51"
              >
                <path d="M299.73 345.54c81.25-22.55 134.13-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160.01-60.55C243.33-10.34 430.24-36.22 485.56 46.34c12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.6 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77zm-267.78 0c81.25-22.55 134.14-69.68 147.28-151.7 3.58-22.31-1.42-5.46-16.55 5.86-49.4 36.97-146.53 23.88-160-60.55-27.14-149.49 159.78-175.37 215.1-92.81 12.87 19.19 21.39 41.59 24.46 66.19 13.33 106.99-41.5 202.28-137.82 247.04-17.82 8.28-36.59 14.76-56.81 19.52-10.12 2.04-17.47-3.46-20.86-12.78-2.87-7.95-3.85-16.72 5.2-20.77z" />
              </svg>
            </div>

            {data.map((item, idx) => (
              <SwiperSlide key={idx} className={s.slide}>
                <div className={s.card}>
                  <div className={s.company_card}>
                    <header>
                      <Image src={ComName} alt="company name" />
                      <div className={s.stars}>
                        {[1, 2, 3, 4, 5].map((item, idx) => (
                          <Image src={Star} alt="company name" key={idx} />
                        ))}
                      </div>
                    </header>
                    <Divider />
                    <Typography className={s.say}>
                      “Professional team of the Promote Digital Marketing
                      professionals. They know what they are doing with the
                      current digital word”.😇
                    </Typography>
                  </div>
                  <div className={s.profile}>
                    <Image
                      className={s.pp}
                      src={Profile}
                      alt="company name"
                      key={idx}
                    />
                    <Stack>
                      <Typography className={s.name} variant="h6">
                        John Doe
                      </Typography>
                      <Typography className={s.role} color="gray">
                        Marketing Lead at Google
                      </Typography>
                    </Stack>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-scrollbar"></div>
          </Swiper>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
