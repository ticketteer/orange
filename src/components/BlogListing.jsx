import React from 'react'
import BlogPagePreview from './BlogPagePreview'

export default ({ blog, ...props }) => {
  return (
    <main className="main">
      {blog.nodes.map(entry => <BlogPagePreview {...props} entry={entry} key={entry.id} />)}
    </main>
  )
}
