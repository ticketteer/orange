import React from 'react'
import Slide1 from './MainSlider/Slide1'
import Slide2 from './MainSlider/Slide2'

export default ({ site }) => {
  return (
    <div className="crumina-module crumina-module-slider container-full-width">
      <div className="swiper-container main-slider navigation-center-both-sides" data-effect="fade">
        <div className="swiper-wrapper">
          {site.big_sliders.map((sliderData, i) => sliderData.big_slider_type === 'First'
                                                    ? <Slide1 data={sliderData} key={`slide-${i}`} />
                                                    : <Slide2 data={sliderData} key={`slide-${i}`} />
          )}
        </div>

        <div className="btn-prev with-bg">
            <svg className="utouch-icon icon-hover utouch-icon-arrow-left-1">
              <use xlinkHref="#utouch-icon-arrow-left-1"></use>
          </svg>
          <svg className="utouch-icon utouch-icon-arrow-left1">
            <use xlinkHref="#utouch-icon-arrow-left1"></use>
          </svg>
      </div>

      <div className="btn-next with-bg">
        <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
          <use xlinkHref="#utouch-icon-arrow-right-1"></use>
          </svg>
      <svg className="utouch-icon utouch-icon-arrow-right1">
        <use xlinkHref="#utouch-icon-arrow-right1"></use>
          </svg >
        </div >

      </div >
    </div >
  )
}
