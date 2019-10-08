import React from 'react';

export default ({ site, pageContext: { t } }) => (
  <section className="bg-primary-color background-contain bg-14 crumina-module crumina-module-subscribe-form">
    <div className="container">
      <div className="row">
        <div className="subscribe-form">
          <div className="subscribe-main-content">
            <img className="subscribe-img" src="/img/subscribe-img.png" alt="" />
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div className="crumina-module crumina-heading">
                <h2 className="heading-title">{site.newsletter_title}</h2>
                <p className="heading-text">{site.newsletter_subtitle}</p>
              </div>
              <form className="form-validate form-inline subscribe-form-js" method="post" data-netlify-honeypot="bot-field" data-netlify="true">
                <input type="hidden" name="form-name" value="newsletter" />
                <input name="email" placeholder={t['enter_your_email']} type="email" />
                <button className="btn btn--green-light">
                  {t['subscribe']}
                </button>
              </form>
            </div>
          </div>
          <div className="subscribe-layer" />
        </div>
      </div>
    </div>
	</section>
)
