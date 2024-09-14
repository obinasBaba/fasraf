import React from 'react';
import s from './service.module.scss';
import { Stack, Typography } from '@mui/material';
import SVG from 'react-inlinesvg';
import HeaderIcon from './service-header-icon.svg';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { services as sData } from '@/scenes/Home/Service/data';

// import LottiIcon only form client side

const LottiIcon = dynamic(() => import('@/scenes/Home/Service/LottiIcon'), {
  ssr: false,
});

type Props = {
  services: any[];
};

const Service = ({ services }: Props) => {
  console.log('services : ', services);

  return (
    <section id="services" className={s.container}>
      <div className={s.wrapper}>
        <header>
          <div className={s.icon}>
            <SVG src={HeaderIcon.src} cacheRequests />
          </div>

          <Stack>
            <Typography className={s.sub}>SERVICES</Typography>
            <Typography variant="h3" className={s.title}>
              WHAT WE OFFER
            </Typography>
          </Stack>
        </header>

        <ul>
          {services.map((services, idx) => (
            <li className={s.card} key={idx}>
              <div
                className={clsx([
                  s.icon,
                  services.title.toLowerCase().includes('risk') && s.risk,
                ])}
              >
                <LottiIcon name={services.title} icon={sData[idx].icon} />
              </div>
              <Typography variant="h5" className={s.title}>
                {services.title}
              </Typography>
              <Typography variant="body1">{services.description}</Typography>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Service;
