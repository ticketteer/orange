import React, { Component } from "react"
import { Helmet } from 'react-helmet'
import isEmpty from 'lodash/isEmpty'
import MainMenu from './MainMenu'

import $ from 'jquery'
if (typeof(window) !== 'undefined') {
  window.$ = $;
  window.jQuery = $;
}

const helmetDefaults = {
  bodyAttributes: {
    class: 'tt-grid'
  },
}

const preloaderStyles = {
  display: 'block',
  position: 'fixed',
  zIndex: '99999',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  minWidth: '100%',
  background: '#da4a18 url(svg/preload.svg) center center no-repeat',
  backgroundSize: '41px',
  opacity: 1
}

export default class Header extends Component {

  render () {
    const { title = '', pageContext: { lang = 'de' }, site } = this.props;
    return (
      <div>
        <Helmet {...helmetDefaults}>
          <html lang={lang} />
          <meta charSet="utf-8" />
          <meta name="description" content={site.meta_desc} />
          <meta name="keywords" content={site.meta_keywords} />
          <link rel="canonical" href="https://ticketteer.com" />
          <title>Ticketteer{isEmpty(title) ? '' : `- ${title}`}</title>
          {/* <script defer src="/js/jquery-3.3.1.js"></script> */}
          <script defer src="/js/js-plugins/moment.js"></script>
          <script defer src="/js/js-plugins/ajax-pagination.js"></script>
          <script defer src="/js/js-plugins/jquery.countdown.min.js"></script>
          <script defer src="/js/js-plugins/crum-mega-menu.js"></script>
          <script defer src="/js/js-plugins/swiper.jquery.min.js"></script>
          <script defer src="/js/js-plugins/velocity.min.js"></script>
          <script defer src="/js/js-plugins/form-actions.js"></script>
          <script defer src="/js/js-plugins/waypoints.js"></script>
          <script defer src="/js/js-plugins/jquery-countTo.js"></script>
          <script defer src="/js/js-plugins/jquery.nice-select.js"></script>
          <script defer src="/js/js-plugins/imagesLoaded.js"></script>
          <script defer src="/js/js-plugins/jquery.magnific-popup.js"></script>
          <script defer src="/js/js-plugins/jquery.matchHeight.js"></script>
          <script defer src="/js/js-plugins/Headroom.js"></script>
          <script defer src="/js/js-plugins/smooth-scroll.js"></script>
          <script defer src="/js/js-plugins/segment.js"></script>
          <script defer src="/js/js-plugins/bootstrap.js"></script>
          <script defer src="/js/js-plugins/isotope.pkgd.min.js"></script>
          <script defer src="/js/js-plugins/ion.rangeSlider.js"></script>
          <script defer src="/js/main.js"></script>
        </Helmet>
        <div id="tt-preloader" style={preloaderStyles} />
        { this.props.site
          ? <MainMenu {...this.props} />
          : null
        }
      </div>
    )
  }
}
