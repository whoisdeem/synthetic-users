import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>ResearchRunner.ai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to ResearchRunner.ai</h1>
        <p>Understand your audience better with AI personas.</p>
        <Link href="/talkToUsers">
          <a>Start Talking to Users</a>
        </Link>
      </main>
    </div>
  );
};

export default Home;