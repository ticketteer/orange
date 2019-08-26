import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Features2ColSkewSection from '../components/Features2ColSkewSection'
import FeaturesImgTextSection from '../components/FeaturesImgTextSection'
import FeaturesSkewRow from '../components/FeaturesSkewRow'

export const query = graphql`
query featuresPage($lang: String, $uid: String) {
  prismicFeatures(lang: {eq: $lang}, uid: {eq: $uid}) {
    data {
      image {
        url
      }
      title {
        text
      }
      subtitle {
        text
      }
      short_desc {
        text
      }
      bg_color
      body {
        ... on PrismicFeaturesBody2Cols {
          id
          items {
            section_content {
              html
            }
            section_title {
              text
            }
          }
        }
        ... on PrismicFeaturesBodySection {
          id
          primary {
            image_position
            section_content {
              html
            }
            section_image {
              url
            }
            section_title {
              text
            }
          }
        }
      }
    }
    uid
    id
    lang
  }
  prismicLandingPage(lang: {eq: $lang}, uid: {eq: "frontpage"}) {
    data {
      meta_desc
      short_slogan
      title
      contact_form_title
      contact_form_desc
    }
  }
  prismicGdpr(lang: {eq: $lang}) {
    data {
      consent_short_text {
        html
      }
    }
  }
}
`

const dispatchSection = (section, index) => {
  if (section.__typename === 'PrismicFeaturesBody2Cols')
    return <Features2ColSkewSection section={section} key={`section-${index}`} />
  if (section.__typename === 'PrismicFeaturesBodySection')
    return <FeaturesImgTextSection section={section} key={`section-${index}`} />
}

export default ({ data, ...props }) => {
  const page = data.prismicFeatures.data
  const site = data.prismicLandingPage.data
  const gdpr = data.prismicGdpr.data
  return (
    <Layout {...props} site={site} page={page} gdpr={gdpr}>
      <Helmet>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={page.title.text} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content={page.title.text} />
      </Helmet>
      <FeaturesSkewRow page={page} />
      {page.body.map((section, index) =>
        dispatchSection(section, index)
      )}
      <Footer {...props} site={site} />
      <ContactForm {...props} site={site} />
    </Layout>
  )
}
