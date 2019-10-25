import React, { Component } from 'react'

import LogoImg from '../images/logo.png'
import '../sass/theme-styles.scss'

// import Layout from '../components/Layout'

export default class Index extends Component {

  render() {
    return (
      <div>
        <section className="page404">
          <div className="site-logo logo--center">
            <a href="https://ticketteer.com" className="full-block">
              <img src={LogoImg} alt="ticketteer logo" />
            </a>
              <div className="logo-text">
                <div className="logo-title">ticketteer</div>
                <div className="logo-sub-title">sell more tickets</div>
              </div>
	          </div>
            <div className="page404-content pt-5">
              <h2 className="title">Sorry! The Page Not Found ;(</h2>
              <h5 className="sub-title">We can't find the page you are looking for. Please go to <a href="index.html">Homepage</a>.</h5>
            </div>

            <div className="sub-footer">
              <span>
                Copyright © 2019 <a href="index.html" className="sub-footer__link">ticketteer</a>
              </span>
            </div>
        </section>
      </div>
    )
  }
}
