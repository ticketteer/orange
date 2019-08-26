import React from 'react'

export default ({ blog }) => {
  return (
    <div className="blog-details-author">
      <div className="img-author">
        <img src={blog.author.document[0].data.picture.url} alt="author" />
      </div>
      <div className="author-info">
        <button className="h6 author-name">{blog.author.document[0].data.full_name.text}</button>
        <p>{blog.author.document[0].data.short_description.text || `-`}</p>
      </div>
    </div>
  )
}
