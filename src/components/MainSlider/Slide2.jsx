import React from 'react'

export default ({ data }) => (
  <div className="swiper-slide main-slider-bg-light" style={{ backgroundImage: `url(${data.big_slider_image.url})` }}>
    <div className="container table">
      <div className="row table-cell">

        <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12">
          <div className="slider-content align-both">
            <h2 className="slider-content-title" data-swiper-parallax="-100"
              dangerouslySetInnerHTML={{ __html: data.big_slider_title.html }} />
            <h6 className="slider-content-text" data-swiper-parallax="-200">
              {data.big_slider_content.text}
            </h6>

            <div className="main-slider-btn-wrap" data-swiper-parallax="-300">

              <a href="/" className="btn btn-market btn--with-shadow">
                <svg className="utouch-icon utouch-icon-apple-logotype-1">
                  <use xlinkHref="#utouch-icon-apple-logotype-1"></use>
                </svg>
                <div className="text">
                  <span className="sup-title">Herunterladen im</span>
                  <span className="title">App Store</span>
                </div>
              </a>

              <a href="/" className="btn btn-market btn--with-shadow">
                <img className="utouch-icon" src="/svg-icons/google-play.svg" alt="google" />
                <div className="text">
                  <span className="sup-title">Herunterladen bei</span>
                  <span className="title">Google Play</span>
                </div>
              </a>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
)
