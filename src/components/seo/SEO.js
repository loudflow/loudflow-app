import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSiteMetadata from './useSiteMetadata';

const SEO = ({ description, lang, meta, title }) => {
    const siteMetadata = useSiteMetadata();
    const metaDescription = description || siteMetadata.description;
    return (
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
        ].concat(meta)}
      />
    );
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.any),
  title: PropTypes.string.isRequired
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: []
};

export default SEO;
