import React from 'react'

export default ({ pageContext: { t } }) => {
  console.log('t', t)
  return (
    <div className="crumina-stunning-header crumina-stunning-header--small stunning-header--content-inline bg-black">
      <div className="container">
        <div className="stunning-header-content c-white custom-color">
          <div className="inline-items">
            <h4 className="stunning-header-title">{t['stay_informed']}</h4>

            <a href="https://dashboard.ticketteer.com/auth/signup" className="btn btn--green btn--with-shadow f-right">
              {t['start_trial']}
					</a>
          </div>
        </div>
      </div>
    </div>
  )
}
