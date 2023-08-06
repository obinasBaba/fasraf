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
  Mail,
  Phonelink,
  Twitter,
  WhatsApp,
} from '@mui/icons-material';
import Link from 'next/link';

const socials = [Twitter, Facebook, WhatsApp, Instagram, LinkedIn];

type Props = {
  footerSection: {
    socials: [{ name: string; link: string }];
    phone: string;
    email: string;
  };
};

const Footer = ({ footerSection }: Props) => {
  console.log('footer section ---');

  const socialIcons = new Map([
    ['twitter', { icon: <Twitter fontSize="large" /> }],
    [
      'facebook',
      {
        icon: <Facebook fontSize="large" />,
      },
    ],
    ['whatsapp', { icon: <WhatsApp fontSize="large" /> }],
    [
      'instagram',
      {
        icon: <Instagram fontSize="large" />,
      },
    ],
    ['linkedin', { icon: <LinkedIn fontSize="large" /> }],
  ]);

  return (
    <div className={s.container}>
      <div className={s.banner}>
        <Typography variant="h4" className={s.cta}>
          Contact us today to get <br />
          your unique consultation
        </Typography>

        <Link href="/contact">
          <Button size="large" variant="contained">
            Let&apos;s Talk
          </Button>
        </Link>
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
              Customer Centric Approach !
            </Typography>

            <div className={s.socials}>
              {footerSection.socials.map((social, idx) => (
                <Link
                  key={idx}
                  href={social.link}
                  passHref
                  target="_blank"
                  as={social.link}
                >
                  <IconButton color="primary">
                    {socialIcons.get(social.name)?.icon}
                  </IconButton>
                </Link>
              ))}
            </div>
          </Stack>
        </div>

        <div className={s.contact}>
          <Image src={Phone} alt="phone" />
          <Stack gap={2}>
            <Typography variant="h4">Get In Touch</Typography>
            <Link
              href={`tel:${footerSection?.phone || '+251 912 611 477'}`}
              style={{ width: '100%' }}
            >
              <Button
                startIcon={<Phonelink />}
                variant="contained"
                size="large"
                fullWidth
              >
                {footerSection?.phone || '+251 912 611 477'}
              </Button>
            </Link>

            <Link
              href={`mailto:${footerSection?.email || 'giulianofcb@gmail.com'}`}
              style={{ width: '100%' }}
            >
              <Button
                startIcon={<Mail />}
                variant="outlined"
                className={s.email}
                fullWidth
              >
                {footerSection?.email || 'giulianofcb@gmail.com'}
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
