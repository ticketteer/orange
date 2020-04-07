import React from 'react'
import sortBy from 'lodash/sortBy'
import BlogPagePreview from './BlogPagePreview'

export default ({ blog, ...props }) => {
  return (
    <main className="main">
      {sortBy(blog.nodes, n => n.data.timestamp).reverse().map(entry => <BlogPagePreview {...props} entry={entry} key={entry.id} />)}
    </main>
  )
}
