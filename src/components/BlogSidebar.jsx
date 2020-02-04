import React from 'react'

export default ({ pageContext: { t }, site }) => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
      <aside aria-label="sidebar" className="sidebar sidebar-right">

        <aside className="widget w-about">
          <div className="site-logo">
            <a href="/" className="full-block">&nbsp;</a>
            <img src="/img/logo.png" alt="ticketteer" />
            <div className="logo-text">
              <div className="logo-title">ticketteer</div>
              <div className="logo-sub-title">reaching out for your visitors</div>
            </div>
          </div>

          <p>
          </p>
          <a href="index.html" className="btn btn-border btn--with-shadow c-primary">
            {t['learn_more']}
          </a>
        </aside>
        
        <aside className="widget w-search">
          <button className="btn btn--green-light btn-block" type="button" onClick={() => window.loadMailchimp() }>
            Newsletter bestellen
          </button>
        </aside>

        <aside className="widget w-category">
          <h5 className="widget-title">{t['categories']}</h5>
          <ul className="category-list">
            <li>
              <a href="/blog">Marketingmaßnahmen
                <span className="cat-count">1</span>
              </a>
            </li>
            <li>
              <a href="/blog">Ticketverkauf
                <span className="cat-count">0</span>
              </a>
            </li>
            <li>
              <a href="/blog">Hardware
                <span className="cat-count">0</span>
              </a>
            </li>
          </ul>
        </aside>
      </aside>

      </div>
  )
}
