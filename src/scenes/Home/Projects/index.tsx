import React from 'react';
import s from './projects.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Scrollbar } from 'swiper';
import Image from 'next/image';
import HeadIcon from '@/public/assets/project-header-icon.png';
import { Divider, IconButton, Stack, Typography } from '@mui/material';
import 'swiper/css';
import {
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
  TaskAlt,
} from '@mui/icons-material';
import clsx from 'clsx';
import { ProjectsType } from '@/scenes/Home';
import { getStrapiMedia } from '@/lib/strapi';

const TestimonialsData = [
  {
    companyName: 'John Doe',
    icon: '',
    points: [
      'Professional team of the Promote Digital Marketing professionals.',
      'They know what they are doing with the current digital word.',
      'They know what they are doing with the current digital word.',
      'They know what they are doing with.',
    ],
  },
];

type Props = {
  projects: ProjectsType[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div className={s.container} id="projects">
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <Image src={HeadIcon} alt="header title icon" />
          </div>

          <Typography variant="h2" className={s.title}>
            Client Projects
          </Typography>

          <Stack direction="row" className={s.nav}>
            <IconButton color="primary" className={clsx(['left'])}>
              <ArrowCircleLeftTwoTone fontSize="large" />
            </IconButton>
            <IconButton color="primary" className={clsx(['right'])}>
              <ArrowCircleRightTwoTone fontSize="large" />
            </IconButton>
          </Stack>
        </header>

        <motion.div
          dragConstraints={{ left: 0, right: 0 }}
          drag="x"
          dragSnapToOrigin={true}
          whileDrag={{ scale: 0.98 }}
          dragElastic={false}
          style={{ cursor: 'grab' }}
          // dragMomentum={false}
        >
          <Swiper
            // loop
            slidesPerView={'auto'}
            // centeredSlides={true}
            spaceBetween={50}
            grabCursor={true}
            modules={[Scrollbar, Navigation]}
            className={s.swiper}
            navigation={{
              prevEl: '.left',
              nextEl: '.right',
            }}
            scrollbar={{
              el: '.swiper-scrollbar',
              hide: true,
            }}
          >
            <SwiperSlide className={s.slide}>
              <div className={s.spacer} />
            </SwiperSlide>

            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className={s.slide}>
                <div className={s.card}>
                  <div className={s.company_card}>
                    <header className={s.card_header}>
                      <Stack direction="row" alignItems="center" gap="1rem">
                        <div className={s.p_thumbnail}>
                          <Image
                            src={getStrapiMedia(project.thumbnail)}
                            alt="header title icon"
                            fill
                          />
                        </div>
                        <Typography variant="h5" className={s.title}>
                          {project.title}
                        </Typography>
                      </Stack>
                    </header>
                    <Divider />

                    <ul>
                      {project.achievements.map((item, idx) => (
                        <li key={idx}>
                          <TaskAlt color="primary" />
                          <Typography variant="body1">
                            {item.description}
                          </Typography>
                        </li>
                      ))}
                    </ul>
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

export default Projects;
