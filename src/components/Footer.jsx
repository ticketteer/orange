import moment from 'moment'
import React from 'react'

export default () => {

  return (
    <footer className="footer" id="site-footer">
      <div className="header-lines-decoration">
        <div className="bg-orange" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
            <div className="widget w-info">
              <div className="site-logo">
                <a href="/" className="full-block">&nbsp;</a>
                <div className="logo-text">
                  <div className="logo-title">ticketteer</div>
                  <div className="logo-sub-title">Verkauf doch einfach MEHR Tickets!</div>
                </div>
              </div>

              <p>Ticketteer wurde 2017 als Hauptprodukt in die Flinkwork eingebracht. Durch ständige Nähe zu diversen
                mittleren und kleinen Veranstaltern hat sich die Software immer an den Bedürfnissen der Veranstalter
                orientiert. Sie wurde im Herbst 2017 mit einer einfachen Bezahlfunktion für Veranstalter veröffentlicht.
                Seither wächst die Fangemeinde um Ticketteer im Raum Österreich und Deutschland.
              </p>

              <a href="/contact" className="learn-more">Learn more about Ticketteer</a>
            </div>

          </div>

          <div className="col-lg-2 col-lg-offset-1 col-md-3 col-sm-12 col-sm-offset-0 col-xs-12">
            <div className="widget w-list">

              <h5 className="widget-title">Useful Links</h5>
              <ul className="list list--primary">
                <li>
                  <a href="/">Home</a>
                  <svg className="utouch-icon utouch-icon-arrow-right">
                    <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/contact">&Uuml;ber uns</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/#pricing">Preise</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/blog">Blog</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/contact">Kontakt</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/agb-besucher">AGB für Besucher</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/agb-veranstalter">AGB für Veranstalter</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
              <li>
                <a href="/datenschutz">Datenschutz</a>
                <svg className="utouch-icon utouch-icon-arrow-right">
                  <use xlinkHref="#utouch-icon-arrow-right"></use>
                </svg>
              </li>
            </ul>
          </div>
        </div>

    <div className="col-lg-3 col-lg-offset-1 col-md-4 col-sm-12 col-sm-offset-0 col-xs-12">
      <div className="widget w-contacts">

        <h5 className="widget-title">Schick uns eine Nachricht</h5>
        <div className="contact-item display-flex">
          <svg className="utouch-icon utouch-icon-telephone-keypad-with-ten-keys">
            <use xlinkHref="#utouch-icon-telephone-keypad-with-ten-keys"></use>
              </svg>
        <span className="info">+43 720 11 66 28</span>
      </div>
      <div className="contact-item display-flex">
        <svg className="utouch-icon utouch-icon-message-closed-envelope-1">
          <use xlinkHref="#utouch-icon-message-closed-envelope-1"></use>
              </svg>
      <span className="info">hello@ticketteer.com</span>
    </div>

    <button className="btn btn--green full-width btn--with-shadow js-message-popup cd-nav-trigger">
      Schick uns eine Nachricht
    </button>
  </div>

    <div className="widget w-follow">
      <ul>
        <li>Follow Us:</li>
        <li>
          <a target="_blank" href="https://facebook.com/ticketteer">
            <span className="fa fa-facebook" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/ticketteer">
            <span className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://linkedin.com/company/ticketteer">
            <span className="fa fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
        </div>
      </div>

    </div>

    <div className="sub-footer">
      <button className="back-to-top">
        <svg className="utouch-icon utouch-icon-arrow-top">
          <use xlinkHref="#utouch-icon-arrow-top"></use>
        </svg>
      </button>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <span>
              Copyright © {moment().year()} <a href="index.html" className="sub-footer__link">ticketteer</a>
            </span>

            <span>
              eine Marke der <b>flinkwork Software GmbH</b>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bg" />

  </footer>
  )
}
