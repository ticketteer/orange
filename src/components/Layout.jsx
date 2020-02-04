import React from 'react'
import CookieConsent from "react-cookie-consent"
import '../sass/theme-styles.scss'
import Header from './Header'
// import { useStaticQuery, graphql } from 'gatsby'
import SvgIcons from './SvgIcons'
import SignupEmail from '../components/SignupEmail'


export default ({ children, gdpr, ...props }) => {
  const loadTrackers = () => {
    window.loadIntercom();
  }
  return (
    <div>
      <SignupEmail {...props} />
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
