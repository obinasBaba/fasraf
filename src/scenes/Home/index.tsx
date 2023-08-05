import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import About from '@/scenes/Home/About';
import Service from '@/scenes/Home/Service';
import Values from 'src/scenes/Home/BusinessModel';
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
    hero: string;
    projects: ProjectsType[];
    services: { description: string; title: string }[];
    models: any[];
  };
};

const Home = ({ pageData }: Props) => {
  return (
    <div className={s.container}>
      <Hero text={pageData.hero} />
      <About />
      <Service services={pageData.services} />
      <Values models={pageData.models} />
      <Projects projects={pageData.projects} />
    </div>
  );
};

export default Home;
