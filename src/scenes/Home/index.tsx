import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import About from '@/scenes/Home/About';
import Service from '@/scenes/Home/Service';
import Projects from '@/scenes/Home/Projects';
import Testimonials from '@/scenes/Home/Testimonials';

const Home = () => {
  return (
    <div className={s.container}>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Testimonials />
    </div>
  );
};

export default Home;
