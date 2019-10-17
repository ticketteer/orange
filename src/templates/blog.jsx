import { graphql } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import BlogBreadcrumb from '../components/BlogBreadcrumb'
import BlogPage from '../components/BlogPage'
import BlogSidebar from '../components/BlogSidebar'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import StayInformed from '../components/StayInformed'

export const query = graphql`
query blogEntry($lang: String, $uid: String) {
  prismicBlogPost(uid: { eq: $uid }, lang: {eq: $lang}) {
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
            picture {
              url
            }
            short_description {
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

export default ({ data, ...props }) => {
  const blog = data.prismicBlogPost.data
  const site = data.prismicLandingPage.data
  const gdpr = data.prismicGdpr.data
  console.log(props.location)
  return (
    <Layout {...props} site={site} gdpr={gdpr}>
      <Helmet>
        <meta property="og:locale" content={props.pageContext.lang} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Ticketteer" />
        <meta property="og:title" content={blog.title.text} />
        <meta property="og:description" content={blog.teaser_content.text} />
        <meta property="og:url" content={props.location.href} />
        <meta property="og:image" content={blog.cover_image.url} />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:description" content={blog.teaser_content.text} />
        <meta property="twitter:title" content={blog.title.text} />
        <meta property="twitter:image" content={blog.cover_image.url} />
      </Helmet>
      <StayInformed {...props} />
      <BlogBreadcrumb {...props} site={site} blog={blog} />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
            <BlogPage {...props} blog={blog} />
          </div>
          <BlogSidebar {...props} blog={blog} />
        </div>
      </div>
      <Footer {...props} site={site} />
      <ContactForm {...props} site={site} />
    </Layout>
  )
}
