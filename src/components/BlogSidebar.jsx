import React from 'react'

export default ({pageContext: { t } }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <aside aria-label="sidebar" className="sidebar sidebar-right">

        <aside className="widget w-about">
          <div className="site-logo">
            <a href="/" className="full-block">&nbsp;</a>
            <img src="img/logo.png" alt="Utouch" />
            <div className="logo-text">
              <div className="logo-title">ticketteer</div>
              <div className="logo-sub-title">reaching out for your visitors</div>
            </div>
          </div>

          <p>
          </p>
          <a href="index.html" className="btn btn-border btn--with-shadow c-primary">
            read more
          </a>
        </aside>

          <aside className="widget w-category">
            <h5 className="widget-title">{t['categories']}</h5>
            <ul className="category-list">
              <li>
                <a>Marketingmaßnahmen
                  <span className="cat-count">1</span>
                </a>
              </li>
              <li>
                <a>Ticketverkauf
                  <span className="cat-count">0</span>
                </a>
              </li>
              <li>
                <a>Hardware
                  <span className="cat-count">0</span>
                </a>
              </li>
            </ul>
          </aside>

          <aside className="widget w-popular-products crumina-module crumina-module-slider">
            <h5 className="widget-title">Popular Projects</h5>
            <div className="swiper-container">

              <div className="swiper-wrapper">

                <div className="swiper-slide product-item">
                  <div className="product-item-thumb">
                    <div className="square-colored bg-product-blue-dark"></div>
                    <img src="img/case5.jpg" alt="product" />
                      </div>
                    <div className="product-item-content">
                      <h6 className="title">Duis autem vel eum iriure dolor in hendrerit in vulputate</h6>
                    </div>
                  </div>

                  <div className="swiper-slide product-item">
                    <div className="product-item-thumb">
                      <div className="square-colored bg-product-blue"></div>
                      <img src="img/case1.jpg" alt="product" />
                      </div>
                      <div className="product-item-content">
                        <h6 className="title">Duis autem dolor in hendrerit in vulputate</h6>
                      </div>
                    </div>

                    <div className="swiper-slide product-item">
                      <div className="product-item-thumb">
                        <div className="square-colored bg-product-violet"></div>
                        <img src="img/case2.jpg" alt="product" />
                      </div>
                        <div className="product-item-content">
                          <h6 className="title">Duis autem vel eum iriure dolor in hendrerit in vulputate</h6>
                        </div>
                      </div>
                    </div>
                  <div className="swiper-pagination"></div>

                  </div>
              </aside>


              <aside className="widget w-events crumina-module crumina-module-slider">
                <h5 className="widget-title">Upcoming Events</h5>
                <div className="swiper-container navigation-top-both-sides">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="event-day">March 2017</div>
                      <div className="event-item">
                        <a href="#" className="event-title h6">Claritas est etiam processus dynamicus, qui sequitur</a>
                        <div className="author-info-wrap">
                          <div className="img-author">
                            <img src="img/author7.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <a href="#" className="h6 author-name">Frank Doe</a>
                            <div className="author-company">Student, 23 years old</div>
                          </div>
                        </div>
                      </div>
                      <div className="event-item">
                        <a href="#" className="event-title h6">Investigationes demonstraverunt lectores legere me lius quod</a>
                        <div className="author-info-wrap">
                          <div className="img-author">
                            <img src="img/author3.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <a href="#" className="h6 author-name">Britney Bush</a>
                            <div className="author-company">March 3 - March 6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="event-day">April 2017</div>
                      <div className="event-item">
                        <a href="#" className="event-title h6">Claritas est etiam processus dynamicus, qui sequitur</a>
                        <div className="author-info-wrap">
                          <div className="img-author">
                            <img src="img/author7.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <a href="#" className="h6 author-name">Frank Doe</a>
                            <div className="author-company">Student, 23 years old</div>
                          </div>
                        </div>
                      </div>
                      <div className="event-item">
                        <a href="#" className="event-title h6">Investigationes demonstraverunt lectores legere me lius quod</a>
                        <div className="author-info-wrap">
                          <div className="img-author">
                            <img src="img/author3.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <a href="#" className="h6 author-name">Britney Bush</a>
                            <div className="author-company">March 3 - March 6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="event-day">May 2017</div>
                      <div className="event-item">
                        <a href="#" className="event-title h6">Claritas est etiam processus dynamicus, qui sequitur</a>
                        <div className="author-info-wrap">
                          <div className="img-author">
                            <img src="img/author7.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <a href="#" className="h6 author-name">Frank Doe</a>
                            <div className="author-company">Student, 23 years old</div>
                          </div>
                        </div>
                      </div>
                      <div className="event-item">
                        <a href="#" className="event-title h6">Investigationes demonstraverunt lectores legere me lius quod</a>
                        <div className="author-info-wrap">
                          <div className="img-author">
                            <img src="img/author3.png" alt="author" />
                          </div>
                          <div className="author-info">
                            <a href="#" className="h6 author-name">Britney Bush</a>
                            <div className="author-company">March 3 - March 6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btn-prev">
                    <svg className="utouch-icon icon-hover utouch-icon-arrow-left-1"><use xlinkHref="#utouch-icon-arrow-left-1"></use></svg>
                    <svg className="utouch-icon utouch-icon-arrow-left1"><use xlinkHref="#utouch-icon-arrow-left1"></use></svg>
                  </div>

                  <div className="btn-next">
                    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                    <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                </div>
              </div>

              <a href="09_events_details_conference_workshops.html" className="btn btn--primary btn--with-shadow">
                Read More
                </a>

              </aside>
            </aside>

          </div>
  )
}
