import React from 'react';

import { Layout, SEO } from '../components';
import { Privacy } from '../containers';

const PrivacyPage = () => (
  <Layout hideSubscription={true}>
    <SEO title='Privacy Policy' />
    <Privacy />
  </Layout>
);

export default PrivacyPage;
