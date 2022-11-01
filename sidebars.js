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
      label: 'Integrate with Valora',
      items: ['connecting/connecting-dapps', 'connecting/deeplinks'],
    },
    {
      type: 'category',
      label: 'List your project in Valora',
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
