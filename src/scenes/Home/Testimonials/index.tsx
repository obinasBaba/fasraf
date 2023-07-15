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
            loop
            slidesPerView={'auto'}
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
