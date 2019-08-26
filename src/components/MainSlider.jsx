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
      </div>
    </div >
  )
}
