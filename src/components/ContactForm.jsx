import React from 'react'

export default ({ site, pageContext: { t } }) => {
  return (
    <div className="window-popup message-popup">
      <button className="popup-close js-popup-close cd-nav-trigger">
        <svg className="utouch-icon utouch-icon-cancel-1">
          <use xlinkHref="#utouch-icon-cancel-1"></use>
        </svg>
      </button>

      <div className="send-message-popup">
        <h5>{site.contact_form_title}</h5>
        <p>{site.contact_form_desc}</p>
        <form className="contact-form" netlify data-netlify-recaptcha="true" data-netlify="true" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <div className="with-icon">
            <input name="name" placeholder="Your Name" type="text" required="required" />
            <svg className="utouch-icon utouch-icon-user">
              <use xlinkHref="#utouch-icon-user"></use>
            </svg>
          </div>

          <div className="with-icon">
            <input name="email" placeholder="Email Adress" type="text" required="required" />
            <svg className="utouch-icon utouch-icon-message-closed-envelope-1">
              <use xlinkHref="#utouch-icon-message-closed-envelope-1"></use>
            </svg>
          </div>

          <div className="with-icon">
            <input className="with-icon" name="phone" placeholder="Phone Number" type="tel" required="required" />
            <svg className="utouch-icon utouch-icon-telephone-keypad-with-ten-keys">
              <use xlinkHref="#utouch-icon-telephone-keypad-with-ten-keys"></use>
            </svg>
          </div>

          <div className="with-icon">
            <input className="with-icon" name="subject" placeholder="Subject" type="text" required="required" />
            <svg className="utouch-icon utouch-icon-icon-1">
              <use xlinkHref="#utouch-icon-icon-1"></use>
            </svg>
          </div>

          <div className="with-icon">
            <textarea name="message" required="" placeholder="Your Message" style={{ height: '180px' }}></textarea>
            <svg className="utouch-icon utouch-icon-edit">
              <use xlinkHref="#utouch-icon-edit"></use>
            </svg>
          </div>

          <div data-netlify-recaptcha="true"></div>

          <button className="btn btn--green btn--with-shadow full-width">
            {t['send']}
          </button>
          <div />
          <button className="btn btn--secondary js-popup-close full-width" type="button">
            {t['cancel']}
          </button>

        </form>
      </div >
    </div >
  )
}
