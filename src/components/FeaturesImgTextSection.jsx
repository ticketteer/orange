import React from 'react'

export default ({ section }) => {
  const content = section.primary
  return (
    <section className="pt120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 negative-margin-bottom80">
            <div className="crumina-module crumina-double-image">
              <img src="img/image6.png" alt="image" />
              <img src="img/image7.png" alt="image" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb80">
            <div className="crumina-module crumina-heading">
              <h3 className="heading-title">{content.section_title.text}</h3>
              <div className="heading-text" dangerouslySetInnerHTML={{ __html: content.section_content.html }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
