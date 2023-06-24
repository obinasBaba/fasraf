import React from 'react';
import s from './service.module.scss';
import { Stack, Typography } from '@mui/material';
import SVG from 'react-inlinesvg';
import HeaderIcon from './service-header-icon.svg';

const services = [
  {
    icon: '',
    title: 'Paid Business',
    body: `Lorem ipsum dolor sit amet consectetur.
    Odio volutpat urna aliquet bibendum. Aliquet potenti quis aliquam molestie.
    Sit placerat scelerisque ac
    cursus tincidunt amet consectetur a orci. Ut nisl id consectetur tincidunt.`,
  },
];

const Service = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <SVG src={HeaderIcon.src} cacheRequests />
          </div>

          <Stack>
            <Typography variant="h6" className={s.sub}>
              SERVICES
            </Typography>
            <Typography variant="h3" className={s.title}>
              WHAT WE OFFER
            </Typography>
          </Stack>
        </header>

        <ul>
          {new Array(6).fill(services[0]).map((ser) => (
            <li className={s.card}>
              <div className={s.icon}>
                <Typography>LOTI</Typography>
              </div>
              <Typography variant="h5">{ser.title}</Typography>
              <Typography variant="body1">{ser.body}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
