import React, { useState } from 'react';
import s from './b_model.module.scss';
import { IconButton, Stack, Typography } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import Img from './img.png';
import Img2 from './img_1.png';
import Img3 from './img_2.png';
import HeadIcon from '@/public/assets/project-header-icon.png';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { getStrapiMedia } from '@/lib/strapi';

const images = [Img, Img2, Img3];

const localProjects = [
  {
    title: 'Freelance Network',
    subTitle: 'Project 1',
    description: `It can be difficult to know when
     SEO changes will translate
    into benefits, especially due to impediments such
     as websites that have been penalized.`,
  },
  {
    title: 'Long-Term Relationship',
    subTitle: 'Project 1',
    description: `It can be difficult to know when
     SEO changes will translate
    into benefits, especially due to impediments such
     as websites that have been penalized.`,
  },
  {
    title: 'Customized Solutions',
    subTitle: 'Project 1',
    description: `It can be difficult to know when
     SEO changes will translate
    into benefits, especially due to impediments such
     as websites that have been penalized.`,
  },
  {
    title: 'Innovative Solutions',
    subTitle: 'Project 1',
    description: `It can be difficult to know when
     SEO changes will translate
    into benefits, especially due to impediments such
     as websites that have been penalized.`,
  },
  {
    title: 'Data-Driven Solutions',
    subTitle: 'Project 1',
    description: `It can be difficult to know when
     SEO changes will translate
    into benefits, especially due to impediments such
     as websites that have been penalized.`,
  },
  {
    title: 'Industry Expertise',
    subTitle: 'Project 1',
    description: `It can be difficult to know when
     SEO changes will translate
    into benefits, especially due to impediments such
     as websites that have been penalized.`,
  },
];

const basicVariant: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

type Props = {
  models: any[];
};

const BusinessModel = ({ models }: Props) => {
  const [activeProject, setActiveProject] = useState(0);

  console.log('models', models);

  return (
    <section id="business_model" className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <Image src={HeadIcon} alt="header title icon" />
          </div>

          <Stack gap={2}>
            <Typography variant="h2" className={s.title}>
              Our Business <br />
              Model
            </Typography>
          </Stack>
        </header>

        <LayoutGroup>
          <motion.div className={s.content} layout="position">
            <motion.ul className={s.projects} layout>
              {models.slice(0, 3).map((project: any, idx) => (
                <motion.li
                  className={s.project_card}
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  layout
                >
                  <>
                    <motion.header layout>
                      <motion.div layout>
                        <Typography variant="h5" className={s.title}>
                          {project.title}
                        </Typography>
                      </motion.div>

                      <motion.div layout>
                        <IconButton
                          className={clsx([
                            s.icon_btn,
                            idx === activeProject && s.active,
                          ])}
                        >
                          <motion.div className={s.icon} layout>
                            <ChevronRight fontSize="large" color="inherit" />
                          </motion.div>
                        </IconButton>
                      </motion.div>
                    </motion.header>

                    <motion.div layout>
                      <AnimatePresence mode="popLayout">
                        {idx === activeProject && (
                          <motion.div
                            variants={basicVariant}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            layout
                          >
                            <Typography className={s.desc}>
                              {project.description}
                            </Typography>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </>
                </motion.li>
              ))}
            </motion.ul>

            <motion.ul className={s.projects} layout>
              {models.slice(3, 6).map((project: any, index) => {
                const idx = index + 3;
                return (
                  <motion.li
                    className={s.project_card}
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    layout
                  >
                    <>
                      <motion.header layout>
                        <motion.div layout>
                          <Typography variant="h5" className={s.title}>
                            {project.title}
                          </Typography>
                        </motion.div>

                        <motion.div layout>
                          <IconButton
                            className={clsx([
                              s.icon_btn,
                              idx === activeProject && s.active,
                            ])}
                          >
                            <motion.div className={s.icon} layout>
                              <ChevronRight fontSize="large" color="inherit" />
                            </motion.div>
                          </IconButton>
                        </motion.div>
                      </motion.header>

                      <motion.div layout>
                        <AnimatePresence mode="popLayout">
                          {idx === activeProject && (
                            <motion.div
                              variants={basicVariant}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              layout
                            >
                              <Typography className={s.desc}>
                                {project.description}
                              </Typography>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default BusinessModel;
