import ContactUs from '@/scenes/ContactUs';
import { Fasraf } from '@/lib/strapi';
import Footer from '@/components/commons/Footer';

async function ProjectsPage() {
  const contactData = await Fasraf.get('/social-link', {
    params: {
      populate: '*',
    },
  }).then((res) => ({
    socials: res.data.attributes.social as [{ name: string; link: string }],
    phone: res.data.attributes.phone as string,
    email: res.data.attributes.email as string,
  }));

  return (
    <>
      <ContactUs contactData={contactData} />;
      <Footer footerSection={contactData} />
    </>
  );
}

export default ProjectsPage;
