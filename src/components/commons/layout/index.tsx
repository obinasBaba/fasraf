import React, { useRef } from 'react';
import s from './layout.module.scss';
import { useRouter } from 'next/router';
import { motion, useAnimate } from 'framer-motion';
import FixedLayer from '@/components/commons/FixedLayer';
import Footer from '@/components/commons/Footer';
import { useAppContext } from '@/context/app';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

const Layout: React.FC<Props> = ({ children }) => {
  const container = useRef<HTMLDivElement | null>(null);
  const { asPath, pathname } = useRouter();

  const [scope, animate] = useAnimate();

  const {} = useAppContext();

  return (
    <>
      <FixedLayer />

      <motion.div className={s.root}>
        <main>{children}</main>
      </motion.div>
    </>
  );
};

export default Layout;
