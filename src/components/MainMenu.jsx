import React from "react"
import LogoInv from '../images/logo-white-burned.png'
import Logo from '../images/logo.png'
export default ({ site, page, pageContext: { t }, location }) => {

  return (
    <header className={`header header--menu-rounded ${page ? `header--${page.bg_color}` : 'header--blue-lighteen'}`} id="site-header">

      <div className="container">

        <a href="/" id="top-bar-js" className="top-bar-link">
          &nbsp;
          <svg className="utouch-icon utouch-icon-arrow-top">
            <use xlinkHref="#utouch-icon-arrow-top"></use>
          </svg>
        </a>
      <div className="header-content-wrapper">

        <div className="site-logo">
          <a href="/" className="full-block">&nbsp;</a>
          <img src={page ? LogoInv : Logo} alt={site.title} />
          <div className="logo-text">
            <div className="logo-title">{site.title}</div>
            <div className="logo-sub-title">{site.short_slogan}</div>
          </div>
        </div>

        <nav id="primary-menu" className="primary-menu">

          <button id="menu-icon-trigger" className="menu-icon-trigger showhide">
            <span className="mob-menu--title"></span>
            <span id="menu-icon-wrapper" className="menu-icon-wrapper">
              <svg width="1000px" height="1000px">
                <path id="pathD" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                <path id="pathE" d="M 300 500 L 700 500"></path>
                <path id="pathF" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
              </svg>
            </span>
          </button>

          <ul className="primary-menu-menu">
            <li className="menu-item-has-children">
              <a href="/">{t['home']}</a>
            </li>
            <li className="">
              <a href={['/', '/index.html'].includes(location.pathname) ? '#pricing' : '/#pricing'}>{t['pricing']}</a>
            </li>
            <li className="">
              <a href="/blog">{t['blog']}</a>
            </li>
            <li className="">
              <a href="/contact">{t['contact']}</a>
            </li>
            <li className="w-fill">
              <a href="/signup">{t['signup']}</a>
            </li>
            <li className="w-outline">
              <a href="/login">{t['login']}</a>
            </li>
          </ul>
        </nav>

        </div>

      </div>

    </header>
  )
}
