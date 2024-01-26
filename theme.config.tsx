import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: (
    <img
      src='https://uptime-storage.s3.amazonaws.com/logos/819c4287de43c14d1f2dcd224ea473f4.png'
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
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          rel='icon'
          href={`https://checkout.pandabase.io/assets/panda.png`}
          type='image/png'
        />
        <meta name='og:title' content={title} />
        <meta name='theme-color' content='#9ebf1b' />

        <meta
          property='og:url'
          content={`https://docs.pandabase.io${router.asPath}`}
        />
        <meta property='og:site_name' content='Pandabase Documentation' />
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
