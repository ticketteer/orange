import React, { Component } from 'react'

import '../sass/theme-styles.scss'

// import Layout from '../components/Layout'

export default class Index extends Component {

  render() {
    return (
      <div>
        <section className="page404">
          <div className="site-logo logo--center">
            <a href="index.html" className="full-block">H</a>
            <img src="img/logo-white.png" alt="Utouch" />
              <div className="logo-text">
                <div className="logo-title">ticketteer</div>
                <div className="logo-sub-title">sell more tickets</div>
              </div>
	          </div>
            <div className="col-8 bg-secondary-color"></div>
            <div className="col-8 bg-primary-color"></div>
            <div className="col-8 bg-blue-light">
              <h2 className="error">Error</h2>
            </div>
            <div className="col-8 bg-orange-light">
              <h2 className="number">4</h2>
            </div>
            <div className="col-8 bg-red">
              <h2 className="number">0</h2>
            </div>
            <div className="col-8 bg-green">
              <h2 className="number">4</h2>
            </div>
            <div className="col-8 bg-secondary-color"></div>
            <div className="col-8 bg-primary-color"></div>

            <div className="page404-content">
              <h2 className="title">Sorry! The Page Not Found ;(</h2>
              <h5 className="sub-title">We can't find the page you are looking for. Please go to <a href="index.html">Homepage</a>.</h5>
            </div>

            <div className="sub-footer">
              <span>
                Copyright © 2017 <a href="index.html" className="sub-footer__link">ticketteer</a>
              </span>
            </div>
        </section>
      </div>
    )
  }
}
