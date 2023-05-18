// @ts-check
const includeWatchingAssets = process.env.INCLUDE_WATCHING_ASSETS === 'true'
const includeValoraHooks = process.env.INCLUDE_VALORA_HOOKS === 'true'

// https://docusaurus.io/docs/sidebar

const valoraHooks = includeValoraHooks
  ? [
      {
        type: 'category',
        label: 'Valora Hooks',
        items: [
          'hooks/overview',
          'hooks/platform',
          {
            type: 'category',
            label: 'Hook Types',
            items: [
              'hooks/types/position',
              'hooks/types/name-resolution',
              'hooks/types/shortcut',
            ],
          },
        ],
      },
    ]
  : []

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
        'listing/adding-new-nft-contracts',
      ],
    },
    ...valoraHooks,
  ],
}

module.exports = sidebars
