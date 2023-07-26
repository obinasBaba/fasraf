import Head from 'next/head';
import HomePage from '@/scenes/Home';
import { Partytown } from '@builder.io/partytown/react';
import React from 'react';
import { Fasraf } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';

// getStaticProps
export async function getStaticProps() {
  const projects = await Fasraf.get('/project-section', {
    params: {
      populate: ['project', 'project.thumbnail'],
    },
  }).then((res) => ({
    projects: res.data.data.attributes.project as any[],
  }));

  const services = await Fasraf.get('/service-section', {
    params: {
      populate: ['services'],
    },
  }).then((res) => ({
    services: res.data.data.attributes.services as any[],
  }));

  return {
    props: {
      pageData: {
        projects: projects.projects,
        services: services.services,
      },
      revalidate: 60 * 3,
    },
  };
}

export default function Home({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('pageData', pageData);

  return (
    <>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage pageData={pageData} />
    </>
  );
}
