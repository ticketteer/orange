import React from 'react'

export default ({ pageContext: { t }, page }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="breadcrumbs-wrap inline-items with-border">
          <button className="btn btn--transparent btn--round">
            <svg className="utouch-icon utouch-icon-home-icon-silhouette"><use xlinkHref="#utouch-icon-home-icon-silhouette"></use></svg>
          </button>

          <ul className="breadcrumbs">
            <li className="breadcrumbs-item">
              <span>{t['page']}&nbsp;</span>
              <svg className="utouch-icon utouch-icon-media-play-symbol"><use xlinkHref="#utouch-icon-media-play-symbol"></use></svg>
            </li>
            <li className="breadcrumbs-item active">
              <span>{page.title.text}</span>
              <svg className="utouch-icon utouch-icon-media-play-symbol"><use xlinkHref="#utouch-icon-media-play-symbol"></use></svg>
            </li>
          </ul>
        </div >
      </div >
    </div >
  )
}
