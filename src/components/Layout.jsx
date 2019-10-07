import React from 'react'
import CookieConsent from "react-cookie-consent"
import '../sass/theme-styles.scss'
import Header from './Header'
// import { useStaticQuery, graphql } from 'gatsby'
import SvgIcons from './SvgIcons'


export default ({ children, gdpr, ...props }) => {
  const loadTrackers = () => {
    console.log('loading trackers');
    window.loadIntercom();
  }
  return (
    <div>
      <Header {...props} />
      <div className="header-spacer"></div>
      <div className="content-wrapper">
        {children}
      </div>
      <SvgIcons />
      {gdpr
        ? <CookieConsent
            enableDeclineButton
            buttonText="Einverstanden"
            declineButtonText="Lieber nicht"
            buttonClasses="cc-btn"
            declineButtonClasses="cc-decline"
            onAccept={loadTrackers}
          >
            <div dangerouslySetInnerHTML={{ __html: gdpr.consent_short_text.html }} />
          </CookieConsent>
        : null
      }
    </div>
  )
}
