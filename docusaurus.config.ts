import { themes as prismThemes } from 'prism-react-renderer'
import type { Config } from '@docusaurus/types'
import type * as Preset from '@docusaurus/preset-classic'

const buildTimeClassicConfig: Partial<Preset.Options> = {}

// The GitHub workflow sets this environment variable for production.
if (process.env.GTAG_TRACKING_ID) {
  buildTimeClassicConfig.gtag = {
    trackingID: process.env.GTAG_TRACKING_ID,
    anonymizeIP: true,
  }
}

const config: Config = {
  title: 'Valora Docs',
  tagline: 'Documentation for integrating with Valora',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.valora.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'valora-inc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: ({ versionDocsDirPath, docPath }) => {
            if (docPath.startsWith('hooks/')) {
              return `https://github.com/mobilestack-xyz/hooks/edit/main/${versionDocsDirPath}/${docPath.replace(
                /^hooks\//,
                '',
              )}`
            }
            return `https://github.com/valora-inc/docs/edit/main/${versionDocsDirPath}/${docPath}`
          },
          // The default is /docs, but we don't have anything other content but docs.
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        ...buildTimeClassicConfig,
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function (context, options) {
      return {
        name: 'webpack-configuration-plugin',
        configureWebpack(config, isServer, utils) {
          return {
            resolve: {
              // This is needed for our submodules docs to work correctly with Docusaurus.
              // Setting this to `false` doesn't mean it doesn't follow symlinks, it means it doesn't fully resolve them
              // which is the default and doesn't work with our submodule symlink setup.
              // See https://github.com/facebook/docusaurus/issues/3272
              symlinks: false,
            },
          }
        },
      }
    },
  ],

  themeConfig: {
    navbar: {
      title: 'Valora Docs',
      logo: {
        alt: 'Valora Logo',
        src: 'img/valora-app-icon.png',
      },
      items: [
        {
          href: 'https://github.com/valora-inc/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://valoraapp.co/discord',
            },
            {
              label: 'Twitter',
              href: 'https://www.twitter.com/valoraApp',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/valora-inc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Valora Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
