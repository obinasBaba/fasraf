import React from 'react';
import s from './testimonials.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation, Scrollbar } from 'swiper';
import Image from 'next/image';
import HeadIcon from '@/public/assets/project-header-icon.png';
import { Chip, Divider, IconButton, Stack, Typography } from '@mui/material';
import 'swiper/css';
import {
  ArrowCircleLeftTwoTone,
  ArrowCircleRightTwoTone,
  CalendarMonth,
  TaskAlt,
} from '@mui/icons-material';
import clsx from 'clsx';
import { ProjectsType } from '@/scenes/Home';

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
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  console.log('projects  :', projects);

  return (
    <div className={s.container}>
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
            slidesPerView={3}
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
                      <Stack direction="row" alignItems="center" gap=".3rem">
                        <div className={s.p_thumbnail}>
                          <Image src={HeadIcon} alt="header title icon" fill />
                        </div>
                        <Typography variant="h5" className={s.title}>
                          {project.title}
                        </Typography>
                      </Stack>

                      <div className={s.stars}>
                        <Chip
                          label={new Date(project.date).toLocaleDateString(
                            'en-US',
                            {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            },
                          )}
                          variant="outlined"
                          color="primary"
                          icon={<CalendarMonth fontSize="small" />}
                        />
                      </div>
                    </header>
                    <Divider />

                    <ul>
                      {project.achievements.map((item, idx) => (
                        <li key={idx}>
                          <TaskAlt fontSize="small" color="primary" />
                          <Typography variant="body1">{item.description}</Typography>
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
