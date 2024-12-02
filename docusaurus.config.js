// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

const buildTimeClassicConfig = {}

// The GitHub workflow sets this environment variable for production.
if (process.env.GTAG_TRACKING_ID) {
  buildTimeClassicConfig.gtag = {
    trackingID: process.env.GTAG_TRACKING_ID,
    anonymizeIP: true,
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Valora Docs',
  tagline: 'Documentation for integrating with Valora',
  url: 'https://docs.valora.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'valora-inc', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
          customCss: require.resolve('./src/css/custom.css'),
        },
        ...buildTimeClassicConfig,
      }),
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
