import React, { FC } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO: FC = () => {
  const { pathname } = useLocation()
  let {
    site: {
      siteMetadata: { title, description, url, image },
    },
  } = useStaticQuery(query)
  image = `${url}${image}`
  url = `${url}${pathname}`

  return (
    <Helmet title={title}>
      <html lang="en" />

      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="/site.webmanifest"
      />
      <meta
        name="msapplication-TileColor"
        content="#C38D9E"
      />
      <meta
        name="theme-color"
        content="#C38D9E"
      ></meta>

      <meta
        name="description"
        content={description}
      />
      <meta
        name="image"
        content={image}
      />

      {url && (
        <meta
          property="og:url"
          content={url}
        />
      )}

      {title && (
        <meta
          property="og:title"
          content={title}
        />
      )}

      {description && (
        <meta
          property="og:description"
          content={description}
        />
      )}

      {image && (
        <meta
          property="og:image"
          content={image}
        />
      )}
    </Helmet>
  )
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
      }
    }
  }
`
