import React, { useState } from 'react';
import s from './projects.module.scss';
import { IconButton, Stack, Typography } from '@mui/material';
import { AnimatePresence, LayoutGroup, motion, Variants } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';
import Img from './img.png';
import Img2 from './img_1.png';
import Img3 from './img_2.png';
import HeadIcon from './project-header-icon.png';

const images = [Img, Img2, Img3];

const projects = [
  {
    title: 'Project 1',
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

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>

          <div className={s.icon}>
            <Image src={HeadIcon} alt='header title icon'/>
          </div>

          <Stack gap={2}>
            <Typography className={s.sub}>
              4. OUR PROJECTS
            </Typography>

            <Typography variant='h2' className={s.title}>
              Our latest <br/>
              client Projects
            </Typography>
          </Stack>

        </header>

        <div className={s.content}>
          <motion.ul className={s.projects} layout>
            {Array.from({ length: 3 })
              .fill(projects[0])
              .map((p: any, idx) => (
                <motion.li
                  className={s.project_card}
                  key={idx}
                  onClick={() => setActiveProject(idx)}
                  layout
                >
                  <LayoutGroup>
                    <motion.header layout="position">
                      <Stack>
                        <AnimatePresence mode="popLayout">
                          {idx === activeProject && (
                            <motion.div
                              variants={basicVariant}
                              initial="initial"
                              animate="animate"
                              exit="exit"
                              layout
                            >
                              <Typography className={s.sub}>
                                Branding / Marketing
                              </Typography>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        <motion.div layout>
                          <Typography variant="h5" className={s.title}>
                            Experiential Marketing
                          </Typography>
                        </motion.div>
                      </Stack>

                      <motion.div layout >
                        <IconButton
                          className={clsx([
                            s.icon_btn,
                            idx === activeProject && s.active,
                          ])}
                        >
                          <div className={s.icon} />
                        </IconButton>
                      </motion.div>
                    </motion.header>

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
                            {p.description}
                          </Typography>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </LayoutGroup>
                </motion.li>
              ))}
          </motion.ul>

          <div className={s.thumbnail}>
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeProject}
                variants={{ ...basicVariant, animate: { opacity: 1 } }}
                initial="initial"
                animate="animate"
                exit="exit"
                // layout
              >
                <Image src={images[activeProject]} alt="project thumbnail" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
