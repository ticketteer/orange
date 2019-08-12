import React from 'react'
import classNames from 'classnames'

const Col = (item, index) => {
  console.log('item', item);
  return (
    <div className={classNames(`col-lg-5 col-md-5 col-sm-12 col-xs-12`, { 'col-lg-offset-2 col-md-offset-2': index > 0})}>
      <div className="crumina-module crumina-heading">
        <h5 className="heading-title">{item.item.section_title.text}</h5>
        <div className="heading-text" dangerouslySetInnerHTML={{ __html: item.item.section_content.html }} />
      </div>
    </div>
  )
}

export default ({ section }) => {
  console.log(section)
  return (
    <div className="medium-padding120">
      <div className="container">
        <div className="row">
          {section.items.map((item, itemIndex) => <Col item={item} key={`item-${itemIndex}`} index={itemIndex} /> )}
        </div>
      </div>
    </div>
  )
}
