import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/layout';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Layout>
    <Head>
    <title>Projects</title>  
    </Head>
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link href="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
    </Layout>
);

export default Projects;
