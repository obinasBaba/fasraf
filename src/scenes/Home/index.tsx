import React from 'react';
import s from './home.module.scss';
import Hero from '@/scenes/Home/Hero';
import About from '@/scenes/Home/About';
import Service from '@/scenes/Home/Service';
import Values from 'src/scenes/Home/BusinessModel';
import Projects from 'src/scenes/Home/Projects';
import Footer from '@/components/commons/Footer';

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
    aboutSection: {
      description: string;
      message: { startup: string; corporate: string };
    };
    footerSection: {
      socials: [{ name: string; link: string }];
      phone: string;
      email: string;
    };
  };
};

const Home = ({ pageData }: Props) => {
  return (
    <div className={s.container}>
      <Hero text={pageData.hero} />
      <About aboutSection={pageData.aboutSection} />
      <Service services={pageData.services} />
      <Values models={pageData.models} />
      <Projects projects={pageData.projects} />
      <Footer footerSection={pageData.footerSection} />
    </div>
  );
};

export default Home;
