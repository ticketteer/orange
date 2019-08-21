import React from 'react'
import { graphql } from 'gatsby'
import GoogleMapReact from 'google-map-react'

import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

import LogoImg from '../images/logo.png'

const defaultMapStyles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }]
const officeGeoCoords = { lat: 47.08025993250238, lng: 15.43860599398613 }
const officeGeoCenterCoords = { lat: officeGeoCoords.lat - 0.01, lng: officeGeoCoords.lng + 0.005}

export const pageQuery = graphql`
query contactPages($lang: String) {
  prismicDefaultPage(lang: {eq: $lang}, uid: {eq: "contact"}) {
    data {
      meta_desc
      meta_keywords
      title {
        text
      }
      content {
        text
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

const Marker = () => {
  const markerStyle = {
    borderRadius: '50%',
    height: 40,
    width: 40,
    backgroundImage: `url(${LogoImg})`,
    backgroundSize: 'cover',
    cursor: 'pointer',
    zIndex: 10,
  };

  return (
    <React.Fragment>
      <div style={markerStyle} />
    </React.Fragment>
  );
};


export default props => {
  const site = props.data.prismicLandingPage.data
  const gdpr = props.data.prismicGdpr.data
  const contactPage = props.data.prismicDefaultPage.data
  const t = props.pageContext.t

  return (
    <Layout {...props} site={site} gdpr={gdpr}>
      <section>
        <div className="container-fluid no-padding">

          <div className="col-lg-6 col-lg-12 col-sm-12 col-xs-12 no-padding">
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
                defaultCenter={officeGeoCenterCoords}
                defaultZoom={14}
                options={{
                  styles: defaultMapStyles
                }}
              >
                <Marker
                  lat={officeGeoCoords.lat}
                  lng={officeGeoCoords.lng}
                />
              </GoogleMapReact>
            </div>
          </div>

          <div className="col-lg-3 col-lg-offset-1 col-md-12 col-sm-12 pt100 pb100">
            <div className="breadcrumbs-wrap inline-items">
              <button className="btn btn--transparent btn--round">
                <svg className="utouch-icon utouch-icon-home-icon-silhouette"><use xlinkHref="#utouch-icon-home-icon-silhouette"></use></svg>
              </button>

              <ul className="breadcrumbs">
                <li className="breadcrumbs-item">
                  <a href="/">{t['home']}</a>
                  <svg className="utouch-icon utouch-icon-media-play-symbol"><use xlinkHref="#utouch-icon-media-play-symbol"></use></svg>
                </li>
                <li className="breadcrumbs-item active">
                  <span>{t['contact']}</span>
                  <svg className="utouch-icon utouch-icon-media-play-symbol"><use xlinkHref="#utouch-icon-media-play-symbol"></use></svg>
                </li>
              </ul>
            </div>

            <div
              dangerouslySetInnerHTML={{ __html: contactPage.content.text}}
            />

        </div>
      </div>
    </section>
    <Footer {...props} site={site} />
    <ContactForm {...props} site={site} />
  </Layout>
  )
}
