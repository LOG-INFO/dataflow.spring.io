import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

const ImageSeo = ({ image }) => (
  <Helmet>
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:image' content={image} />
    <meta property='og:image' content={image} />
    {/* These are the image sizes of the SEO feature images */}
    <meta property='og:image:width' content='1000' />
    <meta property='og:image:height' content='523' />
  </Helmet>
)

ImageSeo.propTypes = {
  image: PropTypes.string.isRequired,
}

export default ImageSeo
