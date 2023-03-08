// @ts-check
const includeWatchingAssets = process.env.INCLUDE_WATCHING_ASSETS === 'true'

// https://docusaurus.io/docs/sidebar

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'Integrate a dapp',
      items: ['connecting/connecting-dapps', 'connecting/deeplinks'].concat(
        includeWatchingAssets ? ['connecting/watching-assets'] : [],
      ),
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
        'listing/adding-new-erc721-contracts',
      ],
    },
  ],
}

module.exports = sidebars
