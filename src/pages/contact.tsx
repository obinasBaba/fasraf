import React from 'react';
import ContactUs from '@/scenes/ContactUs';
import { Fasraf } from '@/lib/strapi';
import { InferGetStaticPropsType } from 'next';
import Footer from '@/components/commons/Footer';

export async function getStaticProps() {
  const contactData = await Fasraf.get('/social-link', {
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

  return {
    props: {
      pageData: {
        contactData,
      }, // revalidate: 60,
      revalidate: 10,
    },
  };
}

const ProjectsPage = ({
  pageData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <ContactUs contactData={pageData.contactData} />;
      <Footer footerSection={pageData.contactData} />
    </>
  );
};

export default ProjectsPage;
