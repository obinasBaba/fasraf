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
} from '@mui/icons-material';
import Link from 'next/link';
import WP from './img.png';

const socials = [Twitter, Facebook, Instagram, LinkedIn];

const WhatsApp = () => (
  <svg
    className="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"
    focusable="false"
    viewBox="0 0 24 24"
  >
    <path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"></path>
  </svg>
);

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
    ['whatsapp', { icon: <Image src={WP} alt={'whatsApp'} /> }],
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
