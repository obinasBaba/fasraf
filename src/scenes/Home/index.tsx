import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import About from '@/scenes/Home/About';
import Service from '@/scenes/Home/Service';
import Projects from '@/scenes/Home/Projects';
import Testimonials from '@/scenes/Home/Testimonials';

type Props = {
  pageData: { projects: any[]; services: any[] };
};

const Home = ({ pageData }: Props) => {
  return (
    <div className={s.container}>
      <Hero />
      <About />
      <Service services={pageData.services} />
      <Projects projects={pageData.projects} />
      <Testimonials />
    </div>
  );
};

export default Home;
