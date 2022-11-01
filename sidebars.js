// @ts-check

// https://docusaurus.io/docs/sidebar

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Intro',
    },
    {
      type: 'category',
      label: 'Integrate a dapp',
      items: ['connecting/connecting-dapps', 'connecting/deeplinks'],
    },
    {
      type: 'doc',
      id: 'cico',
      label: 'Integrate a cash-in cash-out provider',
    },
    {
      type: 'category',
      label: 'List a project',
      items: [
        'listing/overview',
        'listing/dapp-guidelines',
        'listing/adding-new-dapps',
        'listing/user-documentation-best-practices',
        'listing/asset-guidelines',
      ],
    },
  ],
}

module.exports = sidebars
