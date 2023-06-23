import React, { useEffect } from 'react';
import s from './projects.module.scss';
import { Observer } from 'gsap/Observer';
import gsap from 'gsap';

gsap.registerPlugin(Observer);

const Projects = () => {
  useEffect(() => {
    Observer.create({
      type: 'wheel,touch,pointer',
      wheelSpeed: 111,
      onDown: (arg) => {
        console.log('onDown: ', arg);
      },
      onUp: (arg) => {
        console.log('onUp: ', arg);
      },
      tolerance: 10,
      preventDefault: true,
    });
  }, []);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>aksdjf</div>
    </div>
  );
};

export default Projects;
