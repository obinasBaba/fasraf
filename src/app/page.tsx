import React from 'react';
import { Fasraf } from '@/lib/strapi';
import HomePageScene from '@/scenes/Home';
import { metaObject } from '@/lib/site.config';

export const metadata = {
  ...metaObject('Home . Fasraf ', {}, 'Fasraf . Business . Solution'),
};

async function HomePage() {
  const [projects, services, hero, aboutSection, footerSection, models] =
    await Promise.all([
      await Fasraf.get('/project-section', {
        params: {
          populate: ['project', 'project.achievements', 'project.thumbnail'],
        },
      }).then((res) => {
        console.log('project res : ', res.data);

        return res.data.attributes.project as any[];
      }),

      await Fasraf.get('/service-section', {
        params: {
          populate: ['services'],
        },
      }).then((res) => res.data.attributes.services as any[]),

      await Fasraf.get('/front-section', {
        params: {
          populate: '*',
        },
      }).then((res) => res.data.attributes.description as string),

      await Fasraf.get('/about-section', {
        params: {
          populate: '*',
        },
      }).then((res) => ({
        description: res.data.attributes.header.description as string,
        message: {
          startup: res.data.attributes.message.startup as string,
          corporate: res.data.attributes.message.corporate as string,
        },
      })),

      await Fasraf.get('/social-link', {
        params: {
          populate: '*',
        },
      }).then((res) => ({
        socials: res.data.attributes.social as [{ name: string; link: string }],
        phone: res.data.attributes.phone as string,
        email: res.data.attributes.email as string,
      })),

      await Fasraf.get('/business-model', {
        params: {
          populate: '*',
        },
      }).then((res) => res.data.attributes.models as any[]),
    ]);

  return (
    <HomePageScene
      pageData={{
        hero,
        services,
        projects: projects,
        models: models,
        aboutSection,
        footerSection,
      }}
    />
  );
}

export default HomePage;
