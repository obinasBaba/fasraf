'use client';

import React from 'react';
import s from './layout.module.scss';
import { motion } from 'framer-motion';
import FixedLayer from '@/components/commons/FixedLayer';

interface Props {
  children: React.ReactNode;
  pageProps: Record<string, any>;
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <FixedLayer />

      <motion.div className={s.root}>
        <main>{children}</main>
      </motion.div>
    </>
  );
}
