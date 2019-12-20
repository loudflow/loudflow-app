import React from 'react';

import { Layout, SEO } from '../components';
import { Agents } from '../containers';

const WhoPage = () => (
  <Layout>
    <SEO title='Agents' />
    <Agents />
  </Layout>
);

export default WhoPage;
