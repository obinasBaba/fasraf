import React from 'react';
import s from './about.module.scss';
import SVG from 'react-inlinesvg';
import { Chip, Typography } from '@mui/material';
import FasrafBgEffect from './fasraf-bg-effect.svg';
import StartUpIcon from './startup-svg.svg';
import CorporateIcon from './corporate-svg.svg';
import Marquee from 'react-fast-marquee';

const message = [
  {
    icon: StartUpIcon,
    title: 'For Start-Ups',
    message: `We are a full-service digital agency that builds
     immersive user experience. Our team creates an
     exceptional visualization and thought-out functionality.
    We believe, our clients deserve to be remarkable in their business.`,
  },
  {
    icon: CorporateIcon,
    title: 'For Corporates-Ups',
    message: `We are a full-service digital agency that builds
     immersive user experience. Our team creates an
     exceptional visualization and thought-out functionality.
    We believe, our clients deserve to be remarkable in their business.`,
  },
];

const About = () => {
  return (
    <div className={s.container}>
      <div className={s.bg}>
        <SVG
          src={FasrafBgEffect.src}
          // width={1128}
          // height="auto"
          title="React"
          cacheRequests={false}
          loader={<h1>this is loading</h1>}
        />
      </div>

      <div className={s.wrapper}>
        <div className={s.txt}>
          <Typography variant="h3">
            Driving your business forward with unique Ideas
          </Typography>

          <div className={s.divider}>
            <span />
          </div>

          <Typography className={s.desc}>
            Fasraf business solutions is a business solution provider and
            management consultancy firm based in Ethiopia. The company was
            founded with the aim of providing high-quality business solution and
            consulting services to businesses and start-ups in the region to
            help them achieve their goals and objectives.
          </Typography>
        </div>

        <div className={s.msgs}>
          {message.map((msg) => (
            <div key={msg.icon.src} className={s.msg}>
              <SVG
                src={msg.icon.src}
                title="React"
                cacheRequests={false}
                loader={<h1>this is loading</h1>}
              />

              <Typography variant="h4" className={s.title}>
                {msg.title}
              </Typography>
              <Typography variant="body1">{msg.message}</Typography>
            </div>
          ))}
        </div>

        <Marquee autoFill gradient className={s.marquee}>
          <Chip
            className={s.marquee_chip}
            variant="outlined"
            label={<Typography>Freelance network</Typography>}
          />

          <Chip
            className={s.marquee_chip}
            variant="outlined"
            label={<Typography>Innovative Approach</Typography>}
          />

          <Chip
            className={s.marquee_chip}
            variant="outlined"
            label={<Typography>Unique Idea</Typography>}
          />

          <Chip
            className={s.marquee_chip}
            variant="outlined"
            label={<Typography>Freelance network</Typography>}
          />

          <Chip
            className={s.marquee_chip}
            variant="outlined"
            label={<Typography>Innovative Approach</Typography>}
          />
        </Marquee>
      </div>
    </div>
  );
};

export default About;
