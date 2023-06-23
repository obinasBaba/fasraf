import React from 'react';
import dynamic from 'next/dynamic';

const Projects = dynamic(() => import('@/scenes/Projects'), {
  ssr: false,
});

const ProjectsPage = () => {
  return <Projects />;
};

export default ProjectsPage;
