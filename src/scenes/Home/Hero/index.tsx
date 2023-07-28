import React from 'react';
import s from './hero.module.scss';
import Image from 'next/image';
import { Button, Typography } from '@mui/material';
import Swash from '@/public/assets/hero/swash.png';
import Shapes1 from '@/public/assets/hero/shaps-1.svg';
import Shapes2 from '@/public/assets/hero/shapes-2.svg';
import FasrafTriangle from '@/public/assets/hero/fasraf-logo.png';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className={s.container}>
      <div className={s.decor_shape_1}>
        <Image src={Shapes1} alt="shape decore" />
      </div>
      <div className={s.decor_shape_2}>
        <Image src={Shapes2} alt="shape decore" />
      </div>

      <div className={s.wrapper}>
        <div className={s.typo}>
          <Typography variant="h2" className={s.big_txt}>
            <span className={s.top}>Build the perfect</span>
            <br />
            <span className={s.mid}>
              <div className={s.swash}>
                <Image src={Swash} alt="swash decoration" />
              </div>
              solution for your
            </span>
            <br />
            <span className={s.btom}>Business</span>
          </Typography>
          <Typography variant="body1" className={s.desc}>
            We understand our customer’s needs and hence our work approach &
            systems will tend to know many things about the project result.
          </Typography>
          <div className={s.cta}>
            <Link href="/contact">
              <Button variant="contained" size="large">
                Contact
              </Button>
            </Link>

            <Link href="#projects">
              <Button variant="outlined" size="large">
                Projects
              </Button>
            </Link>


          </div>
        </div>

        <div className={s.fasraf_triangle}>
          <Image src={FasrafTriangle} alt="fasraf triangle" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
