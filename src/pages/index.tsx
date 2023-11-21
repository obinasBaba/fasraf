import HomePage from '@/scenes/Home';
import React from 'react';
import { Fasraf } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';

export async function getStaticProps() {
  const [projects, services, hero, aboutSection, footerSection, models] =
    await Promise.all([
      await Fasraf.get('/project-section', {
        params: {
          populate: ['project', 'project.achievements', 'project.thumbnail'],
        },
      }).then((res) => {
        // console.log('project res : ', res.data);

        return res.data.data.attributes.project as any[];
      }),

      await Fasraf.get('/service-section', {
        params: {
          populate: ['services'],
        },
      }).then((res) => res.data.data.attributes.services as any[]),

      await Fasraf.get('/front-section', {
        params: {
          populate: '*',
        },
      }).then((res) => res.data.data.attributes.description as string),

      await Fasraf.get('/about-section', {
        params: {
          populate: '*',
        },
      }).then((res) => ({
        description: res.data.data.attributes.header.description as string,
        message: {
          startup: res.data.data.attributes.message.startup as string,
          corporate: res.data.data.attributes.message.corporate as string,
        },
      })),

      await Fasraf.get('/social-link', {
        params: {
          populate: '*',
        },
      }).then((res) => ({
        socials: res.data.data.attributes.social as [
          { name: string; link: string },
        ],
        phone: res.data.data.attributes.phone as string,
        email: res.data.data.attributes.email as string,
      })),

      await Fasraf.get('/business-model', {
        params: {
          populate: '*',
        },
      }).then((res) => res.data.data.attributes.models as any[]),
    ]);

  /* const projects = await Fasraf.get('/project-section', {
     params: {
       populate: ['project', 'project.achievements', 'project.thumbnail'],
     },
   }).then((res) => {
     // console.log('project res : ', res.data);

     return res.data.data.attributes.project as any[];
   });
     console.log('projects -- ', projects);

   */

  /*const services = await Fasraf.get('/service-section', {
    params: {
      populate: ['services'],
    },
  }).then((res) => res.data.data.attributes.services as any[]);*/

  /* const hero = await Fasraf.get('/front-section', {
     params: {
       populate: '*',
     },
   }).then((res) => res.data.data.attributes.description as string); */

  /*const aboutSection = await Fasraf.get('/about-section', {
    params: {
      populate: '*',
    },
  }).then((res) => ({
    description: res.data.data.attributes.header.description as string,
    message: {
      startup: res.data.data.attributes.message.startup as string,
      corporate: res.data.data.attributes.message.corporate as string,
    },
  }));*/

  /* const footerSection = await Fasraf.get('/social-link', {
     params: {
       populate: '*',
     },
   }).then((res) => ({
     socials: res.data.data.attributes.social as [
       { name: string; link: string },
     ],
     phone: res.data.data.attributes.phone as string,
     email: res.data.data.attributes.email as string,
   }));
 */
  // console.log('footerSection', aboutSection);

  /* const models = await Fasraf.get('/business-model', {
    params: {
      populate: '*',
    },
  }).then((res) => res.data.data.attributes.models as any[]);
*/
  // console.log('business-model -- ', models);

  return {
    props: {
      pageData: {
        hero,
        services,
        projects: projects,
        models: models,
        aboutSection,
        footerSection,
      },
      // revalidate: 10,
    },
  };
}

export default function Home({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log('pageData', pageData);

  return (
    <>
      <HomePage pageData={pageData as any} />
    </>
  );
}
