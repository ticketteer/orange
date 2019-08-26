import React from 'react'

const InfoBox = ({ box, index }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div className="crumina-module crumina-info-box info-box--standard-hover">

        <div className="info-box-image">
          <img className="utouch-icon" src={box.info_box_image.url} alt={box.info_box_image.alt}  />
          <img className="cloud" src={`img/clouds${8 + index}.png`} alt="cloud" />
        </div>

        <div className="info-box-content">
          <a href={`/features${box.info_box_link.url}`} className="h5 info-box-title">{box.info_box_title.text}</a>
          <div
            className="info-box-text"
            dangerouslySetInnerHTML={{ __html: box.info_box_content.html }}
          />
        </div>

        <a href={`/features${box.info_box_link.url}`} className="btn-next">
          <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1">
            <use xlinkHref="#utouch-icon-arrow-right-1"></use>
          </svg>
          <svg className="utouch-icon utouch-icon-arrow-right1">
            <use xlinkHref="#utouch-icon-arrow-right1"></use>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ({ site }) => {
  return (
    <section className="medium-padding100">
      <div className="container">
        <div className="row">
          {site.info_boxes.map( (box, index) => <InfoBox box={box} index={index} key={`box-${index}`} /> )}
        </div>
      </div>
    </section>
  )
}
