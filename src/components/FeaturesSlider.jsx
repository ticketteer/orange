import React from 'react'

// import Slide1 from './MainSlider/Slide1'
// import Slide2 from './MainSlider/Slide2'
// import Slide3 from './MainSlider/Slide3'

export default () => {
  return (
    <section className="crumina-module crumina-module-slider slider-tabs-vertical-line">

      <div className="swiper-container" data-show-items="1">
        <div className="swiper-wrapper">
          <div className="swiper-slide bg-primary-color bg-5" data-mh="slide">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-0 col-sm-12 col-xs-12">
                  <div className="slider-tabs-vertical-thumb">
                    <img src="/img/tt-scan-app-444x727.png" alt="iphone-scan-app" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-lg-offset-1 col-md-7 col-md-offset-0 col-sm-12 col-xs-12">
                    <div className="crumina-module crumina-heading custom-color c-white">
                      <h6 className="heading-sup-title">Einlasskontrolle</h6>
                      <h2 className="heading-title">Keine langen Warteschlangen</h2>
                      <div className="heading-text">
                        Mit der Ticketteer App kannst du einfach, sicher und zügig Tickets entwerten. An mehreren Türen gleichzeitig
                        oder auch offline, wenn der Internetempfang gerade mal streickt. Du kannst die App auch in Kombination
                        mit hochwertigen Handscannern kombinieren, um auch bei schlechten Lichtverhältnissen immer schnell und
                        zuverlässig entwerten zu können.
                      </div>
                    </div>

                    <a href="03_products.html" className="btn btn--white-outline btn--with-shadow">
                      Mehr erfahren
                    </a>

                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide bg-orange-light bg-6" data-mh="slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-0 col-sm-12 col-xs-12">
                    <div className="slider-tabs-vertical-thumb">
                      <img src="img/tt-sale-app-444x727.png" alt="iphone" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-lg-offset-1 col-md-7 col-md-offset-0 col-sm-12 col-xs-12">
                    <div className="crumina-module crumina-heading custom-color c-white">
                      <h6 className="heading-sup-title">Ticketverkauf</h6>
                      <h2 className="heading-title">Verkaufen mit allen Optionen</h2>
                      <div className="heading-text">
                        Ticketteer bietet nahezu alle wichtigen Bezahlmethoden, die ein Veranstalter
                        seinen Kunden bereitstellen muss. Dabei ist unser Kassensystem nicht nur
                        Registrierkassenkonform, sondern bietet auch Lösungen für komplexe Abläufe,
                        wie Umbuchung, Stornierung oder Rabattierungen.
                      </div>
                    </div>

                    <a href="03_products.html" className="btn btn--white-outline btn--with-shadow">
                      Mehr erfahren
                    </a>
                  </div>
                </div>
                </div>
            </div>

            <div className="swiper-slide bg-red bg-7" data-mh="slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-0 col-sm-12 col-xs-12">
                    <div className="slider-tabs-vertical-thumb">
                      <img src="img/iphone3.png" alt="iphone" />
                  </div>
                    </div>
                    <div className="col-lg-6 col-lg-offset-1 col-md-7 col-md-offset-0 col-sm-12 col-xs-12">
                      <div className="crumina-module crumina-heading custom-color c-white">
                        <h6 className="heading-sup-title">Statistik</h6>
                        <h2 className="heading-title">Alle Zahlen gut im Blick</h2>
                        <div className="heading-text">
                          Du kannst in Ticketteer jederzeit die topaktuellen Verkaufsstatistiken, Marketingziele und Besucherströhme
                          analysieren und tracken. Ticketteer vergleicht die aktuelle Verkaufslage mit anderen aus deiner Historie
                          und gibt dir Hinweise auf erforderliche Maßnahmen, wenn es einmal nict so toll läuft.
                    </div>
                      </div>

                      <a href="/" className="btn btn-market btn--with-shadow">
                        <svg className="utouch-icon utouch-icon-apple-logotype-1">
                          <use xlinkHref="#utouch-icon-apple-logotype-1"></use>
                    </svg>
                      <div className="text">
                        <span className="sup-title">Download on the</span>
                        <span className="title">App Store</span>
                      </div>
                  </a>

                    <a href="/" className="btn btn-market btn--with-shadow">
                      <img className="utouch-icon" src="svg-icons/google-play.svg" alt="google" />
                        <div className="text">
                          <span className="sup-title">Download on the</span>
                          <span className="title">Google Play</span>
                        </div>
                  </a>
                </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="slider-slides slider-slides--vertical-line">
            <a href="/" className="slides-item">
              <span className="round primary"></span>01.
          </a>

              <a href="/" className="slides-item">
                <span className="round orange"></span>02.
          </a>

              <a href="/" className="slides-item">
                <span className="round red"></span>03.
          </a>

        </div>

      </div>

    </section>
  )
}