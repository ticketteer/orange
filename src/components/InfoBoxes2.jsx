import React from 'react'

// import Slide1 from './MainSlider/Slide1'
// import Slide2 from './MainSlider/Slide2'
// import Slide3 from './MainSlider/Slide3'

export default () => {
  return (
    <section className="bg-9 background-contain medium-padding120">
      <div className="container">
        <div className="row">
          <div className="display-flex info-boxes">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-info-box info-box--standard-round icon-right negative-margin-right150">
                <div className="info-box-image">
                  <img src="svg-icons/chat.svg" alt="chat" className="utouch-icon" />
                  </div>
                  <div className="info-box-content">
                    <h5 className="info-box-title">Private Chat Integration</h5>
                    <p className="info-box-text">Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                      tincidunt.
                    </p>
                  </div>
                </div>

                <div className="crumina-module crumina-info-box info-box--standard-round icon-right negative-margin-right150">
                  <div className="info-box-image">
                    <img src="svg-icons/pictures.svg" alt="chat" className="utouch-icon" />
                  </div>
                    <div className="info-box-content">
                      <h5 className="info-box-title">Perfect Grafic View</h5>
                      <p className="info-box-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                        nonummy nibh euismod.
                    </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 align-center">
                  <img className="particular-image" src="img/image.png" alt="image" />
                    <a href="03_products.html" className="btn btn--red btn--with-shadow">
                      Learn More
                </a>
              </div>

              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <div className="crumina-module crumina-info-box info-box--standard-round negative-margin-left150">
                  <div className="info-box-image">
                    <img src="svg-icons/clock.svg" alt="chat" className="utouch-icon" />
                  </div>
                  <div className="info-box-content">
                    <h5 className="info-box-title">Lifetime Updates</h5>
                    <p className="info-box-text">Sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                      tincidunt.
                    </p>
                  </div>
                </div>

                  <div className="crumina-module crumina-info-box info-box--standard-round negative-margin-left150">
                    <div className="info-box-image">
                      <img src="svg-icons/calendar.svg" alt="chat" className="utouch-icon" />
              </div>
                      <div className="info-box-content">
                        <h5 className="info-box-title">Calendar Sinhronize</h5>
                        <p className="info-box-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                          nonummy euismod.
                </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
    )
  }