import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import moment from 'moment'

import Layout from '../components/Layout'

export const pageQuery = graphql`
query site2($lang: String) {
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
      <Helmet>
        <meta property="og:type" content="event" />
        <meta property="og:event:start_time" content={moment().add(2, 'days').format()} />
        <meta property="og:event:end_time" content={moment().add(2, 'days').endOf('day').format()} />
      </Helmet>
      <h1>here</h1>
    </Layout>
  )
}
