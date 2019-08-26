import React from 'react'
import Typewriter from 'typewriter-effect'

export default ({ data, pageContext: { t } }) => {
  const audiences = data.big_slider_trailing_typewriter.split('/');
  return (
    <div className="swiper-slide bg-1 main-slider-bg-light">

      <div className="container">
        <div className="row table-cell">

          <div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-0 col-xs-12">

            <div className="slider-content align-center">

              <h1 className="slider-content-title" data-swiper-parallax="-100">
                <div className="text">{data.big_slider_title.text}</div>
                <Typewriter
                  options={{
                    strings: audiences,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>

              <h6 className="slider-content-text" data-swiper-parallax="-200">
                {data.big_slider_content.text}
              </h6>
              <div className="main-slider-btn-wrap" data-swiper-parallax="-300">
                <a href="#features" className="btn btn--orange btn--with-shadow">
                  {t['learn_more']}
                </a>

                <a href="https://dashboard.ticketteer.com/signup" className="btn btn-border btn--with-shadow c-primary">
                  {t['try_now']}
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
}
