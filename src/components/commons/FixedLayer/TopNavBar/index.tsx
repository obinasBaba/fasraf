import { Button, Slide, useScrollTrigger } from '@mui/material';
import React from 'react';
import s from './topnavbar.module.scss';
import Image from 'next/image';
import AppLogo from '@/public/logo.svg';

function HideOnScroll(props: any) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function TopNavBar() {
  return (
    <HideOnScroll>
      <nav className={s.container}>
        <div className={s.wrapper}>
          <div className={s.logo}>
            <Image src={AppLogo} alt="rahove logo" />
          </div>
          <Button variant="contained" size="large">
            Contact
          </Button>
        </div>
      </nav>
    </HideOnScroll>
  );
}
