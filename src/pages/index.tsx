import HomePage from '@/scenes/Home';
import React from 'react';
import { Fasraf } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';

// getStaticProps
export async function getStaticProps() {
  const projects = await Fasraf.get('/project-section', {
    params: {
      populate: ['project', 'project.achievements', 'project.thumbnail'],
    },
  }).then((res) => {
    // console.log('project res : ', res.data);

    return res.data.data.attributes.project as any[];
  });

  // console.log('projects -- ', projects.projects);

  const services = await Fasraf.get('/service-section', {
    params: {
      populate: ['services'],
    },
  }).then((res) => ({
    services: res.data.data.attributes.services as any[],
  }));

  const hero = await Fasraf.get('/front-section', {
    params: {
      populate: '*',
    },
  }).then((res) => res.data.data.attributes.description as string);

  console.log('hero text : ', hero);

  const models = await Fasraf.get('/business-model', {
    params: {
      populate: '*',
    },
  }).then((res) => res.data.data.attributes.models as any[]);

  // console.log('business-model -- ', models);

  return {
    props: {
      pageData: {
        hero,
        projects: projects,
        services: services,
        models: models,
      },
      revalidate: 60,
    },
  };
}

export default function Home({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log('pageData', pageData);

  return (
    <>
      <HomePage pageData={pageData as any} />
    </>
  );
}
