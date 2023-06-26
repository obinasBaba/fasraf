import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import About from '@/scenes/Home/About';
import Service from '@/scenes/Home/Service';
import Projects from '@/scenes/Home/Projects';

const Home = () => {
  return (
    <div className={s.container}>
      <Hero />
      <About />
      <Service />
      <Projects />
    </div>
  );
};

export default Home;
