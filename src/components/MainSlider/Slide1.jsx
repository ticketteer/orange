import React from 'react'

export default ({ data }) => (
  <div className="swiper-slide bg-1 main-slider-bg-light">

    <div className="container">
      <div className="row table-cell">

        <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12">

          <div className="slider-content align-center">

            <h1 className="slider-content-title with-decoration" data-swiper-parallax="-100">
              {data.big_slider_title.text}
              <svg className="first-decoration utouch-icon utouch-icon-arrow-left">
                <use xlinkHref="#utouch-icon-arrow-left"></use>
              </svg>
              <svg className="second-decoration utouch-icon utouch-icon-arrow-left">
                <use xlinkHref="#utouch-icon-arrow-left"></use>
              </svg>
            </h1>

            <h6 className="slider-content-text" data-swiper-parallax="-200">
              {data.big_slider_content.text}
            </h6>
            <div className="main-slider-btn-wrap" data-swiper-parallax="-300">
              <a href="03_products.html" className="btn btn--orange btn--with-shadow">
                Mehr erfahren
                        </a>

              <a href="02_company.html" className="btn btn-border btn--with-shadow c-primary">
                Demo anfordern
                        </a>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="slider-thumb slider1" data-swiper-parallax="-400" data-swiper-parallax-duration="600">
            <img src={data.big_slider_image.url} alt="slider" className={data.big_slider_image.alt} />
          </div>
        </div>

      </div>
    </div>
  </div>
)
