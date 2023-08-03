import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import About from '@/scenes/Home/About';
import Service from '@/scenes/Home/Service';
import Values from 'src/scenes/Home/Values';
import Projects from 'src/scenes/Home/Projects';

export type ProjectsType = {
  title: string;
  date: string;
  thumbnail: any;
  achievements: [
    {
      id: number;
      description: string;
    },
  ];
};

type Props = {
  pageData: {
    projects: ProjectsType[];
    services: { description: string; title: string }[];
  };
};

const Home = ({ pageData }: Props) => {
  return (
    <div className={s.container}>
      <Hero />
      <About />
      <Service services={pageData.services} />
      <Values  />
      <Projects projects={pageData.projects} />
    </div>
  );
};

export default Home;
