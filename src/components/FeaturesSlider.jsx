import React, { Component } from 'react'
import filter from 'lodash/filter'
import { getBGClass } from '../utils/colors'

const FeatureSliderItem = ({ item }) => (
  <div className={`swiper-slide bg-${item.color_class} ${getBGClass(item.color_class)}`} data-mh="slide">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-lg-offset-1 col-md-5 col-md-offset-0 col-sm-12 col-xs-12">
          <div className="slider-tabs-vertical-thumb">
            <img src={item.image.url} alt={item.image.alt} />
          </div>
        </div>
        <div className="col-lg-6 col-lg-offset-1 col-md-7 col-md-offset-0 col-sm-12 col-xs-12">
          <div className="crumina-module crumina-heading custom-color c-white">
            <h6 className="heading-sup-title">{item.super_title}</h6>
            <h2 className="heading-title">{item.slider_title}</h2>
            <div className="heading-text" dangerouslySetInnerHTML={{ __html: item.description.html }} />
          </div>
          <a href={`/features${item.cta_link.url}`} className="btn btn--white-outline btn--with-shadow">
            {item.cta_text}
          </a>
        </div>
      </div>
    </div>
  </div>
)

const FeatureSliderControl = ({ index, activeIndex, item, setActiveTab }) => {
  const handleSetActive = () => setActiveTab(index)

  return (
    <a className={`slides-item ${activeIndex === index ? 'slides-active slide-active' : ''}`} onClick={handleSetActive}>
      <span className={`round ${item.color_class.replace('-light', '')} ${index === 0 ? 'primary' : ''}`}></span>0{index + 1}.
    </a>
  )
}

export default class FeaturesSlider extends Component {

  state = {
    activeIndex: 0
  }

  setActiveTab = activeIndex => this.setState({ activeIndex })

  render () {
    const { site } = this.props
    console.log(site)
    const phoneSliders = filter(site.body, ['slice_type', 'phone_slider'])
    return (
      <section className="crumina-module crumina-module-slider slider-tabs-vertical-line">
        <div className="swiper-container" data-show-items="1">
          <div className="swiper-wrapper">
            {phoneSliders.map((item, index) => <FeatureSliderItem item={item.primary} key={`phone-slider-${index}`} />)}
          </div>
          <div className="slider-slides slider-slides--vertical-line">
            {phoneSliders.map((item, index) => 
              <FeatureSliderControl
                item={item.primary}
                activeIndex={this.state.activeIndex}
                setActiveTab={this.setActiveTab}
                index={index}
                key={`phone-slider-${index}`}
              />
            )}
          </div>
        </div>
      </section>
    )
  }
}
