import React from 'react';

import { NoHeaderLayout, SEO } from '../components';
import { Welcome } from '../containers';

const IndexPage = () => (
  <NoHeaderLayout>
    <SEO title='Welcome' />
    <Welcome />
  </NoHeaderLayout>
);

export default IndexPage;
