import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import PageBreadcrumb from '../components/PageBreadcrumb'
import StayInformed from '../components/StayInformed'

export const query = graphql`
query pageEntry($lang: String, $uid: String) {
  prismicDefaultPage(lang: {eq: $lang}, uid: {eq: $uid}) {
    data {
      meta_desc
      meta_keywords
      title {
        text
      }
      content {
        html
      }
      image {
        url
      }
    }
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

export default ({ data, ...props }) => {
  const page = data.prismicDefaultPage.data
  const site = data.prismicLandingPage.data
  const gdpr = data.prismicGdpr.data
  return (
    <Layout {...props} site={site} gdpr={gdpr}>
      <Helmet>
        <meta property="og:locale" content={props.pageContext.lang} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Ticketteer" />
        <meta property="og:title" content={page.title.text} />
        <meta property="og:description" content={page.teaser_content} />
        <meta property="og:url" content={props.location.href} />
        <meta property="og:image" content={page.image.url} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:description" content={page.teaser_content} />
        <meta property="twitter:title" content={page.title.text} />
        <meta property="twitter:image" content={page.image.url} />
      </Helmet>
      <StayInformed {...props} />
      <PageBreadcrumb {...props} site={site} page={page} />

      <div className="container">

        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-12 no-padding">
              <h4 style={{ marginBottom: '25px' }}>{page.title.text}</h4>
            </div>
          </div>
        </div>
        <div
          className="post__text"
          dangerouslySetInnerHTML={{ __html: page.content.html }}
        />
      </div>
      <Footer {...props} site={site} />
      <ContactForm {...props} site={site} />
    </Layout>
  )
}
