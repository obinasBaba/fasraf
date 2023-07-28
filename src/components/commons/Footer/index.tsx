import React from 'react';
import s from './footer.module.scss';
import Image from 'next/image';
import { Button, IconButton, Stack, Typography } from '@mui/material';
import AppLogo from '@/public/logo.svg';
import Grid from './grid.png';
import Phone from './phone.png';
import Pages from './pages.png';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';

const socials = [Twitter, Facebook, WhatsApp, Instagram, LinkedIn];

const Footer = () => {
  return (
    <div className={s.container}>
      <div className={s.banner}>
        <Typography variant="h4" className={s.cta}>
          Contact us today to get <br />
          your unique consultation
        </Typography>

        <Button size="large" variant="contained">
          Let&apos;s Talk
        </Button>
      </div>

      <div className={s.wrapper}>
        <div className={s.grid}>
          <Image src={Grid} alt="grid decoration" />
        </div>

        <div className={s.social}>
          <Image src={AppLogo} alt="rahove logo" />
          <Stack gap={1} alignItems="flex-start">
            <Stack>
              <Typography variant="h4">Fasraf</Typography>
              <Typography noWrap color="gray" variant="subtitle1">
                Sustainable Value
              </Typography>
            </Stack>

            <Typography className={s.desc}>
              Lorem ipsum dolor sit amet consectetur. Tortor in egestas risus
            </Typography>

            <div className={s.socials}>
              {socials.map((Icon, idx) => (
                <IconButton key={idx}>
                  <Icon fontSize="large" />
                </IconButton>
              ))}
            </div>
          </Stack>
        </div>

        <div className={s.contact}>
          <Image src={Phone} alt="phone" />
          <Stack gap={2} alignItems="center">
            <Typography variant="h4">Get In Touch</Typography>
            <Link href="tel:+251 912 611 477">
              <Button variant="contained" size="large">
                +251 912 611 477
              </Button>
            </Link>

            <Link href="mailto:giulianofcb@gmail.com">
              <Button variant="text" className={s.email}>
                giulianofcb@gmail.com
              </Button>
            </Link>
          </Stack>
        </div>

        <div className={s.pages}>
          <Image src={Pages} alt="pages" />
          <Stack component="header" gap={1}>
            <Typography gutterBottom variant="h4">
              Pages
            </Typography>
            <Link href="/">
              <Typography>Home</Typography>
            </Link>

            <Link href="/contact">
              <Typography>Contact</Typography>
            </Link>
            <Link href="#services">
              <Typography>Service</Typography>
            </Link>
            <Link href="#projects">
              <Typography>Projects</Typography>
            </Link>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Footer;
