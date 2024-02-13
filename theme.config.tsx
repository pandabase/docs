import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <img
      src='https://cdn.velta.dev/pandabase/assets/logo_text_white.svg'
      height={200}
      width={200}
    />
  ),
  project: {
    link: 'https://github.com/pandabase/docs',
  },
  chat: {
    link: 'https://discord.gg/pandabase',
  },
  search: {
    placeholder: 'Search anything',
  },
  footer: {
    text: (
      <span>
        Pandabase - Copyright © {new Date().getFullYear()} Velta, LLC. All
        rights reserved.
      </span>
    ),
  },
  navigation: {
    prev: true,
    next: true,
  },
  feedback: {
    content: 'Improve →',
  },
  head: function Head({ title }: any) {
    const router = useRouter()
    return (
      <>
        <meta charSet='utf-8' />
        <meta lang='en_US' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='robots' content='index, follow' />
        <meta name='theme-color' content='#577752' />
        <meta
          name='keywords'
          content='Pandabase Documentation, Pandabase.io, e-commerce platform, online store builder, website builder, online business, website development, online store, web design, digital storefront, small business website, webshop, online selling, e-commerce solution, website hosting, website templates, customizable website, selling online, web development, business website, website creation, online entrepreneurship, e-commerce tools'
        />

        <link
          rel='icon'
          href={`https://checkout.pandabase.io/assets/panda.png`}
          type='image/png'
        />

        <meta name='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://docs.pandabase.io${router.asPath}`}
        />
        <meta property='og:site_name' content='Pandabase - Documentation' />
        <meta
          property='og:image'
          name='og:image'
          content='https://cdn.velta.dev/pandabase/assets/og/og_image_main.png'
        />

        <link rel='preconnect' href='https://cdn.velta.dev' crossOrigin='' />
        <link rel='dns-prefetch' href='https://cdn.velta.dev' />

        <link rel='preconnect' href='https://s3.velta.dev' crossOrigin='' />
        <link rel='dns-prefetch' href='https://s3.velta.dev' />
      </>
    )
  },
  useNextSeoProps() {
    return {
      titleTemplate: 'Pandabase - %s',
    }
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <div style={{ textAlign: 'center' }}>{title}</div>
      }
      if (title) {
        return <>{title}</>
      }
      return <>{title}</>
    },
  },
  darkMode: true,
}

export default config
