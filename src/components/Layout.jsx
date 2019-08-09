import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
import SvgIcons from './SvgIcons'
import Header from './Header'
import CookieConsent from "react-cookie-consent"

import '../sass/theme-styles.scss'

export default ({ children, gdpr, ...props }) => {
  return (
    <div>
      <Header {...props} />
      <div className="header-spacer"></div>
      <div className="content-wrapper">
        {children}
      </div>
      <SvgIcons />
      {gdpr
        ? <CookieConsent>
            <div dangerouslySetInnerHTML={{ __html: gdpr.consent_short_text.html }} />
          </CookieConsent>
        : null
      }
    </div>
  )
}
