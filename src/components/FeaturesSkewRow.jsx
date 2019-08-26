import React from 'react'
import { getBGClass } from '../utils/colors'

export default ({ page }) => {
  return (
    <section className={`section-bg-rounded bg-rounded-style1 bg-${page.bg_color} ${getBGClass(page.bg_color)} pt120 not-top-element`}>
      <div className="clouds" />
      <div className="container">
        <div className="row">

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-heading custom-color c-white">
              <h6 className="heading-sup-title">{page.title.text}</h6>
              <h2 className="h1 heading-title">{page.subtitle.text}</h2>
              <div className="heading-text">{page.short_desc.text}</div>
            </div>
          </div>
          <div className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-12 col-xs-12 pb80">
            <img src={page.image.url} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
