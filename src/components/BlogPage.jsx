import React from 'react'
import moment from 'moment'
import 'moment/locale/de'

import BlogAuthor from './BlogAuthor'

export default class BlogPage extends React.PureComponent {

  sharingOpts = () => {
    var width = 575,
      height = 400,
      left = (window.$(window).width() - width) / 2,
      top = (window.$(window).height() - height) / 2
    return 'status=1' +
      ',width=' + width +
      ',height=' + height +
      ',top=' + top +
      ',left=' + left;
  }

  shareFacebook = () =>
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + this.props.location.href,
                'facebook-share-dialog',
                this.sharingOpts())

  shareTwitter = () =>
    window.open('https://twitter.com/share',
      'twitter-share-dialog',
      this.sharingOpts())

  render () {
    const { blog, pageContext: { t } } = this.props;

    return (
      <div>
        <article className="hentry post post-standard has-post-thumbnail sticky">

          <div className="post-thumb">
            <img src={blog.cover_image.url} alt={blog.title.text} />
            <a href={blog.cover_image.url} className="link-image js-zoom-image">
              <svg className="utouch-icon utouch-icon-zoom-increasing-button-outline"><use xlinkHref="#utouch-icon-zoom-increasing-button-outline"></use></svg>
            </a>
            <button className="link-post">
              <svg className="utouch-icon utouch-icon-link-chain"><use xlinkHref="#utouch-icon-link-chain"></use></svg>
            </button>
            <div className="overlay-standard overlay--blue-dark"></div>
          </div>

          <div className="post__content">

            <button className="social__item main">
              <svg className="utouch-icon utouch-icon-1496680146-share"><use xlinkHref="#utouch-icon-1496680146-share"></use></svg>
            </button>

            <div className="share-product">

              <ul className="socials">
                <li>
                  <button className="social__item facebook" onClick={this.shareFacebook}>
                    <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fillRule="nonzero"></path></svg>
                  </button>
                </li>

                <li>
                  <button className="social__item twitter" onClick={this.shareTwitter}>
                    <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fillRule="nonzero"></path></svg>
                  </button>
                </li>

                <li>
                  <button className="social__item rss">
                    <svg className="utouch-icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414"><path d="M12.8 16C12.8 8.978 7.022 3.2 0 3.2V0c8.777 0 16 7.223 16 16h-3.2zM2.194 11.61c1.21 0 2.195.985 2.195 2.196 0 1.21-.99 2.194-2.2 2.194C.98 16 0 15.017 0 13.806c0-1.21.983-2.195 2.194-2.195zM10.606 16h-3.11c0-4.113-3.383-7.497-7.496-7.497v-3.11c5.818 0 10.606 4.79 10.606 10.607z" /></svg>
                  </button>
                </li>
              </ul>

            </div>

            <div className="post__date">

              <time className="published" dateTime="2017-03-20 12:00:00">
                <button className="number">{moment(blog.timestamp).day()}</button>
                <span className="month">{moment(blog.timestamp).format('MMM YYYY')}</span>
                <span className="day">{moment(blog.timestamp).format('dddd')}</span>
              </time>

            </div>

            <div className="post__content-info">

              <a href="17_news_details.html" className="h5 post__title entry-title">
                {blog.title.text}
              </a>

              <div
                className="post__text"
                dangerouslySetInnerHTML={{ __html: blog.content.html }}
              />

              <div className="post-additional-info">
                <span className="post__author author vcard">
                  {t['by']}
                  &nbsp;
                      {blog.author
                    ? <button className="fn">{blog.author.document[0].data.full_name.text}</button>
                    : ''
                  }
                </span>

                <span className="category">
                  {t['in']}
                  &nbsp;
                      <a href="/blog">{t['blog']}</a>
                </span>

                <a href="/blog" className="btn-next">
                  <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
                  <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
                </a>
              </div>

            </div >
          </div >

        </article >
        <BlogAuthor blog={blog} />
        <div className="pagination-arrow">

          <button className="btn-prev-wrap">
            <div className="btn-prev">
              <svg className="utouch-icon icon-hover utouch-icon-arrow-left-1"><use xlinkHref="#utouch-icon-arrow-left-1"></use></svg>
            <svg className="utouch-icon utouch-icon-arrow-left1"><use xlinkHref="#utouch-icon-arrow-left1"></use></svg>
        </div>
        <div className="btn-content">
          <div className="btn-content-title">Next Post</div>
          <p className="btn-content-subtitle">Standard Post Format...</p>
        </div>
          </button>

          <button className="list-post">
        <svg className="utouch-icon utouch-icon-menu-1"><use xlinkHref="#utouch-icon-menu-1"></use></svg>
          </button>

      <button className="btn-next-wrap">
        <div className="btn-content">
          <div className="btn-content-title">Previous Post</div>
          <p className="btn-content-subtitle">Video Post Format...</p>
        </div>
        <div className="btn-next">
          <svg className="utouch-icon icon-hover utouch-icon-arrow-right-1"><use xlinkHref="#utouch-icon-arrow-right-1"></use></svg>
        <svg className="utouch-icon utouch-icon-arrow-right1"><use xlinkHref="#utouch-icon-arrow-right1"></use></svg>
              </div>
          </button>

          </div >
      </div>
    )
  }
}
