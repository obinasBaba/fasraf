import React from 'react';
import s from './service.module.scss';
import { Stack, Typography } from '@mui/material';
import SVG from 'react-inlinesvg';
import HeaderIcon from './service-header-icon.svg';
import LottiIcon from "@/scenes/Home/Service/LottiIcon";
import { services } from "@/scenes/Home/Service/data";



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
          {services.map((services, idx) => (
            <li className={s.card} key={idx}>
              <div className={s.icon}>
                <LottiIcon name={services.title} icon={services.icon}  />
              </div>
              <Typography variant="h5">{services.title}</Typography>
              <Typography variant="body1">{services.body}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
