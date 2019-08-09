import React from 'react'

export default () => (
  <div className="swiper-slide thumb-left bg-3 main-slider-bg-light">

    <div className="container table full-height">
      <div className="row table-cell">
        <div className="col-lg-6 col-sm-12 table-cell">

          <div className="slider-content align-both">

            <h2 className="slider-content-title" data-swiper-parallax="-100">
              Dein Publikum steht im Mittelpunkt!
            </h2>

            <h6 className="slider-content-text" data-swiper-parallax="-200">
              Mit <span className="c-primary">Ticketteer</span>&nbsp;
              hinterlässt du garantiert einen guten und bleibenden Eindruck!
              Bleib mit deinem Publikum im Kontakt und mach den Besuch deiner
              Veranstaltung zum Komplettereignis!
            </h6>

            <div className="main-slider-btn-wrap" data-swiper-parallax="-300">

              <a href="02_company.html" className="btn btn--lime btn--with-shadow">
                Fang gleich an
                        </a>

            </div>

          </div>

        </div>

        <div className="col-lg-6 col-sm-12 table-cell">
          <div className="slider-thumb" data-swiper-parallax="-300" data-swiper-parallax-duration="500">
            <img src="/img/slides2.png" alt="slider" />
          </div>
        </div>

      </div>
    </div>
  </div>
)