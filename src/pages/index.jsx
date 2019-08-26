import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import MainSlider from '../components/MainSlider'
import InfoBoxes from '../components/InfoBoxes'
import FeaturesSlider from '../components/FeaturesSlider'
import Video from '../components/Video'
import Clients from '../components/Clients'
// import ShortFaqs from '../components/ShortFaqs'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export const pageQuery = graphql`
query site($lang: String) {
  prismicLandingPage(lang: {eq: $lang}, uid: {eq: "frontpage"}) {
    data {
      meta_desc
      short_slogan
      contact_form_title
      contact_form_desc
      title
      pricing_title
      pricing_subtitle
      currency_symbol
      body {
        ... on PrismicLandingPageBodyPhoneSlider {
          slice_type
          id
          primary {
            super_title
            slider_title
            color_class
            description {
              html
            }
            image {
              alt
              url
            }
            cta_text
            cta_link {
              url
            }
          }
        }
      }
      pricing_footnote {
        html
      }
      pricing_plans {
        plan_title {
          text
        }
        plan_price_annually
        plan_price_monthly
        plan_cta_title
        img {
          url
        }
        plan_features {
          html
        }
      }
      big_sliders {
        big_slider_title {
          text
          html
        }
        big_slider_content {
          text
        }
        big_slider_trailing_typewriter
        big_slider_cta_1 {
          document {
            data {
              css_classes
              target
              title {
                text
              }
            }
          }
        }
        big_slider_type
        big_slider_image {
          url
          copyright
          alt
        }
      }
      info_boxes {
        info_box_link {
          url
        }
        info_box_title {
          text
        }
        info_box_content {
          html
        }
        info_box_image {
          url
        }
      }
      clients {
        name
        link {
          url
        }
        image {
          url
          copyright
          alt
        }
      }
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

export default props => {
  const site = props.data.prismicLandingPage.data
  const gdpr = props.data.prismicGdpr.data
  return (
    <Layout {...props} site={site} gdpr={gdpr}>
      <MainSlider {...props} site={site} />
      <InfoBoxes {...props} site={site} />
      <FeaturesSlider {...props} site={site} />
      <Video {...props} site={site} />
      <Clients {...props} site={site} />
      <Pricing {...props} site={site} />
      <Footer {...props} site={site} />
      <ContactForm {...props} site={site} />
    </Layout>
  )
}
