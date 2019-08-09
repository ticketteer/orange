import React from 'react'

export default () => {
  return (

    <section className="crumina-module crumina-module-slider pt100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb30">
            <div className="crumina-module crumina-heading">
              <h6 className="heading-sup-title">FAQ</h6>
              <h2 className="heading-title">Fünf wichtige Fragen zur Verwendung von Ticketteer</h2>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="swiper-container navigation-bottom" data-effect="fade">
              <div className="slider-slides">
                <button className="slides-item">
                  1
                  </button>

                <button className="slides-item">
                  2
                  </button>

                <button className="slides-item">
                  3
                  </button>

                <button className="slides-item">
                  4
                  </button>

                <button className="slides-item">
                  5
                  </button>
              </div>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
                    <div className="slider-faqs-thumb">
                      <img className="utouch-icon" alt="" src="svg-icons/dial.svg" />
                      </div>
                    </div>

                    <div className="col-lg-8 col-md-12 col-sm-12" data-swiper-parallax="-300">
                      <h5 className="slider-faqs-title">Bezahle ich auch für Ticketreservierungen?</h5>

                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p><b>Nein!</b> - Du, bzw. deine Besucher zahlen nur, wenn Tickets über unsere
                          externen Bezahlpartnerdienste gekauft werden. Ticketpreis 0,-- : Systemgebühr 0,--
                          </p>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <p>Folgende Vertriebskanäle sind in den Paketen enthalten und ohne weitere Gebühren</p>
                          <ul className="list list--standard">
                        <li>
                          <svg className="utouch-icon utouch-icon-correct-symbol-1">
                            <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                          </svg>
                            <button>Tageskassenverkauf</button>
                        </li>
                        <li>
                          <svg className="utouch-icon utouch-icon-correct-symbol-1">
                            <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                          </svg>
                            <button>Abendkassenverkauf</button>
                        </li>
                        <li>
                          <svg className="utouch-icon utouch-icon-correct-symbol-1">
                            <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                          </svg>
                            <button>Verkauf durch Partner über Ticketteer</button>
                          </li>
                          <li>
                            <svg className="utouch-icon utouch-icon-correct-symbol-1">
                              <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                            </svg>
                            <button>Reservierungen im Ticketteer Online-Shop</button>
                          </li>
                          <li>
                            <svg className="utouch-icon utouch-icon-correct-symbol-1">
                              <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                            </svg>
                            <button>Verkäufe von 0,-- Tickets im Ticketteer Online-Shop</button>
                          </li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
        <div className="swiper-slide">
          <div className="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
            <div className="slider-faqs-thumb">
              <img className="utouch-icon" src="svg-icons/fingerprint.svg" alt="" />
            </div>
          </div>

        <div className="col-lg-8 col-md-12 col-sm-12" data-swiper-parallax="-300">
          <h5 className="slider-faqs-title">Erfüllt ihr die DSGVO?</h5>
          <p>Ja, Ticketteer ist ein DSGVO-Einhalter der 1. Stunde. Wir bemühen uns nicht nur,
            eure Daten und die eurer Kunden so sicher wie möglich und unter den gesetzlichen
            Firsten aufzubewahren, sondern auch sämtliche Zusatzdienste, die mit euren Kundendaten
            in Berührung kommen könnten, im EU-Raum zu behalten.
          </p>
                      
        </div>
      </div>
      <div className="swiper-slide">
        <div className="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
          <div className="slider-faqs-thumb">
                      <img className="utouch-icon" src="svg-icons/payment-method.svg" alt="" />
                      </div>
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12" data-swiper-parallax="-300">
            <h5 className="slider-faqs-title">Benötige ich zusätzliche teure Hardware?</h5>
            <p className="weight-bold">
              Nein! Ticketteer kannst du grundsätzlich mit deinem Smartphone betreiben. Und deine Besucher
              ebenso!
            </p>
            <a href="03_products.html" className="btn btn-border btn--with-shadow c-secondary">
              Probier es aus!
            </a>
          </div>
        </div>
        <div className="swiper-slide">
          <div className="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
            <div className="slider-faqs-thumb">
                      <img className="utouch-icon" src="svg-icons/chat1.svg" alt="" />
            </div>
          </div>

            <div className="col-lg-8 col-md-12 col-sm-12" data-swiper-parallax="-300">
              <h5 className="slider-faqs-title">Habt ihr auch Ticketdrucker und Tickets?</h5>

              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>
                    Ja, klar! Wir können dich voll ausstatten. Von einem kostengünstigen Starter-Paket
                    bis hin zum High-End-Equipment
                  </p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                  <div className="play-with-title">
                    <a href="https://www.youtube.com/watch?v=wnJ6LuUFpMo" className="video-control js-popup-iframe">
                      <img src="img/play.png" alt="play" />
                    </a>
                    <h6 className="play-title">Watch the video of instruction</h6>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="col-lg-4 col-md-12 col-sm-12" data-swiper-parallax="-100">
                <div className="slider-faqs-thumb">
                      <img className="utouch-icon" src="svg-icons/tap.svg" alt="" />
                      </div>
                </div>

                <div className="col-lg-8 col-md-12 col-sm-12" data-swiper-parallax="-300">
                  <h5 className="slider-faqs-title">Eodem typi nunc videntur?</h5>

                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium
                        lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                        anteposuerit litterarum formas humanitatis.
                          </p>
                      <p>Gest etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius.</p>
                      <ul className="list list--standard">
                        <li>
                          <svg className="utouch-icon utouch-icon-correct-symbol-1">
                            <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                              </svg>
                            <button>Mirum est notare quam</button>
                            </li>
                      <li>
                        <svg className="utouch-icon utouch-icon-correct-symbol-1">
                          <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                              </svg>
                            <button>Zril delenit augue duis</button>
                            </li>
                    <li>
                      <svg className="utouch-icon utouch-icon-correct-symbol-1">
                        <use xlinkHref="#utouch-icon-correct-symbol-1"></use>
                              </svg>
                            <button>Gectores legere me lius quod</button>
                            </li>
                          </ul>
              </div>
            </div>
          </div>

        </div>
      </div>


    <div className="btn-slider-wrap navigation-left-bottom">

      <div className="btn-prev">
        <svg className="utouch-icon icon-hover utouch-icon-arrow-left-1">
          <use xlinkHref="#utouch-icon-arrow-left-1"></use>
								</svg>
      <svg className="utouch-icon utouch-icon-arrow-left1">
        <use xlinkHref="#utouch-icon-arrow-left1"></use>
								</svg>
							</div >

  <div className="btn-next">
    <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
      <use xlinkHref="#utouch-icon-arrow-right-1"></use>
								</svg>
  <svg className="utouch-icon utouch-icon-arrow-right1">
    <use xlinkHref="#utouch-icon-arrow-right1"></use>
								</svg>
							</div>

						</div>

					</div>
				</div>
			</div>
		</div>
	</section>
)
}
