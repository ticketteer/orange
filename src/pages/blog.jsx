import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import BlogListing from '../components/BlogListing'
import StayInformed from '../components/StayInformed'

import BlogSidebar from '../components/BlogSidebar';

export const pageQuery = graphql`
query blogItems($lang: String) {
  allPrismicBlogPost(filter: {lang: {eq: $lang}}) {
    nodes {
      data {
        content {
          html
        }
        teaser_content {
          text
        }
        cover_image {
          url
        }
        title {
          text
        }
        timestamp
        author {
          document {
            data {
              full_name {
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

export default props => {
  const site = props.data.prismicLandingPage.data
  const blog = props.data.allPrismicBlogPost
  const gdpr = props.data.prismicGdpr.data
  return (
    <Layout {...props} site={site} gdpr={gdpr}>
      <StayInformed {...props} />
      <p>&nbsp;</p>

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <BlogListing {...props} blog={blog} />
          </div>
          <BlogSidebar {...props} blog={blog} site={site} />
        </div>
      </div>
      <Footer {...props} site={site} />
      <ContactForm {...props} site={site} />
    </Layout>
  )
}
