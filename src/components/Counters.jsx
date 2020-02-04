import React from 'react'

export default ({ pageContext: { t } }) => (
  <section className="bg-secondary-color background-contain bg-10">

    <div className="container">
      <div className="row">
        <div className="counters">
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
            <div className="crumina-module crumina-counter-item">
              <div className="counter-numbers counter c-yellow">
                <span data-speed="2000" data-refresh-interval="3" data-to="323" data-from="100">323</span>
                <div className="units">k+</div>
              </div>
              <h5 className="counter-title">{t['tickets']}</h5>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
            <div className="crumina-module crumina-counter-item">
              <div className="counter-numbers counter c-yellow">
                <span data-speed="2000" data-refresh-interval="3" data-to="5321" data-from="1000">5321</span>
              </div>
              <h5 className="counter-title">{t['events']}</h5>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12">
            <div className="crumina-module crumina-counter-item">
              <div className="counter-numbers counter c-yellow">
                <span data-speed="2000" data-refresh-interval="3" data-to="130" data-from="10">130</span>
                <div className="units">k+</div>
              </div>
              <h5 className="counter-title">{t['visitors']}</h5>
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <h5 className="c-white">{t['we_are_growing']}</h5>
            <p className="c-semitransparent-white">{t['we_are_growing_desc']}</p>
          </div>

        </div>
      </div>
    </div>

  </section>
)
