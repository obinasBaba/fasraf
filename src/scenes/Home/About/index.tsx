import React from 'react';
import s from './about.module.scss';
import SVG from 'react-inlinesvg';
import { Chip, Typography } from '@mui/material';
import FasrafBgEffect from './fasraf-bg-effect.svg';
import StartUpIcon from './msme.png';
import CorporateIcon from './img.png';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

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
    title: 'For Corporates',
    message: `We are a full-service digital agency that builds
     immersive user experience. Our team creates an
     exceptional visualization and thought-out functionality.
    We believe, our clients deserve to be remarkable in their business.`,
  },
];

const fallbackDesc = `Fasraf business solutions is a
business solution provider and management consultancy firm
based in Ethiopia. The company was founded with the aim of providing
 high-quality business solution and consulting
 services to businesses and start-ups in the region to help them achieve their goals and objectives.`;

type Props = {
  aboutSection: {
    description: string;
    message: { startup: string; corporate: string };
  };
};

const About = ({ aboutSection }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.bg}>
        <SVG
          src={FasrafBgEffect.src}
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
            {aboutSection.description || fallbackDesc}
          </Typography>
        </div>

        <div className={s.msgs}>
          {message.map((message) => (
            <div key={message.icon.src} className={s.msg}>
              <div className={s.icon}>
                <Image src={message.icon} alt="icon" />
              </div>

              <Typography variant="h4" className={s.title}>
                {message.title}
              </Typography>
              <Typography variant="body1">
                {message.title === 'For Start-Ups'
                  ? aboutSection.message.startup
                  : aboutSection.message.corporate}
              </Typography>
            </div>
          ))}
        </div>

        <Marquee autoFill gradient className={s.marquee}>
          {[
            'Freelance network',
            'Innovative Approach',
            'Unique Idea',
            'Long-term Relationship',
            'Industry Best Practice',
            'Data-driven Solutions',
          ].map((item) => (
            <Chip
              key={item}
              className={s.marquee_chip}
              color="primary"
              variant="outlined"
              label={<Typography> {item} </Typography>}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default About;
