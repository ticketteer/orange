import React from 'react'

const ImageBlock = ({ content }) => (
  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 negative-margin-bottom80">
    <div className="crumina-module crumina-image">
      <img src={content.section_image.url} alt="" />
    </div>
  </div>
)

const TextBlock = ({ content }) => (
  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pb80">
    <div className="crumina-module crumina-heading">
      <h3 className="heading-title">{content.section_title.text}</h3>
      <div className="heading-text" dangerouslySetInnerHTML={{ __html: content.section_content.html }} />
    </div>
  </div>
)

export default ({ section }) => {
  const content = section.primary
  console.log('pos', content.image_position)
  return (
    <section className="pt120">
      <div className="container">
        {content.image_position === 'Left'
          ? <div className="row">
              <ImageBlock content={content} />
              <TextBlock content={content} />
            </div>
          : <div className="row">
              <TextBlock content={content} />
              <ImageBlock content={content} />
            </div>
        }
      </div>
    </section>
  )
}
