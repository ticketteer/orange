import React from 'react'

export default () => {
  return (
    <section className="bg-8 background-contain pt100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-heading">
              <h6 className="heading-sup-title">Schau es dir an</h6>
              <h2 className="heading-title">So funktioniert Tickets online verkaufen mit <span className="c-primary">Ticketteer</span></h2>
              <p className="heading-text">
                Du hast wenig Zeit und möchtest dir möglichst schnell einen Überblick verschaffen?
                Dann schau dir doch unsere kurzes Video an. Es zeigt dir ganz kurz die wichtigsten
                Features und Tools.
              </p>
            </div>
            <a href="https://dashboard.ticketteer.com/auth/signup" className="btn btn-small btn--icon-right btn-border btn--with-shadow c-primary">
              <svg className="utouch-icon utouch-icon-arrow-right1">
                <use xlinkHref="#utouch-icon-arrow-right1"></use>
                </svg>
              <div className="text">
                <span className="title">Demo anfordern</span>
              </div>
            </a>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="crumina-module crumina-our-video">
              <div className="video-thumb">
                <img src="img/tt-video-thumb.png" alt="video" />
                <a href="https://www.youtube.com/watch?v=jMlBNQq6cvQ" className="video-control js-popup-iframe">
                  <img src="img/play.png" alt="play" />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
