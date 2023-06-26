import Head from 'next/head';
import HomePage from '@/scenes/Home';
import { Partytown } from '@builder.io/partytown/react';
import React from 'react';

export default function Home() {
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

      <HomePage />
    </>
  );
}
