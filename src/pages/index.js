import React from 'react';

import { Layout, SEO } from '../components';
import { What } from '../containers';

const IndexPage = () => (
  <Layout>
    <SEO title='What' />
    <What />
  </Layout>
);

export default IndexPage;
