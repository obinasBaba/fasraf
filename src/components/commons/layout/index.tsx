import React, { useEffect, useRef } from 'react';
import s from './layout.module.scss';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { motion, useAnimate } from 'framer-motion';
import FixedLayer from "@/components/commons/FixedLayer";

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { asPath, pathname } = useRouter();

  const [scope, animate] = useAnimate();

  // let homeScaleX = 1;
  // let projectScaleX = 1;

  useEffect(() => {
    animate(
      '.home-nav',
      {
        scaleX: 0,
        transformOrigin: 'left',
      },
      {
        duration: 0,
      },
    );
  }, []);

  return (
    <>
      <FixedLayer />

      <motion.div className={s.root}>
        <aside ref={scope}>
          <Link href={'/contact'}>
            <div
              className={clsx([s.contact_nav, s.nav, 'contact-nav'])}
              onClick={() => null}
            >
              <Typography variant="h1">Contact</Typography>
            </div>
          </Link>

          <Link href={'/projects'}>
            <div
              className={clsx([s.project_nav, s.nav, 'project-nav'])}
              onClick={() => {
                console.log('path: ', pathname);
                // if (pathname === '/projects') return;

                const div = document.body.querySelector(
                  '.contact-nav',
                ) as HTMLDivElement;

                const { offsetWidth } = div;
                const homeScaleAmount = window.innerWidth / offsetWidth;

                animate([
                  [
                    '.home-nav',
                    {
                      scaleX: homeScaleAmount - 2,
                      transformOrigin: 'left',
                    },
                  ],
                  'home-exit',
                  [
                    '.home-nav',
                    {
                      scaleX: 1,
                      x: window.innerWidth - offsetWidth * 3,
                    },
                    {
                      at: 'home-exit',
                    },
                  ],
                  [
                    '.project-nav',
                    {
                      scaleX: homeScaleAmount - 2,
                      transformOrigin: 'left',
                    },
                    {
                      at: 'home-exit',
                    },
                  ],
                  [
                    '.project-nav',
                    {
                      scaleX: [null, 0],
                      x: [
                        null,
                        window.innerWidth - offsetWidth * 2, // window.innerWidth - offsetWidth * 3,
                      ],
                    },
                  ],
                ]);
              }}
            >
              <Typography variant="h1">Projects</Typography>
            </div>
          </Link>

          <Link href={'/'}>
            <div
              className={clsx([s.home_nav, s.nav, 'home-nav'])}
              onClick={() => {
                console.log('path: ', pathname);
                if (pathname === '/') return;

                const div = document.body.querySelector(
                  '.contact-nav',
                ) as HTMLDivElement;

                const { offsetWidth } = div;
                const projectScaleAmount = window.innerWidth / offsetWidth;

                animate([
                  [
                    '.project-nav',
                    {
                      scaleX: projectScaleAmount - 1,
                      transformOrigin: 'right',
                    },
                  ],
                  'project-exit',
                  [
                    '.project-nav',
                    {
                      scaleX: 1,
                      x: 0,
                    },
                    {
                      at: 'project-exit',
                    },
                  ],
                  [
                    '.home-nav',
                    {
                      scaleX: projectScaleAmount - 2,
                      transformOrigin: 'right',
                    },
                    {
                      at: 'project-exit',
                    },
                  ], //delay here
                  [
                    '.home-nav',
                    {
                      scaleX: 0,
                      x: 0 - offsetWidth, // transformOrigin: 'right',
                    },
                  ],
                ]);
              }}
            >
              <Typography variant="h1">Home</Typography>
            </div>
          </Link>
        </aside>
        <main>{children}</main>
      </motion.div>
    </>
  );
};

export default Layout;
