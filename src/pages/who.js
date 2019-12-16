import React from 'react';

import { Layout, SEO } from '../components';
import { Who } from '../containers';

const WhoPage = () => (
  <Layout>
    <SEO title='Who' />
    <Who />
  </Layout>
);

export default WhoPage;
