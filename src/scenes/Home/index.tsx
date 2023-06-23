import React from 'react';
import s from './home.module.scss';
import Image from 'next/image';
import { Typography } from '@mui/material';
import Wheel from '@/components/wheel';
import BottomOverlay from '@/public/assets/hero/ui-elements.png';
import GradientOverlay from '@/public/assets/hero/bg-gradient.png';
import Swash from '@/public/assets/hero/swash.png';
import Shapes1 from '@/public/assets/hero/shaps-1.svg';
import Shapes2 from '@/public/assets/hero/shapes-2.svg';

const Home = () => {
  return (
    <div className={s.container}>
      <div className={s.bottom_overlay}>
        <Image src={BottomOverlay} alt="BottomOverlay" />
      </div>

      <div className={s.wrapper}>
        <div className={s.decor_shape_1}>
          <Image src={Shapes1} alt="shape decore" />
        </div>
        <div className={s.decor_shape_2}>
          <Image src={Shapes2} alt="shape decore" />
        </div>

        <Typography variant="h1" className={s.big_txt}>
          <span className={s.top}>
            <div className={s.swash}>
              <Image src={Swash} alt="swash decoration" />
            </div>
            <Wheel className={s.wheel} />
            Design-driven
          </span>{' '}
          <br /> <span className={s.mid}>development of your</span> <br />{' '}
          <span className={s.btom}>
            <Wheel fill="#FF9776" className={s.wheel} />
            web product
          </span>
        </Typography>
      </div>

      <div className={s.gradient_overlay}>
        <Image src={GradientOverlay} alt="BottomOverlay" />
      </div>
    </div>
  );
};

export default Home;
