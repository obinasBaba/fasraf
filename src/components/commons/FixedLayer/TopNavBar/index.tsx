import {
  Button,
  IconButton,
  Slide,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import React from 'react';
import s from './topnavbar.module.scss';
import Image from 'next/image';
import AppLogo from '@/public/logo.svg';
import Link from 'next/link';
import { Dehaze, NavigateBefore } from '@mui/icons-material';

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
          <Link href="/" className={s.logo}>
            <Image src={AppLogo} alt="rahove logo" />
            <div className={s.logo_txt}>
              <Typography variant="h5">Fasraf</Typography>
              <Typography noWrap>Business Solutions</Typography>
            </div>
          </Link>

          <div className={s.links}>
            <Link href="/">Projects</Link>
            <Link href="/">Service</Link>
            <Link href="/">Contact</Link>
            <Link href="/">About</Link>
          </div>

          <Link href="/contact" className={s.contact}>
            <Button variant="contained" size="large">
              Contact
            </Button>
          </Link>

          <IconButton className={s.nav_btn} size="large">
            <Dehaze fontSize='large' />
          </IconButton>
        </div>
      </nav>
    </HideOnScroll>
  );
}
